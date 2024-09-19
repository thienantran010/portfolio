'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="p-5 bg-background shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Your Name</Link>
          <div className="space-x-4">
            <Link href="#about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-10 px-4">
        <section id="hero" className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-8">I'm a passionate developer creating amazing web experiences</p>
          <Button size="lg">View My Work</Button>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image 
              src="/placeholder.svg" 
              alt="Your Name" 
              width={300} 
              height={300} 
              className="rounded-full"
            />
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="overflow-hidden">
                <Image 
                  src="/placeholder.svg" 
                  alt={`Project ${project}`} 
                  width={300} 
                  height={200} 
                  className="w-full h-40 object-cover"
                />
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Project {project}</CardTitle>
                  <CardDescription className="text-sm">Brief description</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" className="w-full">View</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}