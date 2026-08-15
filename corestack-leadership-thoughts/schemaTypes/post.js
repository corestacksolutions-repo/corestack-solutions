import { defineField, defineType } from "sanity";

export default defineType({
    name: "post",
    title: "Post",
    type: "document",

    fields: [
        // --------------------------------------------------
        // TITLE
        // --------------------------------------------------
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) =>
                Rule.required().min(10).max(120),
        }),

        // --------------------------------------------------
        // SLUG
        // --------------------------------------------------
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        // --------------------------------------------------
        // EXCERPT
        // --------------------------------------------------
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 8,
            description:
                "A short summary of the article used on blog cards and previews.",
            validation: (Rule) =>
                Rule.required().min(50).max(300),
        }),

        // --------------------------------------------------
        // AUTHOR
        // --------------------------------------------------
        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }],
            validation: (Rule) => Rule.required(),
        }),

        // --------------------------------------------------
        // MAIN IMAGE
        // --------------------------------------------------
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                    description:
                        "Describe the image for accessibility and SEO.",
                    validation: (Rule) => Rule.required(),
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),

        // --------------------------------------------------
        // CATEGORIES
        // --------------------------------------------------
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "category" }],
                },
            ],
            validation: (Rule) =>
                Rule.required().min(1),
        }),

        // --------------------------------------------------
        // PUBLISHED DATE
        // --------------------------------------------------
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),

        // --------------------------------------------------
        // READ TIME
        // --------------------------------------------------
        defineField({
            name: "readTime",
            title: "Read Time",
            type: "string",
            description:
                'Example: "5 min read"',
            validation: (Rule) => Rule.required(),
        }),

        // --------------------------------------------------
        // ARTICLE BODY
        // --------------------------------------------------
        defineField({
            name: "body",
            title: "Body",
            type: "blockContent",
            validation: (Rule) => Rule.required(),
        }),
    ],

    // --------------------------------------------------
    // SANITY STUDIO PREVIEW
    // --------------------------------------------------
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
            publishedAt: "publishedAt",
        },

        prepare(selection) {
            const {
                title,
                author,
                publishedAt,
                media,
            } = selection;

            return {
                title,
                media,
                subtitle: [
                    author && `by ${author}`,
                    publishedAt &&
                        new Date(publishedAt).toLocaleDateString(),
                ]
                    .filter(Boolean)
                    .join(" • "),
            };
        },
    },
});