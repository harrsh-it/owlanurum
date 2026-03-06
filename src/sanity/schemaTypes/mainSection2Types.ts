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
    // Product 1
    defineField({
      name: "product1Title",
      title: "Product 1 Title",
      type: "string"
    }),
    defineField({
      name: "product1Description",
      title: "Product 1 Description",
      type: "text"
    }),
    defineField({
      name: "product1ButtonText",
      title: "Product 1 Button Text",
      type: "string"
    }),
    defineField({
      name: "product1Image",
      title: "Product 1 Image",
      type: "image"
    }),

    // Product 2
    defineField({
      name: "product2Title",
      title: "Product 2 Title",
      type: "string"
    }),
    defineField({
      name: "product2Description",
      title: "Product 2 Description",
      type: "text"
    }),
    defineField({
      name: "product2Image",
      title: "Product 2 Image",
      type: "image"
    }),

    // Product 3
    defineField({
      name: "product3Title",
      title: "Product 3 Title",
      type: "string"
    }),
    defineField({
      name: "product3Description",
      title: "Product 3 Description",
      type: "text"
    }),
    defineField({
      name: "product3ButtonText",
      title: "Product 3 Button Text",
      type: "string"
    }),
    defineField({
      name: "product3Image",
      title: "Product 3 Image",
      type: "image"
    })

  ],

  preview: {
    select: {
      title: "previewTitle",
    },
  },
  
});