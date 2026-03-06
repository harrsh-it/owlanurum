import { defineField, defineType } from "sanity";

export const mainSection2Types = defineType({
  name: "mainSection2",
  title: "Home Section 2",
  type: "document",

  fields: [

    defineField({
      name: "previewTitle",
      title: "Preview Name (for Admin List)",
      type: "string",
      description: "This name will appear in the Sanity dashboard list",
    }),

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
    }),

    // CATEGORY CARDS
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            defineField({
              name: "title",
              title: "Category Title",
              type: "string",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),

            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
            }),

            defineField({
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            }),

          ],
        },
      ],
    }),

    // PRODUCTS
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            defineField({
              name: "name",
              title: "Product Name",
              type: "string",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),

            defineField({
              name: "image",
              title: "Product Image",
              type: "image",
              options: { hotspot: true },
            }),

            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
            }),

            defineField({
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            }),

          ],
        },
      ],
    }),

  ],

  preview: {
    select: {
      title: "previewTitle",
    },
  },
  
});