import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const query = `{
  allPost(sort: [ { publishedAt: DESC } ]) {
    slug {
      current
    }
    title
    publishedAt
    coverImage {
     asset {
      url
     }
    }
    excerpt
    body
    description
  }
}`

async function getBlogPosts() {
  const response = await fetch(`https://${process.env.PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/production/default`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PUBLIC_SANITY_READ_TOKEN}`
      },
      body: JSON.stringify({
        query
      })
    })
  const data = await response.json();
  return data.data.allPost;
}

export default getBlogPosts;