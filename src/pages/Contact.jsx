import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '預約看房',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', type: '預約看房', date: '', message: '' })
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="bg-morandi-cream">
        <div className="section-container !py-12 text-center">
          <div className="w-14 h-14 bg-morandi-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Phone size={28} className="text-morandi-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-morandi-dark mb-3">聯絡我們</h1>
          <p className="text-morandi-dark-soft max-w-lg mx-auto">
            有任何租屋相關問題，或想預約看房，歡迎透過以下方式與我們聯繫。
          </p>
        </div>
      </section>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-morandi-border">
              <h2 className="text-xl font-bold text-morandi-dark mb-6">📋 線上預約看房</h2>

              {submitted ? (
                <div className="text-center py-16 animate-fade-in">
                  <CheckCircle2 size={64} className="mx-auto mb-4 text-morandi-green" />
                  <h3 className="text-2xl font-bold text-morandi-dark mb-2">預約已送出！</h3>
                  <p className="text-morandi-dark-soft mb-6">
                    我們將於 1 個工作日內與您聯繫確認看房時間。<br />
                    若有緊急需求，請直接撥打客服專線。
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    再送一筆預約
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-morandi-dark mb-1.5">姓名 *</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="請輸入您的姓名"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-morandi-dark mb-1.5">聯絡電話 *</label>
                      <input
                        type="tel"
                        className="input-field"
                        placeholder="0912-345-678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        id="contact-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-morandi-dark mb-1.5">電子信箱</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      id="contact-email"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-morandi-dark mb-1.5">洽詢類型</label>
                      <select
                        className="select-field"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        id="contact-type"
                      >
                        <option>預約看房</option>
                        <option>租屋諮詢</option>
                        <option>維修通報</option>
                        <option>合約相關</option>
                        <option>其他問題</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-morandi-dark mb-1.5">希望看房日期</label>
                      <input
                        type="date"
                        className="input-field"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        id="contact-date"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-morandi-dark mb-1.5">留言內容</label>
                    <textarea
                      className="input-field min-h-[120px] resize-y"
                      placeholder="請描述您的需求，例如：希望的地區、預算範圍、特殊需求等..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      id="contact-message"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 text-base">
                    <Send size={18} />
                    送出預約
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-morandi-border">
              <h3 className="font-semibold text-morandi-dark mb-4">📞 聯絡方式</h3>
              <div className="space-y-4">
                <a href="tel:0223456789" className="flex items-center gap-3 p-3 rounded-xl bg-morandi-cream hover:bg-morandi-green/10 transition-colors group">
                  <div className="w-10 h-10 bg-morandi-green/10 rounded-xl flex items-center justify-center group-hover:bg-morandi-green group-hover:text-white transition-colors">
                    <Phone size={18} className="text-morandi-green group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-morandi-dark-soft">客服專線</p>
                    <p className="font-semibold text-morandi-dark">(02) 2345-6789</p>
                  </div>
                </a>

                <a href="mailto:hello@markrental.tw" className="flex items-center gap-3 p-3 rounded-xl bg-morandi-cream hover:bg-morandi-green/10 transition-colors group">
                  <div className="w-10 h-10 bg-morandi-green/10 rounded-xl flex items-center justify-center group-hover:bg-morandi-green group-hover:text-white transition-colors">
                    <Mail size={18} className="text-morandi-green group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-morandi-dark-soft">電子信箱</p>
                    <p className="font-semibold text-morandi-dark">hello@markrental.tw</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-[#06C755]/5 hover:bg-[#06C755]/10 transition-colors group">
                  <div className="w-10 h-10 bg-[#06C755]/10 rounded-xl flex items-center justify-center group-hover:bg-[#06C755] group-hover:text-white transition-colors">
                    <MessageCircle size={18} className="text-[#06C755] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-morandi-dark-soft">Line@ 快速諮詢</p>
                    <p className="font-semibold text-morandi-dark">@markrental</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Address & Map */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-morandi-border">
              <h3 className="font-semibold text-morandi-dark mb-4">📍 公司位置</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={18} className="text-morandi-green mt-0.5 shrink-0" />
                <div>
                  <p className="text-morandi-dark text-sm font-medium">台北市大安區羅斯福路三段 100 號 2 樓</p>
                  <p className="text-morandi-dark-soft text-xs mt-1">（捷運公館站 2 號出口步行 3 分鐘）</p>
                </div>
              </div>
              {/* Simulated Google Map */}
              <div className="rounded-xl overflow-hidden border border-morandi-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.654!2d121.5296!3d25.0192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9892b2d7f4f%3A0x4d0e7c8f9a0f6b8d!2z5YWs6aSo56uZ!5e0!3m2!1szh-TW!2stw!4v1690000000000!5m2!1szh-TW!2stw"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="馬克租屋位置"
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-morandi-border">
              <h3 className="font-semibold text-morandi-dark mb-4 flex items-center gap-2">
                <Clock size={18} className="text-morandi-green" />
                營業時間
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: '週一至週五', time: '09:00 - 18:00', active: true },
                  { day: '週六', time: '10:00 - 17:00', active: true },
                  { day: '週日', time: '公休', active: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-morandi-border last:border-0">
                    <span className="text-morandi-dark font-medium">{item.day}</span>
                    <span className={item.active ? 'text-morandi-green font-medium' : 'text-morandi-tea'}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
