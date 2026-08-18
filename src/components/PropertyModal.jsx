import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2, Layers, Calendar, CheckCircle2, Send } from 'lucide-react'

export default function PropertyModal({ property, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!property) return null

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in" id="property-modal">
      <div className="absolute inset-0 bg-morandi-dark/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white shadow-md transition-all hover:scale-110"
          aria-label="關閉"
          id="modal-close"
        >
          <X size={20} />
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-[16/9] bg-morandi-cream">
          <img
            src={property.images[currentImage]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white shadow-md transition-all"
                aria-label="上一張"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white shadow-md transition-all"
                aria-label="下一張"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`carousel-dot ${idx === currentImage ? 'active' : ''}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-morandi-dark mb-2">{property.title}</h2>
              <div className="flex items-center gap-2 text-morandi-dark-soft">
                <MapPin size={16} />
                <span className="text-sm">{property.address}</span>
              </div>
            </div>
            <div className="bg-morandi-green/10 px-6 py-3 rounded-2xl text-center shrink-0">
              <p className="text-sm text-morandi-dark-soft">月租金</p>
              <p className="text-3xl font-bold text-morandi-green-dark">${property.price.toLocaleString()}</p>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-3 gap-4 mb-6 bg-morandi-cream rounded-2xl p-4">
            <div className="text-center">
              <Maximize2 size={20} className="mx-auto mb-1 text-morandi-green" />
              <p className="text-xs text-morandi-dark-soft">坪數</p>
              <p className="font-semibold text-morandi-dark">{property.size} 坪</p>
            </div>
            <div className="text-center">
              <Layers size={20} className="mx-auto mb-1 text-morandi-green" />
              <p className="text-xs text-morandi-dark-soft">樓層</p>
              <p className="font-semibold text-morandi-dark">{property.floor}</p>
            </div>
            <div className="text-center">
              <Calendar size={20} className="mx-auto mb-1 text-morandi-green" />
              <p className="text-xs text-morandi-dark-soft">刊登日期</p>
              <p className="font-semibold text-morandi-dark">{property.publishDate}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {property.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-morandi-dark mb-2">房源描述</h3>
            <p className="text-morandi-dark-soft text-sm leading-relaxed">{property.description}</p>
          </div>

          {/* Equipment */}
          <div className="mb-8">
            <h3 className="font-semibold text-morandi-dark mb-3">設備清單</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {property.equipment.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-morandi-dark-soft">
                  <CheckCircle2 size={16} className="text-morandi-green shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-morandi-cream rounded-2xl p-6">
            <h3 className="font-semibold text-morandi-dark mb-4 flex items-center gap-2">
              <Calendar size={18} className="text-morandi-green" />
              預約看房
            </h3>
            {submitted ? (
              <div className="text-center py-8 animate-fade-in">
                <CheckCircle2 size={48} className="mx-auto mb-3 text-morandi-green" />
                <p className="font-semibold text-morandi-dark">預約已送出！</p>
                <p className="text-sm text-morandi-dark-soft mt-1">我們會盡快與您聯繫確認看房時間</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="聯絡電話"
                  className="input-field"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <input
                  type="date"
                  placeholder="希望看房日期"
                  className="input-field"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="備註（選填）"
                  className="input-field"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className="btn-primary sm:col-span-2">
                  <Send size={16} />
                  送出預約
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
