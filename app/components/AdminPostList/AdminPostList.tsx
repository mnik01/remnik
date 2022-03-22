import { VFC } from "react";
import { AdminPostListProps } from "./types";
import { Link } from "remix";
import { ActionIcon } from '@mantine/core';
import { Edit, Trash } from 'tabler-icons-react';

export const AdminPostList: VFC<AdminPostListProps> = ({posts}) => (
  <>
    {posts.map((post) => (
      <li className="underline p-2 bg-blue-200 rounded-md flex gap-4 items-center" key={post.slug}>
        <div className="buttons flex gap-2">
          <ActionIcon size="xl" color="blue" radius="xl">
            <Edit />
          </ActionIcon>
          <ActionIcon color="red" size="xl" radius="xl">
            <Trash />
          </ActionIcon>
        </div>
        <Link className="content-center" to={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </li>
    ))}
  </>
)
