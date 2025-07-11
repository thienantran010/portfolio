import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="mb-4">Coming soon! Stay tuned for my latest posts.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}
