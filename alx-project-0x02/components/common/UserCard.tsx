import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-6">
          <Link
            href="/home"
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Posts
          </Link>
          <Link
            href="/users"
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
}