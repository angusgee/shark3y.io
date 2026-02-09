import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <section className="mb-20 animate-in">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <span className="font-mono-display text-xs text-accent tracking-wider uppercase">Active</span>
        </div>
        <h1 className="font-mono-display text-3xl md:text-4xl font-bold text-heading mb-3 tracking-tight">
          shark3y
        </h1>
        <p className="font-mono-display text-base text-body-muted mb-6 tracking-wide">
          security researcher &middot; bug bounty hunter
        </p>
        <p className="text-body max-w-lg leading-relaxed">
          Security researcher and bug bounty hunter with 35+ CVEs. Get in touch for web pentesting or collabs.
        </p>
      </section>

      <section className="animate-in animate-in-delay-2">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-mono-display text-xs text-body-muted tracking-wider uppercase">Latest Posts</h2>
          <div className="flex-1 h-px bg-dark-border"></div>
        </div>
        <div className="flex flex-col gap-3">
          {posts.slice(0, 5).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
