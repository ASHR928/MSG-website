export const painting = {
    name: 'painting',
    title: 'Painting',
    type: 'document',
    fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true, // Enable cropping and focus points
          },
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number', // This field stores the price as a number
        },
        {
            name: 'brief',
            title: 'Brief',
            type: 'string', // This field stores the price as a number
          },
        // Add more fields if needed (e.g., description, artist, etc.)
      ],
  }
  