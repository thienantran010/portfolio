"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [textState, setTextState] = useState({ index: 0, text: "" });
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const fullText = "Hi I'm Thienan";

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
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4">
        <section className="py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-foreground mb-4 h-20">
              {textState.text}
              <span className="animate-blink">|</span>
            </h1>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Thienan's Profile"
              width={400}
              height={400}
              className="rounded-full bg-muted mx-auto"
            />
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            My Approach to Work
          </h2>
          <p className="text-lg text-muted-foreground">
            I believe in creating innovative solutions through collaborative
            effort and continuous learning. My approach combines cutting-edge
            technology with user-centric design, ensuring that every project not
            only meets but exceeds expectations. I'm passionate about pushing
            the boundaries of what's possible in web development, always
            striving for efficiency, scalability, and elegant code.
          </p>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            In the works:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden border-accent">
                <Image
                  src="/placeholder.svg"
                  alt={`Project ${project}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-foreground">
                    Project {project}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Exciting new project coming soon. Stay tuned for updates!
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button
                    size="sm"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Get in Touch
          </h2>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-background border border-input rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-background border border-input rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 bg-background border border-input rounded-md"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Send Message
            </Button>
          </form>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Thienan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
