import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:"fk01z8jq",
  dataset:"production",
  apiVersion:"2024-06-01",
  useCdn : true,
  perspective: 'published',
})

export async function sanityFetch({ query, params = {}, tags }) {
  return client.fetch(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}