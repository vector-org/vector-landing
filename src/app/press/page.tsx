import client from "@/lib/tina-client"
import Link from "next/link"
import Image from "next/image"
import NavMenu from "../../components/navMenu"
import Footer from "../../components/footer"

export default async function PressIndex() {
  const postsResponse = await client.queries.postConnection()
  const posts = postsResponse.data.postConnection.edges || []

  const publishedPosts = posts
    .filter((post) => post?.node?.published)
    .sort((a, b) => {
      const dateA = new Date(a?.node?.date || 0).getTime()
      const dateB = new Date(b?.node?.date || 0).getTime()
      return dateB - dateA
    })

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <NavMenu />

      <div className="relative flex w-screen max-w-[1600px] grow flex-col items-center bg-white px-8 py-16 md:px-24">
        <div className="mb-16 flex w-full flex-col items-center gap-6">
          <h1 className="text-center text-5xl font-bold md:text-7xl">Press</h1>
          <p className="max-w-2xl text-center text-lg font-medium text-gray-600">
            News, updates, and insights from the VECTOR team
          </p>
        </div>

        {publishedPosts.length === 0 ? (
          <div className="flex w-full flex-col items-center justify-center py-16">
            <p className="text-xl text-gray-500">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
            {publishedPosts.map((post) => {
              const node = post?.node
              if (!node) return null

              const filename = node._sys?.filename || ""
              const date = new Date(node.date || "").toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }
              )

              return (
                <Link
                  key={filename}
                  href={`/press/${filename}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border-2 border-input transition-all hover:border-primary hover:shadow-lg"
                >
                  {node.coverImage && (
                    <div className="relative aspect-video w-full overflow-hidden bg-[--background]">
                      <Image
                        src={node.coverImage}
                        alt={node.title || ""}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-4 p-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                      <span>{date}</span>
                      <span>•</span>
                      <span>{node.author}</span>
                    </div>
                    <h2 className="text-2xl font-semibold group-hover:text-primary">
                      {node.title}
                    </h2>
                    <p className="line-clamp-3 text-base text-gray-600">
                      {node.description}
                    </p>
                    {node.tags && node.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {node.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-[--background] px-3 py-1 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

      <div className="relative flex w-screen max-w-[1600px] flex-col items-center border-t border-black bg-white">
        <div className="flex w-full px-8 md:px-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}

