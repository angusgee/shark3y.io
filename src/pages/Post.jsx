import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
        <Link to="/" className="text-neon-cyan hover:text-neon-purple transition-colors">
          ← Back to home
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-text hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to posts
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{post.title}</h1>
          <time className="text-gray-muted">{formattedDate}</time>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded border border-dark-border text-gray-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-text leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 p-6 rounded-lg bg-dark-surface border border-dark-border">
            <p className="text-gray-muted text-sm">
              Full writeup coming soon.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
