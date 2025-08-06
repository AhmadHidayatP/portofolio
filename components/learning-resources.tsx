"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Share2, Video } from "lucide-react"
import { motion } from "framer-motion"

export default function LearningResources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      title: "Lecturer Certification and Training Data Collection Information System",
      subtitle: "Information Technology Department",
      description: "A comprehensive information system for managing faculty certification and training data in the Information Technology Department.",
      technologies: ["PHP", "MySQL", "Flutter", "Laravel"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Share2 className="h-6 w-6 text-green-600 dark:text-green-400" />,
      iconBg: "bg-green-100 dark:bg-green-900",
      title: "Customer Satisfaction Survey System",
      subtitle: "Information Technology Department",
      description: "A web-based survey system designed to collect and analyze customer satisfaction data with comprehensive reporting features.",
      technologies: ["PHP", "MySQL", "Chart.js", "CSS", "Laravel"],
      color: "from-green-500 to-green-700",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="project" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-400/5 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6" ref={ref}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              My{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Projects</span>
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Explore the key projects I've developed, showcasing my expertise in system development and data management.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/50 to-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${project.iconBg}`}
                >
                  {project.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight">{project.title}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{project.subtitle}</p>
                <p className="mb-4 text-muted-foreground">{project.description}</p>

                {/* Technology Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:-translate-x-10" />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
