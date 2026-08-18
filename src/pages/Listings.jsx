import { useState, useMemo } from 'react'
import { Building2 } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import PropertyModal from '../components/PropertyModal'
import FilterBar, { priceRanges } from '../components/FilterBar'
import properties from '../data/properties.json'

export default function Listings() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [filters, setFilters] = useState({
    area: '全部區域',
    priceRange: 0,
    tags: [],
    search: '',
  })

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (filters.area !== '全部區域' && p.area !== filters.area) return false
      const range = priceRanges[filters.priceRange]
      if (p.price < range.min || p.price > range.max) return false
      if (filters.search) {
        const q = filters.search.toLowerCase()
        if (!p.title.toLowerCase().includes(q) && !p.area.toLowerCase().includes(q) && !p.address.toLowerCase().includes(q)) {
          return false
        }
      }
      if (filters.tags.length > 0 && !filters.tags.some((tag) => p.tags.includes(tag))) return false
      return true
    })
  }, [filters])

  return (
    <div className="pt-20 lg:pt-24">
      {/* Page Header */}
      <section className="bg-morandi-cream">
        <div className="section-container !py-12 text-center">
          <div className="w-14 h-14 bg-morandi-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Building2 size={28} className="text-morandi-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-morandi-dark mb-3">租屋資訊</h1>
          <p className="text-morandi-dark-soft max-w-lg mx-auto">
            精選台北、新北優質套房，每間都經過嚴格把關，讓你租得安心、住得舒心。
          </p>
        </div>
      </section>

      {/* Filter + Results */}
      <div className="section-container !pt-8">
        <FilterBar filters={filters} onFilterChange={setFilters} />

        {/* Results Header */}
        <div className="flex items-center justify-between my-6">
          <p className="text-morandi-dark-soft text-sm">
            共找到 <span className="font-semibold text-morandi-dark">{filteredProperties.length}</span> 間房源
          </p>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, idx) => (
              <div key={property.id} className={`animate-fade-in-up delay-${Math.min(idx + 1, 6)}`}>
                <PropertyCard property={property} onClick={setSelectedProperty} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-morandi-cream rounded-2xl">
            <p className="text-5xl mb-4">🏠</p>
            <p className="text-morandi-dark text-lg font-semibold mb-2">沒有找到符合條件的房源</p>
            <p className="text-morandi-dark-soft text-sm">試試調整篩選條件，或瀏覽全部房源</p>
            <button
              onClick={() => setFilters({ area: '全部區域', priceRange: 0, tags: [], search: '' })}
              className="btn-primary mt-6"
            >
              清除篩選條件
            </button>
          </div>
        )}
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </div>
  )
}
