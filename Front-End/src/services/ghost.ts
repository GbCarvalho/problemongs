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
      include: "tags,authors",
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string | string[]) {
  let slug = postSlug;

  return await ghostAPI.posts
    .read({
      slug,
      include: "tags,authors",
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
