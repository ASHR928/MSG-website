import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:"fk01z8jq",
  dataset:"production",
  apiVersion:"2024-06-01",
  useCdn : true,
  perspective: 'published',
})

export async function sanityFetch({ query, params = {}, tags }) {
  try {
    return await client.fetch(query, params, {
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
        tags,
      },
    });
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error; // Re-throw the error to propagate it upwards
  }
}
