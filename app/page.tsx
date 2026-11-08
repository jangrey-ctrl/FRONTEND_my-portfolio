
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2 } from "lucide-react";

export default function Home()  {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row">

      
        <div className="flex-1 space-y-6">

          <Badge variant="secondary" className="px-4 py-2">
            BSIT Student | Aspiring Developer
          </Badge>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I'm
            <br />
            <span className="text-blue-600">
              John Rhey Romagosa
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-gray-600">
            Welcome to my personal portfolio! I am a 2nd year
            Information Technology student at Naga College Foundation.
            I enjoy learning about technology, coding, and creating
            simple websites.
          </p>

       
          <div className="flex flex-wrap gap-4">

            <Button
              size="lg"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Me
            </Button>

          </div>

       
          <div className="flex items-center gap-4 pt-4">

            <Code2 size={24} className="text-blue-600" />

            <span className="text-sm text-gray-500">
              Student Developer
            </span>

          </div>

        </div>

   
        <div className="flex flex-1 justify-center">

          <Card className="w-full max-w-sm border-none shadow-xl">

            <CardContent className="flex flex-col items-center gap-6 p-8">


              <Avatar className="h-40 w-40 border-4 border-blue-100">

                <AvatarFallback className="bg-blue-600 text-5xl font-bold text-white">
                  JR
                </AvatarFallback>

              </Avatar>

              <div className="text-center">

                <h2 className="text-2xl font-bold">
                  John Rhey Romagosa
                </h2>

                <p className="mt-2 text-gray-500">
                  Bachelor of Science in Information Technology
                </p>

              </div>

              <div className="flex flex-wrap justify-center gap-2">

                <Badge>HTML</Badge>
                <Badge>Python</Badge>
                <Badge>C/C++</Badge>
                <Badge>React</Badge>

              </div>

            </CardContent>

          </Card>

        </div>

      </section>


    </main>
  );
}
