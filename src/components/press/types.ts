// Types for press post data from Tina CMS
export interface PressPost {
  title: string
  description: string
  date: string
  author: string
  coverImage?: string | null
  tags?: string[] | null
  published: boolean
  body: unknown // TinaMarkdown content type
}

export interface TinaQueryResponse<T> {
  data: T
  query: string
  variables: Record<string, unknown>
}

export interface PressPostClientProps {
  data: {
    post: PressPost
  }
  query: string
  variables: Record<string, unknown>
}

