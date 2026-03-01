import * as React from "react"
import { cn } from "@/lib/utils"

const typographyVariants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  lead: "text-muted-foreground text-xl leading-7",
  large: "text-lg font-semibold",
  small: "text-sm leading-none font-medium",
  muted: "text-muted-foreground text-sm",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  inlineCode: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
} as const

export interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4"
}

function TypographyH1({ className, ...props }: React.ComponentProps<"h1">) {
  return <h1 className={cn(typographyVariants.h1, className)} {...props} />
}

function TypographyH2({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn(typographyVariants.h2, className)} {...props} />
}

function TypographyH3({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn(typographyVariants.h3, className)} {...props} />
}

function TypographyH4({ className, ...props }: React.ComponentProps<"h4">) {
  return <h4 className={cn(typographyVariants.h4, className)} {...props} />
}

function TypographyP({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn(typographyVariants.p, className)} {...props} />
}

function TypographyLead({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn(typographyVariants.lead, className)} {...props} />
}

function TypographyLarge({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn(typographyVariants.large, className)} {...props} />
}

function TypographySmall({ className, ...props }: React.ComponentProps<"small">) {
  return <small className={cn(typographyVariants.small, className)} {...props} />
}

function TypographyMuted({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn(typographyVariants.muted, className)} {...props} />
}

function TypographyBlockquote({ className, ...props }: React.ComponentProps<"blockquote">) {
  return <blockquote className={cn(typographyVariants.blockquote, className)} {...props} />
}

function TypographyList({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul className={cn(typographyVariants.list, className)} {...props} />
}

function TypographyInlineCode({ className, ...props }: React.ComponentProps<"code">) {
  return <code className={cn(typographyVariants.inlineCode, className)} {...props} />
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
  typographyVariants,
}
