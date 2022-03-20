import { json, Link, useLoaderData, Outlet } from "remix";

import { getPosts } from "~/post.server";
import type { Post } from "~/post.server";
import adminStyles from "~/styles/admin.css";


export const loader = async () => {
  return json(await getPosts());
};

export const links = () => [{ rel: "stylesheet", href: adminStyles }];


export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
