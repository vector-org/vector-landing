import client from "@/lib/tina-client"
import { notFound } from "next/navigation"
import PressPostClient from "../../../components/pressPostClient"

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection()
  const posts = postsResponse.data.postConnection.edges || []

  return posts.map((post) => ({
    slug: post?.node?._sys?.filename || ""
  }))
}

export default async function PressPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let data, query, variables

  try {
    const result = await client.queries.post({
      relativePath: `${slug}.mdx`
    })
    data = result.data
    query = result.query
    variables = result.variables

    if (!data.post.published) {
      notFound()
    }
  } catch {
    notFound()
  }

  return <PressPostClient data={data} query={query} variables={variables} />
}

