"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Animation() {
  const [textState, setTextState] = useState({ index: 0, text: "" });
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const fullText = "Hi, I'm Thienan!";

  useEffect(() => {
    intervalId.current = setInterval(
      () =>
        setTextState((prevTextState) => {
          if (prevTextState.index < fullText.length) {
            return {
              index: prevTextState.index + 1,
              text: prevTextState.text + fullText.charAt(prevTextState.index),
            };
          } else {
            clearInterval(intervalId.current as NodeJS.Timeout);
            return { ...prevTextState };
          }
        }),
      100
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center">
      <h1 className="text-4xl md:text-5xl md:mr-10 font-bold text-foreground flex items-center">
        {textState.text}
        <span className="animate-blink">|</span>
      </h1>
      <div className="mt-8 md:mt-0">
        <Image
          src="/headshot.jpg"
          alt="Thienan's Profile Picture"
          width={300}
          height={300}
          className="rounded-full bg-muted"
        />
      </div>
    </section>
  );
}
