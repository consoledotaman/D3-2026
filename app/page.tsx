import Image from "next/image";
import Link from "next/link";
import RetroGrid from "@/components/ui/retro-grid";
import BitButton from "@/components/ui/8bit-button";

const COLORS = [
  "text-[#00BBFE]",
  "text-[#FFCC00]",
  "text-[#FF0103]",
  "text-[#34B900]",
] as const;

const COMING_SOON = "COMING SOON";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <RetroGrid className="fixed inset-0 w-full h-full" />

      <div className="relative z-10 flex flex-col items-center justify-items-end gap-20 px-4 mt-24">
        <div className="w-[320px] sm:w-120 md:w-165 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
          <Image
            src="/D3logo.png"
            alt="D³ Fest 2026"
            width={600}
            height={300}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        <h1 className="font-(family-name:--font-mario) text-2xl sm:text-3xl md:text-4xl tracking-wide flex select-none drop-shadow-[0_4px_0_rgba(0,0,0,1)]">
          {COMING_SOON.split("").map((char, index) => {
            if (char === " ") {
              return <span key={index} className="w-4 sm:w-6" aria-hidden="true" />;
            }
            return (
              <span
                key={index}
                className={`inline-block ${COLORS[index % COLORS.length]} animate-retro-float`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {char}
              </span>
            );
          })}
        </h1>

        <BitButton
          asChild
          aria-label="Go to gallery"
          className="font-(family-name:--font-steve) text-xl sm:text-2xl tracking-widest px-10 py-3 mt-20"
        >
          <Link href="/gallery">GALLERY</Link>
        </BitButton>
      </div>
    </div>
  );
}
