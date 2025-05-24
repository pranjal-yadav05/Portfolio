import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pranjal Yadav | Portfolio",
  description:
    "Personal portfolio website of Pranjal Yadav, showcasing projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        {/* Apply dark mode on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force dark mode
                document.documentElement.classList.add('dark');
                document.documentElement.style.backgroundColor = '#121212';
                document.body.style.backgroundColor = '#121212';
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} transition-colors duration-300 bg-[#121212] text-white`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
