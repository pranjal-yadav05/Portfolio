"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NowPlaying() {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      const res = await fetch("/api/now-playing");
      const data = await res.json();
      setTrack(data);
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!track || !track.isPlaying) {
    return (
      <p className="w-full px-3 py-2 text-xs text-[#9ca3af] bg-[#020617]/70 backdrop-blur-md border-t border-white/10">
        🎵 Not playing anything right now
      </p>
    );
  }

  return (
    <motion.a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      flex items-center gap-3
      w-full
      px-3 py-2
      bg-[#020617]/80 backdrop-blur-md
      border-t border-white/10
      text-left
      hover:bg-[#020617]/90
      transition
    ">
      {track.albumArt && (
        <img
          src={track.albumArt}
          alt={track.title}
          className="w-10 h-10 rounded-md"
        />
      )}

      <div className="flex flex-col text-sm overflow-hidden">
        <span className="text-[10px] uppercase tracking-wider text-[#9ca3af]">
        Currently Listening to
        </span>
        <span className="text-sky-300 font-medium truncate">{track.title}</span>
        <span className="text-xs text-[#9ca3af] truncate">
          {track.artist} • YouTube Music
        </span>
      </div>
    </motion.a>
  );
}
