import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/apis/post.server";
import type { Post } from "~/apis/post.server";

export const loader: LoaderFunction = async ({
  params,
}) => {
  invariant(params.slug, "expected params.slug");
  return json(await getPost(params.slug));
};

export default function PostSlug() {
  const post = useLoaderData<Post & { html: string }>();
  return (
    <main>
      <div className="post-screen__card">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </main>
  );
}
