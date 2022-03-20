import { json, Link, useLoaderData } from "remix";

import { getPosts } from "~/apis/post.server";
import type { Post } from "~/apis/post.server";

export const loader = async () => json(await getPosts());

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <main className="index-screen">
      <img src="/assets/beams.jpg" alt="" className="index-screen__img" width="1308" />
      <div className="index-screen__grid"></div>
      <div className="index-screen__card">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold">Posts</h1>
          <ul>
            {posts.map((post) => (
              <li className="pt-4 underline" key={post.slug}>
                <Link to={post.slug}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
