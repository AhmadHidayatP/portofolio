"use client";

import { useEffect, useState } from "react";
import type { HTMLAttributes } from "react";
import Image from "next/image";
import { Code, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "@/components/magicui/dock";
export type IconProps = HTMLAttributes<SVGElement>;

const Icons = {
  gitHub: (props: IconProps) => (
    <svg
      viewBox="0 0 438.549 438.549"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      {...props}
    >
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 ...[132 bytes truncated]"></path>
    </svg>
  ),
  linkedIn: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      {...props}
    >
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.849-3.036-1.852 0-2.135 1.445-2.135 2.939v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.366-1.849 3.6 0 4.266 2.369 4.266 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 20.452h3.554V9H3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),

};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
      <section className="relative w-full py-20 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />

            {/* Animated Gradient Orbs */}
            <div
               className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 blur-3xl"
               style={{
                  transform: `translate(${scrollY * 0.1}px, ${
                     scrollY * -0.05
                  }px)`,
                  opacity: Math.max(0.2, 1 - scrollY * 0.001),
               }}
            />
            <div
               className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-primary/20 blur-3xl"
               style={{
                  transform: `translate(${scrollY * -0.1}px, ${
                     scrollY * 0.05
                  }px)`,
                  opacity: Math.max(0.2, 1 - scrollY * 0.001),
               }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
         </div>

         <div className="container px-4 md:px-6 relative">
           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                 className="flex flex-col justify-center space-y-8"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
              >
                 <div className="relative">
                  <Dock direction="middle" className="ml-0 mr-auto" iconSize={48}>
                    <DockIcon className="overflow-visible">
                      <a
                        className="block w-full h-full"
                        href="https://github.com/AhmadHidayatP"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <img
                          src="https://cdn.simpleicons.org/github/181717"
                          alt="GitHub"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </a>
                    </DockIcon>
                    <DockIcon className="overflow-visible">
                      <a
                        className="block w-full h-full"
                        href="https://www.linkedin.com/in/ahmadhidayatp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           className="w-full h-full object-contain"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </DockIcon>
                  </Dock>
                </div>
                 <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                       Ahmad Hidayat <br />
                       <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                          Permana
                       </span>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                       I am an undergraduate student pursuing a Bachelor of Applied Science in Business Information Systems at State Polytechnic of Malang, with a strong focus on back-end web development.
                    </p>
                 </div>
              </motion.div>

               <motion.div
                  className="relative mx-auto lg:ml-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <div className="relative">
                     {/* Decorative Elements */}
                     <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg border border-primary/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <Code className="h-6 w-6 text-primary" />
                     </div>
                     <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-lg border border-blue-400/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-400" />
                     </div>

                     {/* Main Image */}
                     <div className="relative z-10 rounded-2xl overflow-hidden border shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-400/10" />
                        <Image
                          src="/hero.png"
                          width={600}
                          height={500}
                          className="w-full h-auto object-cover" alt={""}                        />
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
