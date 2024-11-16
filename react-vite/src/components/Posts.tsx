import { PostsTypes } from "../types/postTypes";

export const Posts: React.FC<PostsTypes> = ({ id, title, body, cover }) => {
  return (
    <>
      <div className="posts-card">
        <img src={cover} alt={`Post ${id}`} />
        <h1>Título: {title}</h1>
        <h2>Comentário: {body}</h2>
      </div>
    </>
  );
};
