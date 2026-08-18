import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80',
    title: '尋找專屬於你的溫馨小窩',
    subtitle: '馬克租屋陪你安心入住',
  },
  {
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80',
    title: '學生套房・小資首選',
    subtitle: '嚴選優質房源，讓租屋不再是煩惱',
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80',
    title: '專業團隊・安心保障',
    subtitle: '從看房到入住，全程專人服務',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((idx) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(idx)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden" id="hero-carousel">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-morandi-dark/70 via-morandi-dark/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-3xl">
          <h1
            key={`title-${current}`}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            {slides[current].title}
          </h1>
          <p
            key={`subtitle-${current}`}
            className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up delay-1"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
          >
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-2">
            <a href="#featured" className="btn-primary text-base px-8 py-3.5">
              🏠 瀏覽房源
            </a>
            <a href="#search" className="btn-secondary border-white text-white hover:bg-white hover:text-morandi-dark text-base px-8 py-3.5">
              🔍 快速搜尋
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
        aria-label="上一張"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
        aria-label="下一張"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`carousel-dot ${idx === current ? 'active' : ''}`}
            aria-label={`切換到第 ${idx + 1} 張`}
          />
        ))}
      </div>
    </section>
  )
}
