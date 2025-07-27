import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div className="max-w-5xl mx-auto p-6">
        <Header/>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}