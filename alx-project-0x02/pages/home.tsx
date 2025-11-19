import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps, HomeProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC<HomeProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState<CardProps[]>(posts);

  const handleAddPost = (newPost: CardProps) => {
    setLocalPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-6">

        {/* TITLE + ADD BUTTON */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Home Posts</h1>

          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-5 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-3 gap-4">
          {localPosts.map(({ title, content }, index) => (
            <Card key={index} title={title} content={content} />
          ))}
        </div>

      </main>

      {/* MODAL */}
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const posts: CardProps[] = [
    {
      title: "Welcome to the Dashboard",
      content: "This card displays an overview of the dashboard features.",
    },
    {
      title: "User Profile",
      content: "Manage and update your personal information here.",
    },
    {
      title: "Notifications",
      content: "Here you can view your recent alerts and updates.",
    },
  ];

  return {
    props: {
      posts,
    },
  };
}

export default Home;
