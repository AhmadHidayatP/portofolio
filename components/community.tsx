"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import  Counter from "@/components/ui/counter"
import { Building2, Calendar, Users2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      icon: <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      title: "Backend Developer Intern",
      company: "PT Inagata Persada",
      period: "2025 – now",
      description: "Currently working as a Backend Developer Intern, developing and maintaining web-based systems using modern technologies.",
    },
    {
      icon: <Users2 className="h-6 w-6 text-green-600 dark:text-green-400" />,
      iconBg: "bg-green-100 dark:bg-green-900",
      title: "Chairman",
      company: "UKM Bhakti Karya Mahasiswa",
      period: "2024 – 2025",
      description: "Led student organization activities and managed team coordination for community service programs.",
    },
    {
      icon: <Building2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      iconBg: "bg-purple-100 dark:bg-purple-900",
      title: "Software Quality Assurance Intern",
      company: "PT RetGoo Sentris Informa",
      period: "2021",
      description: "Performed software testing and quality assurance to ensure reliable and robust applications.",
    },
    {
      icon: <Building2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
      iconBg: "bg-orange-100 dark:bg-orange-900",
      title: "Business Process Engineer Intern",
      company: "PT RetGoo Sentris Informa",
      period: "2021",
      description: "Analyzed and optimized business processes to improve operational efficiency and system workflows.",
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
    <section id="experience" className="w-full py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:14px_14px]" />
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Experience</span>
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              My professional journey in backend development, system analysis, and quality assurance across various organizations.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background p-6 transition-all hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${experience.iconBg}`}
                >
                  {experience.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{experience.title}</h3>
                <div className="mb-2 text-sm font-medium text-primary">{experience.company}</div>
                <div className="mb-3 text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {experience.period}
                </div>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
              </div>

              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-background/50 backdrop-blur-sm">
            <Building2 className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">Education: </span>
            <span className="ml-1 text-muted-foreground">Politeknik Negeri Malang (D4 Sistem Informasi Bisnis)</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
