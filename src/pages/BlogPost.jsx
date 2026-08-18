import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import PropertyModal from '../components/PropertyModal'
import BlogCard from '../components/BlogCard'
import { useState } from 'react'
import posts from '../data/posts.json'
import properties from '../data/properties.json'

export default function BlogPost() {
  const { id } = useParams()
  const [selectedProperty, setSelectedProperty] = useState(null)

  const post = posts.find((p) => p.id === parseInt(id))
  if (!post) {
    return (
      <div className="pt-24 section-container text-center">
        <p className="text-5xl mb-4">📝</p>
        <h1 className="text-2xl font-bold text-morandi-dark mb-4">找不到這篇文章</h1>
        <Link to="/blog" className="btn-primary">
          <ArrowLeft size={16} /> 回到租屋指南
        </Link>
      </div>
    )
  }

  // Related properties
  const relatedProperties = properties.filter((p) => post.relatedPropertyIds?.includes(p.id))

  // Related posts (same category, exclude current)
  const relatedPosts = posts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)

  // Render content with paragraphs
  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('**') && paragraph.includes('**')) {
        const parts = paragraph.split('**')
        return (
          <div key={idx} className="mb-4">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <h3 key={i} className="font-bold text-morandi-dark text-lg mt-6 mb-2">{part}</h3>
              ) : (
                part && <p key={i} className="text-morandi-dark-soft leading-relaxed">{part}</p>
              )
            )}
          </div>
        )
      }
      return (
        <p key={idx} className="text-morandi-dark-soft leading-relaxed mb-4">{paragraph}</p>
      )
    })
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Image */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[500px]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-morandi-dark/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="tag bg-white/20 text-white backdrop-blur-sm">{post.category}</span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <Calendar size={14} />
                {post.publishDate}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-morandi-green hover:text-morandi-green-dark font-medium text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> 回到租屋指南
        </Link>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-lg text-morandi-dark font-medium leading-relaxed mb-6 border-l-4 border-morandi-green pl-4 bg-morandi-cream/50 py-3 rounded-r-lg">
            {post.summary}
          </p>
          {renderContent(post.content)}
        </article>

        {/* Tags */}
        <div className="flex items-center gap-2 mt-8 pt-8 border-t border-morandi-border">
          <Tag size={16} className="text-morandi-tea" />
          <span className="tag">{post.category}</span>
        </div>
      </div>

      {/* Related Properties */}
      {relatedProperties.length > 0 && (
        <section className="bg-morandi-cream">
          <div className="section-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-morandi-green font-medium text-sm mb-1">🏠 推薦房源</p>
                <h2 className="text-2xl font-bold text-morandi-dark">適合此文章的房源</h2>
              </div>
              <Link
                to="/listings"
                className="hidden sm:flex items-center gap-1 text-morandi-green hover:text-morandi-green-dark font-medium text-sm transition-colors group"
              >
                查看全部 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} onClick={setSelectedProperty} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-container">
          <div className="mb-8">
            <p className="text-morandi-green font-medium text-sm mb-1">📝 延伸閱讀</p>
            <h2 className="text-2xl font-bold text-morandi-dark">相關文章推薦</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </div>
  )
}
