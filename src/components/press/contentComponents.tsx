import Image from "next/image"
import type { ComponentPropsWithoutRef } from "react"

// Types for custom components
interface ImageBlockProps {
  src: string
  alt: string
  caption?: string
}

// Image Block Component
export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Styled HTML Components
export function MarkdownImage({
  url,
  src,
  alt = ""
}: {
  url?: string
  src?: string
  alt?: string
}) {
  return (
    <div className="relative my-8 aspect-video w-full overflow-hidden rounded-lg">
      <Image src={url || src || ""} alt={alt} fill className="object-cover" />
    </div>
  )
}

export function H1(props: ComponentPropsWithoutRef<"h1">) {
  return <h1 className="mb-6 mt-12 text-4xl font-bold md:text-5xl" {...props} />
}

export function H2(props: ComponentPropsWithoutRef<"h2">) {
  return <h2 className="mb-4 mt-10 text-3xl font-bold md:text-4xl" {...props} />
}

export function H3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className="mb-3 mt-8 text-2xl font-semibold md:text-3xl" {...props} />
  )
}

export function H4(props: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4 className="mb-2 mt-6 text-xl font-semibold md:text-2xl" {...props} />
  )
}

export function Paragraph(props: ComponentPropsWithoutRef<"p">) {
  return <p className="my-4 text-base leading-relaxed md:text-lg" {...props} />
}

export function Anchor(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="font-medium text-primary underline hover:text-secondary"
      {...props}
    />
  )
}

export function UnorderedList(props: ComponentPropsWithoutRef<"ul">) {
  return <ul className="my-4 ml-6 list-disc space-y-2" {...props} />
}

export function OrderedList(props: ComponentPropsWithoutRef<"ol">) {
  return <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />
}

export function ListItem(props: ComponentPropsWithoutRef<"li">) {
  return <li className="text-base md:text-lg" {...props} />
}

export function Blockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="my-6 border-l-4 border-primary bg-[--background] py-4 pl-6 pr-4 italic"
      {...props}
    />
  )
}

export function Code(props: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className="rounded bg-[--background] px-2 py-1 font-mono text-sm"
      {...props}
    />
  )
}

export function Pre(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-[--background] p-4 font-mono text-sm"
      {...props}
    />
  )
}

export function HorizontalRule(props: ComponentPropsWithoutRef<"hr">) {
  return <hr className="my-8 border-t-2 border-input" {...props} />
}

// Component map for TinaMarkdown
export const pressContentComponents = {
  ImageBlock,
  img: MarkdownImage,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  hr: HorizontalRule
}

