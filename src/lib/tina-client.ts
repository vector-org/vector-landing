import { createClient } from "tinacms/dist/client"
import { queries } from "../../tina/__generated__/types"

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
const token = process.env.TINA_TOKEN

if (!clientId) {
  throw new Error("NEXT_PUBLIC_TINA_CLIENT_ID is required to build Tina content")
}

if (!token) {
  throw new Error("TINA_TOKEN is required to build Tina content")
}

const client = createClient({
  url: `https://content.tinajs.io/1.6/content/${clientId}/github/${branch}`,
  token,
  queries
})

export default client
