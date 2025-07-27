import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      title: "Welcome",
      content: "This is a reusable card component in Next.js.",
    },
    {
      title: "Hi",
      content: "This is a reusable card component in Next.js two.",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Header />
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
}