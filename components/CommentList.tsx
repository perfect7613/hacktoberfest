import React from 'react';

interface CommentListProps {
  comments: string[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className='flex justify-center'>
      {comments.map((comment, index) => (
        <div key={index}>{comment}</div>
      ))}
    </div>
  );
};

export default CommentList;