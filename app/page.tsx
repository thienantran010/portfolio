"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Show } from "@/components/Show";
import { useState, useEffect, useRef } from "react";
interface Project {
  name: string;
  description: string;
  pic?: string;
  github?: string;
  link?: string;
}

export default function Home() {
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

  const projects = [
    {
      name: "Eat Here",
      description:
        "Sources local food deals to make a smart decision on where to eat",
    },
  ];

  return (
    <div className="min-h-screen bg-background px-60">
      <main className="container mx-auto">
        <section className="py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col space-y-4">
            <h1 className="text-5xl font-bold text-foreground flex items-center">
              {textState.text}
              <span className="animate-blink">|</span>
            </h1>
          </div>
          <div>
            <Image
              src="/headshot.jpg"
              alt="Thienan's Profile Picture"
              width={400}
              height={400}
              className="rounded-full bg-muted"
            />
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">About</h2>
          <div className="flex flex-col space-y-7">
            <p className="text-lg text-foreground">
              I'm Thienan, a recent graduate from Boston University with a
              strong foundation in software engineering, specifically in
              building robust applications using React, tRPC, and Prisma. I’ve
              also gained valuable experience working as a Junior Software
              Engineer at a startup called Pelicargo. Here are some of my feats
              💪:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-6">
              <li className="text-lg font-medium">
                Diagnosed and fixed a critical emailing bug right before a
                release, keeping the team on track.
              </li>
              <li className="text-lg font-medium">
                Spearheaded a system-wide migration from Yup to Zod to eliminate
                type issues and bugs.
              </li>
              <li className="text-lg font-medium">
                Explored and integrated the HubSpot API to automate newsletter
                signups and emails (wow I worked with emails a lot).
              </li>
            </ul>
            <p className="text-lg text-foreground">
              I'm passionate about software that solves everyday problems. Take
              a peek at my projects to learn more!
            </p>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Projects:
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="bg-gray-100 text-gray-900 border border-gray-300 shadow-md w-full max-w-md mx-auto relative"
              >
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold flex justify-between">
                    {project.name}
                    {!project.link && !project.github && (
                      <Badge className="bg-blue-500">Coming Soon</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-md">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4 justify-center">
                  <Show if={project.link}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      View Project
                    </a>
                  </Show>
                  <Show if={project.github}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                      GitHub
                    </a>
                  </Show>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Get in Touch
          </h2>
          <form className="max-w-md mx-auto space-y-6 bg-gray-100 p-6 rounded-md shadow-md border border-gray-300">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full py-2 px-3 bg-white border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full py-2 px-3 bg-white border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full py-2 px-3 bg-white border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Send Message
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
