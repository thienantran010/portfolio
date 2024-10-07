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
import Animation from "./animation";
import Navbar from "./navbar";
import { ReactNode } from "react";
interface Projects {
  name: string;
  description: string;
  github?: string;
  link?: string;
}

interface BlueTextProps {
  children: ReactNode;
}

const BlueText = ({ children }: BlueTextProps) => {
  return <span className="text-blue-500">{children}</span>;
};

export default function Home() {
  const projects: Projects[] = [
    {
      name: "Eat Here",
      description:
        "Sources local food deals so you can make a smart decision on where to eat",
    },
  ];

  return (
    <div className="bg-background">
      <Navbar />

      <main className="container mx-auto flex-col space-y-20 px-4 md:px-60">
        <Animation />

        <section className="align-center">
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
                Enhanced the <BlueText>React</BlueText>-based customer booking
                platform by introducing features like filtering, sorting, and
                expanded data displays, significantly boosting user engagement
                and experience
              </li>
              <li className="text-lg font-medium">
                Extended <BlueText>tRPC</BlueText> functions and updated the{" "}
                <BlueText>Prisma</BlueText> schema to link surcharges with
                customer accounts, automating a substantial portion of admin
                tasks and improving operational efficiency
              </li>
              <li className="text-lg font-medium">
                Overhauled the <BlueText>Typesense</BlueText> schema and
                refactored React components to flag new customers, allowing the
                team to prioritize new customers, improving retention
              </li>
              <li className="text-lg font-medium">
                Optimized <BlueText>Docker</BlueText> configurations by
                improving image layering and caching, reducing build times by 30
                minutes per deployment and increasing development speed
              </li>
              <li className="text-lg font-medium">
                Spearheaded the migration from <BlueText>Yup</BlueText> to{" "}
                <BlueText>Zod</BlueText> for improved input validation and type
                safety, reducing the risk of server crashes and bugs
              </li>
            </ul>
            <p className="text-lg text-foreground">
              I&apos;m passionate about software that solves everyday problems.
              Take a peek at my projects to learn more!
            </p>
          </div>
        </section>

        <section className="pb-20">
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
