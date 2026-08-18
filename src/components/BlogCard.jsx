import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

export default function BlogCard({ post, variant = 'default' }) {
  const isCompact = variant === 'compact'

  return (
    <Link
      to={`/blog/${post.id}`}
      className={`group block bg-white rounded-2xl overflow-hidden card-hover ${
        isCompact ? '' : ''
      }`}
      style={{ boxShadow: '0 2px 12px rgba(74, 74, 74, 0.06)' }}
      id={`blog-card-${post.id}`}
    >
      <div className={`${isCompact ? 'flex' : ''}`}>
        {/* Cover Image */}
        <div className={`overflow-hidden ${isCompact ? 'w-1/3 shrink-0' : 'aspect-[16/10]'}`}>
          <img
            src={post.coverImage}
            alt={post.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isCompact ? 'aspect-square' : ''
            }`}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className={`p-5 ${isCompact ? 'flex-1 flex flex-col justify-center' : ''}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="tag text-[11px]">{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-morandi-tea">
              <Calendar size={12} />
              {post.publishDate}
            </span>
          </div>
          <h3 className={`font-bold text-morandi-dark group-hover:text-morandi-green-dark transition-colors mb-2 line-clamp-2 ${
            isCompact ? 'text-sm' : 'text-base'
          }`}>
            {post.title}
          </h3>
          {!isCompact && (
            <p className="text-morandi-dark-soft text-sm line-clamp-2 mb-3">{post.summary}</p>
          )}
          <span className="inline-flex items-center gap-1 text-morandi-green text-sm font-medium group-hover:gap-2 transition-all">
            閱讀更多 <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}
