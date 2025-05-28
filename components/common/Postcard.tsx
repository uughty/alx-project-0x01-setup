import React from 'react';

const PostCard: React.FC<{ title: string; body: string }> = ({ title, body }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
