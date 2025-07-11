"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const phrases = [
  "C#, Blazor, TypeScript, React, Python",
  "Boston University '24",
  "Volleyball noob",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <Image
        src="/headshot.jpg"
        alt="Thienan's Profile Picture"
        width={200}
        height={200}
        className="rounded-full bg-muted mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">Thienan Tran</h1>
      <p className="mb-2">
        Junior Developer at TOAD LLC, previously Software Developer Intern at
        Pelicargo.
      </p>

      <div className="h-10 mb-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="whitespace-nowrap"
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <Link href="/blog" className="text-blue-600 hover:underline">
        Read my blog
      </Link>
    </main>
  );
}
