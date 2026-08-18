import { Link } from 'react-router-dom'
import { Building2, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-morandi-dark text-morandi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-morandi-green rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl text-white">馬克租屋</span>
            </div>
            <p className="text-morandi-tea-light text-sm leading-relaxed">
              專為學生與小資族打造的溫馨租屋平台。<br />
              讓每一位租客都能找到安心、舒適的家。
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-morandi-green transition-colors" aria-label="Line@">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-morandi-green transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-morandi-green transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">快速連結</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: '首頁' },
                { to: '/listings', label: '租屋資訊' },
                { to: '/about', label: '關於我們' },
                { to: '/blog', label: '租屋指南' },
                { to: '/contact', label: '聯絡我們' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-morandi-tea-light hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">聯絡資訊</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-morandi-tea-light">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                台北市大安區羅斯福路三段 100 號 2 樓
              </li>
              <li className="flex items-center gap-3 text-sm text-morandi-tea-light">
                <Phone size={16} className="shrink-0" />
                (02) 2345-6789
              </li>
              <li className="flex items-center gap-3 text-sm text-morandi-tea-light">
                <Mail size={16} className="shrink-0" />
                hello@markrental.tw
              </li>
              <li className="flex items-center gap-3 text-sm text-morandi-tea-light">
                <Building2 size={16} className="shrink-0" />
                營業時間：週一至週六 09:00-18:00
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">服務項目</h3>
            <ul className="space-y-3 text-sm text-morandi-tea-light">
              <li>🏠 學生套房出租</li>
              <li>📋 租屋諮詢服務</li>
              <li>🔑 專人帶看服務</li>
              <li>📝 租約代辦服務</li>
              <li>🛠️ 維修通報系統</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-morandi-tea">
            © 2026 馬克租屋有限公司 Mark Rental Co., Ltd. All rights reserved.
          </p>
          <p className="text-xs text-morandi-tea flex items-center gap-1">
            Made with <Heart size={12} className="text-morandi-pink" /> in Taipei
          </p>
        </div>
      </div>
    </footer>
  )
}
