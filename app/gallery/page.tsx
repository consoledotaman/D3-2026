import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import BitButton from "@/components/ui/8bit-button";
import { SpiralGallery } from "./spiral-gallery";
import type { Product } from "@/lib/products";
import { ArrowLeft } from "lucide-react";

const IMAGE_EXTS = /\.(jpg|jpeg|png|webp|gif|avif)$/i;

function getProducts(): Product[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXTS.test(f))
      .map((f, i) => ({
        id: `gallery-${i}`,
        title: f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
        image: `/gallery/${f}`,
      }));
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const products = getProducts();

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">

      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/d3logo.png"
          alt="D³ Fest 2026"
          width={80}
          height={40}
          className="h-auto w-[150px] object-contain"
          priority
        />
      </div>


      <div className="absolute top-6 right-6 z-20">
        <BitButton
          asChild
          className="font-[family-name:var(--font-steve)] text-sm tracking-widest px-5 py-1"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            BACK
          </Link>
        </BitButton>
      </div>

      <SpiralGallery products={products} />
    </main>
  );
}
