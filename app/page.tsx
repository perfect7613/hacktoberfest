"use client"


import AboutUs from "@/components/AboutUs";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Comments from "@/components/Comments";
import CommentList from "@/components/CommentList"
import { useState } from "react";


export default function Home() {
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (newComment: string) => {
    setComments([...comments, newComment]);
  };
  return (
    <div className="overflow-hidden">
      <AboutUs/>
      <div className="relative">
        <Card/>
      </div>
      <div className="relative">
        <Comments onCommentSubmit={handleCommentSubmit} />
        <CommentList comments={comments} />
      </div>
      
    </div>
  )
}
