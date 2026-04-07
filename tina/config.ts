import { defineConfig } from "tinacms"

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Press Releases",
        path: "content/posts",
        format: "mdx",
        defaultItem: () => {
          return {
            title: "New Press Release",
            date: new Date().toISOString(),
            author: "Vector Team",
            published: false,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            description: "A short description for SEO and preview cards",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Publication Date",
            required: true,
            ui: {
              dateFormat: "MMMM DD, YYYY",
            },
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
            description: "Hero image for the press release",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            description: "Tags for categorizing posts",
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
            description: "Toggle to publish/unpublish this post",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "ImageBlock",
                label: "Image",
                fields: [
                  {
                    name: "src",
                    label: "Image Source",
                    type: "image",
                  },
                  {
                    name: "alt",
                    label: "Alt Text",
                    type: "string",
                  },
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string",
                  },
                ],
              },
              {
                name: "VideoBlock",
                label: "Video",
                fields: [
                  {
                    name: "src",
                    label: "Video Source",
                    type: "string",
                    description: "URL or path to video file"
                  },
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string"
                  },
                  {
                    name: "autoplay",
                    label: "Autoplay",
                    type: "boolean"
                  },
                  {
                    name: "loop",
                    label: "Loop",
                    type: "boolean"
                  },
                  {
                    name: "muted",
                    label: "Muted",
                    type: "boolean"
                  }
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/press/${document._sys.filename}`,
          filename: {
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "") || "new-press-release"}`
            },
          },
        },
      },
    ],
  },
})
