import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import posts from '../data/posts.json'

const categories = ['全部', ...new Set(posts.map((p) => p.category))]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredPosts = activeCategory === '全部'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-20 lg:pt-24">
      {/* Page Header */}
      <section className="bg-morandi-cream">
        <div className="section-container !py-12 text-center">
          <div className="w-14 h-14 bg-morandi-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen size={28} className="text-morandi-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-morandi-dark mb-3">租屋指南</h1>
          <p className="text-morandi-dark-soft max-w-lg mx-auto">
            實用的租屋知識與經驗分享，幫助你成為精明的租屋達人。
          </p>
        </div>
      </section>

      <div className="section-container !pt-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-morandi-green text-white shadow-md'
                  : 'bg-white text-morandi-dark-soft hover:bg-morandi-cream border border-morandi-border'
              }`}
              id={`blog-cat-${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, idx) => (
            <div key={post.id} className={`animate-fade-in-up delay-${Math.min(idx + 1, 6)}`}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
