import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, TrendingUp } from 'lucide-react'
import HeroCarousel from '../components/HeroCarousel'
import PropertyCard from '../components/PropertyCard'
import PropertyModal from '../components/PropertyModal'
import BlogCard from '../components/BlogCard'
import TestimonialSection from '../components/TestimonialSection'
import FilterBar, { priceRanges } from '../components/FilterBar'
import properties from '../data/properties.json'
import posts from '../data/posts.json'

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [filters, setFilters] = useState({ area: '全部區域', priceRange: 0, tags: [], search: '' })

  const featuredProperties = properties.slice(0, 4)
  const latestPosts = posts.slice(0, 2)

  // Quick search results
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (filters.area !== '全部區域' && p.area !== filters.area) return false
      const range = priceRanges[filters.priceRange]
      if (p.price < range.min || p.price > range.max) return false
      if (filters.search && !p.title.includes(filters.search) && !p.area.includes(filters.search)) return false
      if (filters.tags.length > 0 && !filters.tags.some((tag) => p.tags.includes(tag))) return false
      return true
    })
  }, [filters])

  const hasActiveFilters = filters.area !== '全部區域' || filters.priceRange !== 0 || filters.search || filters.tags.length > 0

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Quick Search */}
      <section className="relative -mt-12 z-10 px-4" id="search">
        <div className="max-w-5xl mx-auto">
          <FilterBar filters={filters} onFilterChange={setFilters} compact />
        </div>
      </section>

      {/* Search Results (if filtering) */}
      {hasActiveFilters && (
        <section className="section-container !pt-10 !pb-6">
          <div className="flex items-center gap-2 mb-6">
            <Search size={18} className="text-morandi-green" />
            <h2 className="text-xl font-bold text-morandi-dark">
              搜尋結果 <span className="text-morandi-dark-soft font-normal text-base">({filteredProperties.length} 間)</span>
            </h2>
          </div>
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((p) => (
                <PropertyCard key={p.id} property={p} onClick={setSelectedProperty} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-morandi-cream rounded-2xl">
              <p className="text-morandi-dark-soft text-lg">😢 沒有找到符合條件的房源</p>
              <p className="text-morandi-tea text-sm mt-2">試試調整篩選條件吧！</p>
            </div>
          )}
        </section>
      )}

      {/* Featured Properties */}
      <section className="section-container" id="featured">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-morandi-green font-medium text-sm mb-1 flex items-center gap-1">
              <TrendingUp size={14} /> 精選推薦
            </p>
            <h2 className="text-3xl font-bold text-morandi-dark">熱門房源</h2>
          </div>
          <Link
            to="/listings"
            className="hidden sm:flex items-center gap-1 text-morandi-green hover:text-morandi-green-dark font-medium text-sm transition-colors group"
          >
            查看全部 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property, idx) => (
            <div key={property.id} className={`animate-fade-in-up delay-${idx + 1}`}>
              <PropertyCard property={property} onClick={setSelectedProperty} />
            </div>
          ))}
        </div>

        <div className="sm:hidden text-center mt-6">
          <Link to="/listings" className="btn-secondary">
            查看全部房源 <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials & Features */}
      <TestimonialSection />

      {/* Latest Blog Posts */}
      <section className="section-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-morandi-green font-medium text-sm mb-1">📝 最新文章</p>
            <h2 className="text-3xl font-bold text-morandi-dark">租屋指南</h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:flex items-center gap-1 text-morandi-green hover:text-morandi-green-dark font-medium text-sm transition-colors group"
          >
            查看全部 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post, idx) => (
            <div key={post.id} className={`animate-fade-in-up delay-${idx + 1}`}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-morandi-green">
        <div className="section-container text-center !py-16">
          <h2 className="text-3xl font-bold text-white mb-4">準備好找到你的新家了嗎？</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            馬克租屋提供最專業的租屋服務，從看房、簽約到入住，全程陪你走過每一步。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/listings" className="btn-primary bg-white text-morandi-green hover:bg-morandi-cream">
              🔍 開始找房
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-morandi-green">
              📞 預約諮詢
            </Link>
          </div>
        </div>
      </section>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </div>
  )
}
