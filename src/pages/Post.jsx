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
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-xl font-bold text-heading mb-4">Post not found</h1>
        <Link to="/" className="text-accent hover:underline transition-colors text-sm">
          &larr; Back to home
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
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-body-muted hover:text-accent transition-colors mb-10 text-sm"
      >
        <ArrowLeft size={14} /> Back to posts
      </Link>

      <article className="animate-in">
        <header className="mb-10">
          <h1 className="font-mono-display text-2xl md:text-3xl font-bold text-heading mb-3 tracking-tight">{post.title}</h1>
          <time className="font-mono-display text-xs text-body-muted">{formattedDate}</time>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        {loading ? (
          <p className="text-body-muted text-sm">Loading...</p>
        ) : content ? (
          <div className="prose prose-invert max-w-none
            prose-headings:font-mono-display prose-headings:text-heading prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:font-semibold
            prose-p:text-body prose-p:leading-relaxed prose-p:text-base
            prose-li:text-body prose-li:text-base
            prose-strong:text-heading
            prose-a:text-accent hover:prose-a:underline prose-a:no-underline
            prose-code:text-accent prose-code:bg-dark-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono-display
            prose-pre:bg-dark-surface prose-pre:border prose-pre:border-dark-border prose-pre:rounded
            prose-blockquote:border-accent prose-blockquote:text-body prose-blockquote:not-italic
            prose-hr:border-dark-border
            prose-ul:marker:text-body-muted"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        ) : (
          <div className="card bg-dark-surface p-6">
            <p className="text-body-muted text-sm">Full writeup coming soon.</p>
          </div>
        )}
      </article>
    </div>
  );
}
