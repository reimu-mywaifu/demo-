import { useState } from 'react'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

export default function PropertyCard({ property, onClick }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [imgError, setImgError] = useState({})

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const fallbackImage = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden card-hover cursor-pointer group"
      style={{ boxShadow: '0 2px 12px rgba(74, 74, 74, 0.06)' }}
      onClick={() => onClick?.(property)}
      id={`property-card-${property.id}`}
    >
      {/* Image Carousel */}
      <div className="carousel-container aspect-[16/11] relative">
        <div
          className="carousel-track h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={imgError[idx] ? fallbackImage : img}
              alt={`${property.title} - 照片 ${idx + 1}`}
              className="carousel-slide h-full object-cover"
              loading="lazy"
              onError={() => setImgError(prev => ({ ...prev, [idx]: true }))}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
              aria-label="上一張"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
              aria-label="下一張"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {property.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(idx) }}
                  className={`carousel-dot ${idx === currentImage ? 'active' : ''}`}
                  aria-label={`切換到第 ${idx + 1} 張`}
                />
              ))}
            </div>
          </>
        )}

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-morandi-green/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-sm font-bold shadow-lg">
          ${property.price.toLocaleString()}/月
        </div>

        {/* Type Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-morandi-dark px-3 py-1.5 rounded-xl text-xs font-medium shadow-sm">
          {property.type}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="font-bold text-morandi-dark text-base mb-2 line-clamp-1 group-hover:text-morandi-green-dark transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 text-morandi-dark-soft text-sm mb-3">
          <MapPin size={14} className="text-morandi-tea shrink-0" />
          <span className="line-clamp-1">{property.area}・{property.city}</span>
          <span className="text-morandi-tea mx-1">|</span>
          <span>{property.size}坪</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {property.tags.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="tag text-[11px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
