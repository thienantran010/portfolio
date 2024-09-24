"use client";

import Image from "next/image";
import Link from "next/link";
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
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import CopyableText from "@/components/CopyableText";

interface Projects {
  name: string;
  description: string;
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

  const projects: Projects[] = [
    {
      name: "Eat Here",
      description:
        "Sources local food deals so you can make a smart decision on where to eat",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background">
        <div className="text-foreground py-2 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <CopyableText textToCopy="thienantranbusiness@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                thienantranbusiness@gmail.com
              </CopyableText>
              <Link
                href="mailto:thienantranbusiness@gmail.com"
                className="flex items-center transition-colors"
              ></Link>
              <Link
                href="/Thienan_Tran_resume.pdf"
                className="flex items-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/thienan-tran-35176620b/"
                className="flex items-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/thienantran010"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-60">
        <section className="min-h-screen pb-20 flex flex-col md:flex-row items-center justify-between">
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
              I&apos;m Thienan, a recent graduate from Boston University. While
              I was a junior software engineer at a startup, I gained valuable
              experience in building and maintaining web applications developed
              with the React, tRPC, and Prisma stack. Here are some of my feats
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
              I&apos;m passionate about software that solves everyday problems.
              Take a peek at my projects to learn more!
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
                  <Show if={!!project.link}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      View Project
                    </a>
                  </Show>
                  <Show if={!!project.github}>
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
      </main>
    </div>
  );
}
