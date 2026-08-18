import { Star, Shield, Clock, HeartHandshake, Quote } from 'lucide-react'

const testimonials = [
  {
    name: '小芳',
    role: '台大研究生',
    avatar: '👩‍🎓',
    content: '馬克租屋的房東人真的超好！入住前就把房間整理得很乾淨，有問題隨時都能聯繫到，住了兩年感覺像家一樣溫馨。',
    rating: 5,
  },
  {
    name: '阿凱',
    role: '新鮮人上班族',
    avatar: '👨‍💼',
    content: '第一次在台北租房就找到馬克租屋，租金透明沒有隱藏費用，而且看房流程很專業，完全不用擔心被坑。大推！',
    rating: 5,
  },
  {
    name: '小雅',
    role: '師大大四學生',
    avatar: '👩‍🎨',
    content: '之前租過幾間品質都很差，後來朋友推薦馬克租屋，套房的採光超好，還有獨立洗衣機，真的回不去了～',
    rating: 5,
  },
]

const features = [
  {
    icon: Shield,
    title: '安心保障',
    description: '嚴格篩選每間房源，合法安全有保障',
  },
  {
    icon: Clock,
    title: '即時服務',
    description: '24小時線上客服，問題快速回應處理',
  },
  {
    icon: HeartHandshake,
    title: '貼心管理',
    description: '專業物業管理團隊，讓你住得安心舒適',
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-morandi-cream" id="testimonials">
      <div className="section-container">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 text-center card-hover animate-fade-in-up delay-${idx + 1}`}
              style={{ boxShadow: '0 2px 12px rgba(74, 74, 74, 0.06)' }}
            >
              <div className="w-14 h-14 bg-morandi-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon size={28} className="text-morandi-green" />
              </div>
              <h3 className="font-bold text-morandi-dark text-lg mb-2">{feature.title}</h3>
              <p className="text-morandi-dark-soft text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-10">
          <p className="text-morandi-green font-medium text-sm mb-2">💬 租客好評</p>
          <h2 className="text-3xl font-bold text-morandi-dark">聽聽他們怎麼說</h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 relative animate-fade-in-up delay-${idx + 1}`}
              style={{ boxShadow: '0 2px 12px rgba(74, 74, 74, 0.06)' }}
            >
              <Quote size={32} className="text-morandi-cream absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-morandi-cream rounded-full flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-morandi-dark">{t.name}</p>
                  <p className="text-xs text-morandi-dark-soft">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-morandi-dark-soft text-sm leading-relaxed">{t.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
