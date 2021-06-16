import GhostContentAPI from "@tryghost/content-api";

export const ghostAPI = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_API_KEY,
  version: "v3",
});

export async function getPosts() {
  return await ghostAPI.posts
    .browse({
      limit: "all",
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string) {
  return await ghostAPI.posts
    .read({
      slug: postSlug,
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
