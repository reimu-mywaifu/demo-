import { Search, SlidersHorizontal } from 'lucide-react'

const areas = ['全部區域', '大安區', '板橋區', '永和區', '淡水區', '信義區']
const priceRanges = [
  { label: '全部價格', min: 0, max: Infinity },
  { label: '$5,000 以下', min: 0, max: 5000 },
  { label: '$5,000 - $8,000', min: 5000, max: 8000 },
  { label: '$8,000 - $12,000', min: 8000, max: 12000 },
  { label: '$12,000 以上', min: 12000, max: Infinity },
]
const featureTags = ['可養寵物 🐾', '有陽台 🌿', '近捷運 🚇', '獨立洗脫烘 🧺', '含水網路 📶', '全新裝潢 ✨']

export default function FilterBar({ filters, onFilterChange, compact = false }) {
  const { area = '全部區域', priceRange = 0, tags = [], search = '' } = filters

  const updateFilter = (key, value) => {
    onFilterChange({ ...filters, [key]: value })
  }

  const toggleTag = (tag) => {
    const newTags = tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]
    updateFilter('tags', newTags)
  }

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-morandi-border ${compact ? 'p-4' : 'p-6'}`} id="filter-bar">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal size={18} className="text-morandi-green" />
        <h3 className="font-semibold text-morandi-dark text-sm">篩選條件</h3>
      </div>

      <div className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-morandi-tea" />
          <input
            type="text"
            placeholder="搜尋關鍵字..."
            className="input-field pl-10"
            value={search}
            onChange={(e) => updateFilter('search', e.target.value)}
            id="filter-search"
          />
        </div>

        {/* Area Select */}
        <select
          className="select-field"
          value={area}
          onChange={(e) => updateFilter('area', e.target.value)}
          id="filter-area"
        >
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        {/* Price Range */}
        <select
          className="select-field"
          value={priceRange}
          onChange={(e) => updateFilter('priceRange', parseInt(e.target.value))}
          id="filter-price"
        >
          {priceRanges.map((range, idx) => (
            <option key={idx} value={idx}>{range.label}</option>
          ))}
        </select>
      </div>

      {/* Feature Tags */}
      {!compact && (
        <div className="mt-4 pt-4 border-t border-morandi-border">
          <p className="text-xs text-morandi-dark-soft mb-2">特色篩選：</p>
          <div className="flex flex-wrap gap-2">
            {featureTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`tag cursor-pointer transition-all ${
                  tags.includes(tag)
                    ? 'bg-morandi-green text-white'
                    : 'hover:bg-morandi-green-light'
                }`}
                id={`filter-tag-${tag.slice(0, 4)}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export { priceRanges }
