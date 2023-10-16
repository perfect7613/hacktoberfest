"use client"

import React, { useState } from 'react';

interface CommentFormProps {
  onCommentSubmit: (comment: string) => void;
}

const Comments: React.FC<CommentFormProps> = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };
  return (
    <div className='flex justify-center mt-[100px] mr-[50px]'>
        <h1 className='ml-[50px] font-semibold text-3xl'>Want to add any comments?</h1>
        <form className='px-1' onSubmit={handleSubmit}>
            <textarea className='w-[400px] h-[200px] mt-[100px] border-black-700 bg-gray-200 ml-[-400px]'  value={comment} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
            placeholder="Write a comment..."></textarea>
            <button className='bg-blue-500 pt-2 pl-4 rounded-lg pr-4 pb-2 mt-[240px] ml-[-200px] mb-[10px]' type='submit'>Post</button>
        </form>
    </div>
  )
}

export default Comments;