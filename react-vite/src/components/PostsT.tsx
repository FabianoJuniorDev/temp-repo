import { Posts } from "./Posts";
import { PostsTypes } from "../types/postTypes";

interface PostsTwoProps {
  posts: PostsTypes[];
}

export const PostsTwo: React.FC<PostsTwoProps> = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <Posts
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
      />
    ))}
  </div>
);
