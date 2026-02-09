import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link to={`/${post.slug}`} className="block group">
      <article className="card bg-dark-surface p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-base font-medium text-heading group-hover:text-accent transition-colors">{post.title}</h3>
          <time className="font-mono-display text-xs text-body-muted whitespace-nowrap pt-0.5">{formattedDate}</time>
        </div>
        <p className="text-base text-body leading-relaxed mb-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </article>
    </Link>
  );
}
