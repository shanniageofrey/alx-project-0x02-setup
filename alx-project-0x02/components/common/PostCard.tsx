import { type PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border p-4 rounded-md shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}