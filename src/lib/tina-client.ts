import { createClient } from "tinacms/dist/client"
import { queries } from "../../tina/__generated__/types"

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
const token = process.env.TINA_TOKEN

const client =
  clientId && token
    ? createClient({
        url: `https://content.tinajs.io/1.6/content/${clientId}/github/${branch}`,
        token,
        queries
      })
    : null

export async function getPostConnection() {
  if (!client) {
    return { data: { postConnection: { edges: [] } } }
  }

  return client.queries.postConnection()
}

export async function getPost(relativePath: string) {
  if (!client) {
    return null
  }

  return client.queries.post({ relativePath })
}

export default client
