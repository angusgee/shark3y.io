import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { posts } from '../data/posts';

const markdownFiles = import.meta.glob('../content/*.md', { query: '?raw', import: 'default' });

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!post) return;

    const path = `../content/${post.slug}.md`;
    const loader = markdownFiles[path];

    if (loader) {
      loader().then((raw) => {
        setContent(raw);
        setLoading(false);
      });
    } else {
      setContent('');
      setLoading(false);
    }
  }, [post]);

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

        {loading ? (
          <p className="text-gray-muted">Loading...</p>
        ) : content ? (
          <div className="prose prose-invert max-w-none
            prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-text prose-p:leading-relaxed
            prose-li:text-gray-text
            prose-strong:text-white
            prose-a:text-neon-cyan hover:prose-a:text-neon-purple
            prose-code:text-neon-cyan prose-code:bg-dark-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-dark-surface prose-pre:border prose-pre:border-dark-border
            prose-blockquote:border-neon-cyan prose-blockquote:text-gray-text
            prose-hr:border-dark-border"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        ) : (
          <div className="mt-8 p-6 rounded-lg bg-dark-surface border border-dark-border">
            <p className="text-gray-muted text-sm">
              Full writeup coming soon.
            </p>
          </div>
        )}
      </article>
    </div>
  );
}
