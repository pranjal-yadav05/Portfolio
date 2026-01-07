import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.LASTFM_API_KEY;
  const USERNAME = process.env.LASTFM_USERNAME;
  console.log("Here they are")
 console.log(API_KEY, USERNAME);
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 20 } });
    const data = await res.json();

    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = track["@attr"]?.nowplaying === "true";

    return NextResponse.json({
      isPlaying,
      title: track.name,
      artist: track.artist["#text"],
      albumArt:
        track.image?.find((img) => img.size === "medium")?.["#text"] ??
        null,
      songUrl: track.url,
    });
  } catch (err) {
    return NextResponse.json({ isPlaying: false });
  }
}
