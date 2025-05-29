import React from 'react';

type PostCardProps = {
  title: string;
  content: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-xl font-bold">{title}</h2>
    <p>{content}</p>
  </div>
);

export default PostCard;
