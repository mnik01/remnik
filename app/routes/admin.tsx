import { json, useLoaderData } from "remix";

import { getPosts } from "~/apis/post.server";
import type { Post } from "~/apis/post.server";
import { AdminPostList as PostList } from "~/components/AdminPostList";
import { Button } from "@mantine/core";
import { PlaylistAdd } from "tabler-icons-react";


export const loader = async () => {
  return json(await getPosts());
};



export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="admin bg-blue-100 h-screen">
      <nav>
        <div className="bg-slate-100 justify-between relative shadow-md p-8 flex items-center gap-2">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              Admin panel
            </h1>
            <h2 className="scale-90 text-stone-500">/ posts list</h2>
          </div>
          <Button size="md" variant="outline" uppercase>
            <PlaylistAdd />
          </Button>
        </div>
        <ul className="flex flex-col gap-2 w-fit p-8">
          <PostList posts={posts} />
        </ul>
      </nav>
    </div>
  );
}
