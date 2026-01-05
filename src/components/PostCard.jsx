import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link to={`/post/${post.slug}`} className="block">
      <article className="gradient-border rounded-lg bg-dark-surface p-5 transition-all hover:bg-dark-surface/80">
        <h3 className="text-lg font-medium text-white mb-1">{post.title}</h3>
        <time className="text-sm text-gray-muted">{formattedDate}</time>
        <p className="mt-3 text-gray-text text-sm leading-relaxed">{post.excerpt}</p>
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
      </article>
    </Link>
  );
}
