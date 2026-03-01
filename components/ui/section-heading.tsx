"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { typographyVariants } from "@/components/ui/typography"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ badge, title, description, centered = true, className }: SectionHeadingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={cn("space-y-4", centered && "flex flex-col items-center justify-center text-center", className)}
    >
      <div className="space-y-2">
        {badge && (
          <motion.div variants={itemVariants}>
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">{badge}</div>
          </motion.div>
        )}
        <motion.h2
          variants={itemVariants}
          className={cn(typographyVariants.h2, "relative border-0 pb-0 md:pb-2")}
        >
          {title}
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full hidden md:block" />
        </motion.h2>
        {description && (
          <motion.p variants={itemVariants} className={cn(typographyVariants.lead, "max-w-[900px]")}>
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

