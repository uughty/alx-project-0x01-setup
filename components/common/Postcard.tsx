import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => (
  <div className="border rounded p-4 shadow hover:shadow-lg transition">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{body}</p>
  </div>
);

export default PostCard;
