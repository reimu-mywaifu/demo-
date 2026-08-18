import { Users, Heart, Shield, Award, Target, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: '溫暖貼心',
    description: '我們深知離家在外的不安，用心對待每一位租客，讓租屋也能感受到家的溫暖。',
  },
  {
    icon: Shield,
    title: '安全保障',
    description: '所有房源皆經過嚴格審核，合法建物、消防安全、設備完善，讓你住得安心無虞。',
  },
  {
    icon: Award,
    title: '品質堅持',
    description: '不定期巡檢房源品質，與房東保持良好溝通，確保每間房源都維持在最佳狀態。',
  },
  {
    icon: Target,
    title: '精準媒合',
    description: '根據你的預算、地點偏好與生活需求，為你推薦最適合的房源，省時省力。',
  },
]

const team = [
  {
    name: '馬克',
    role: '創辦人 / 執行長',
    avatar: '👨‍💼',
    description: '曾是苦哈哈的租屋族，深刻體會找房的痛苦，決心創辦馬克租屋，為大家帶來更好的租屋體驗。',
  },
  {
    name: '小美',
    role: '客戶關係經理',
    avatar: '👩‍💻',
    description: '擁有 5 年不動產經驗，最擅長傾聽客戶需求，幫大家找到CP值最高的理想房源。',
  },
  {
    name: '阿傑',
    role: '物業管理師',
    avatar: '👨‍🔧',
    description: '專業的物業管理背景，負責確保每間房源的設備與環境都維持在最佳狀態。',
  },
  {
    name: '小倩',
    role: '內容企劃',
    avatar: '👩‍🎨',
    description: '負責撰寫租屋指南與生活攻略，用溫暖的文字幫助每位租客順利展開新生活。',
  },
]

const milestones = [
  { year: '2020', event: '馬克租屋有限公司成立', icon: '🎉' },
  { year: '2021', event: '管理房源突破 100 間', icon: '🏠' },
  { year: '2022', event: '榮獲「優質租屋品牌」認證', icon: '🏆' },
  { year: '2023', event: '服務租客累計超過 2,000 人', icon: '👥' },
  { year: '2024', event: '拓展新北市全區服務範圍', icon: '🗺️' },
  { year: '2026', event: '全新官網改版上線', icon: '✨' },
]

export default function About() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&q=80"
          alt="馬克租屋辦公室"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-morandi-dark/70 via-morandi-dark/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-white/80 text-sm mb-2">🏠 關於我們</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              讓每一個人<br />都能找到溫馨的家
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              馬克租屋有限公司，專注為學生與小資族提供安心、舒適的租屋體驗。
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles size={32} className="mx-auto mb-4 text-morandi-green" />
          <h2 className="text-3xl font-bold text-morandi-dark mb-6">品牌故事</h2>
          <div className="text-morandi-dark-soft leading-relaxed space-y-4 text-left md:text-center">
            <p>
              2020 年，創辦人馬克還是一位在台北打拼的小資上班族。他深深體會到「找一間好房子」有多困難——
              資訊不透明、照片與實際不符、房東態度不佳⋯⋯這些經歷讓他決心創立「馬克租屋有限公司」。
            </p>
            <p>
              我們相信，每個人都值得擁有一個安心、舒適的居住空間。不論你是第一次離家的大學新鮮人，
              還是在都市打拼的年輕上班族，馬克租屋都會用最真誠的態度，幫你找到那個回到家就能放鬆微笑的地方。
            </p>
            <p className="font-medium text-morandi-dark">
              「我們不只是出租房間，更是在幫你打造一個新的家。」—— 馬克
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-morandi-cream">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-morandi-green font-medium text-sm mb-2">💡 服務理念</p>
            <h2 className="text-3xl font-bold text-morandi-dark">我們的核心價值</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 text-center card-hover animate-fade-in-up delay-${idx + 1}`}
                style={{ boxShadow: '0 2px 12px rgba(74, 74, 74, 0.06)' }}
              >
                <div className="w-14 h-14 bg-morandi-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-morandi-green" />
                </div>
                <h3 className="font-bold text-morandi-dark text-lg mb-2">{v.title}</h3>
                <p className="text-morandi-dark-soft text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container">
        <div className="text-center mb-10">
          <p className="text-morandi-green font-medium text-sm mb-2">📅 發展歷程</p>
          <h2 className="text-3xl font-bold text-morandi-dark">公司大事紀</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          {milestones.map((m, idx) => (
            <div key={idx} className={`flex gap-4 mb-8 last:mb-0 animate-fade-in-up delay-${Math.min(idx + 1, 6)}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-morandi-green/10 rounded-full flex items-center justify-center text-xl shrink-0">
                  {m.icon}
                </div>
                {idx < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-morandi-border mt-2" />
                )}
              </div>
              <div className="pt-2.5">
                <p className="text-morandi-green font-bold text-sm">{m.year}</p>
                <p className="text-morandi-dark font-medium">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-morandi-cream">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-morandi-green font-medium text-sm mb-2">
              <Users size={14} className="inline mb-0.5" /> 認識團隊
            </p>
            <h2 className="text-3xl font-bold text-morandi-dark">專業又親切的團隊</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 text-center card-hover animate-fade-in-up delay-${idx + 1}`}
                style={{ boxShadow: '0 2px 12px rgba(74, 74, 74, 0.06)' }}
              >
                <div className="w-20 h-20 bg-morandi-cream rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-morandi-dark text-lg">{member.name}</h3>
                <p className="text-morandi-green text-sm font-medium mb-3">{member.role}</p>
                <p className="text-morandi-dark-soft text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-container text-center">
        <div className="max-w-2xl mx-auto bg-morandi-green/5 rounded-3xl p-10 border border-morandi-green/20">
          <Shield size={40} className="mx-auto mb-4 text-morandi-green" />
          <h2 className="text-2xl font-bold text-morandi-dark mb-4">誠信保證</h2>
          <p className="text-morandi-dark-soft leading-relaxed">
            馬克租屋有限公司為合法登記之租賃住宅服務業者，所有房源資訊皆真實刊登、價格透明公開。
            我們承諾不收取任何不合理費用，合約內容完全依照內政部公告之定型化契約範本。
            您的權益，是我們最重視的事。
          </p>
        </div>
      </section>
    </div>
  )
}
