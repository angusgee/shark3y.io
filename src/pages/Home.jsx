import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl mb-4 font-saira text-white">
          shark3y
        </h1>
        <p className="text-gray-text text-md">
          security research • bug bounty • web pentesting
        </p>
        <p className="mt-8 text-white text-lg max-w-xl mx-auto leading-relaxed">
          Hi, I'm shark3y, a security researcher and bug bounty hunter with 20+ CVEs. Get in touch for web pentesting enquiries!
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6 text-white">Latest Posts</h2>
        <div className="flex flex-col gap-4">
          {posts.slice(0, 5).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
