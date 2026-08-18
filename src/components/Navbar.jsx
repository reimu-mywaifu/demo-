import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Building2, Users, BookOpen, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react'

const navLinks = [
  { to: '/', label: '首頁', icon: Home },
  { to: '/listings', label: '租屋資訊', icon: Building2 },
  { to: '/about', label: '關於我們', icon: Users },
  { to: '/blog', label: '租屋指南', icon: BookOpen },
  { to: '/contact', label: '聯絡我們', icon: Phone },
]

const socialLinks = [
  { href: '#', icon: MessageCircle, label: 'Line@', color: 'hover:text-green-500' },
  { href: '#', icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500' },
  { href: '#', icon: Facebook, label: 'Facebook', color: 'hover:text-blue-500' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-morandi-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-10 h-10 bg-morandi-green rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-morandi-dark">馬克租屋</span>
              <span className="text-xs text-morandi-dark-soft ml-1 hidden md:inline">有限公司</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  id={`nav-${link.to.replace('/', '') || 'home'}`}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-morandi-green/10 text-morandi-green-dark'
                      : 'text-morandi-dark-soft hover:text-morandi-dark hover:bg-morandi-cream'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`text-morandi-dark-soft transition-colors ${social.color}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-morandi-dark hover:bg-morandi-cream transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 animate-fade-in">
          <div className="absolute inset-0 bg-morandi-dark/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white m-4 rounded-2xl shadow-xl animate-slide-down overflow-hidden">
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                const Icon = link.icon
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    id={`mobile-nav-${link.to.replace('/', '') || 'home'}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-morandi-green/10 text-morandi-green-dark'
                        : 'text-morandi-dark-soft hover:bg-morandi-cream'
                    }`}
                  >
                    <Icon size={20} />
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <div className="border-t border-morandi-border px-4 py-4">
              <p className="text-xs text-morandi-tea mb-3">社群連結</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`text-morandi-dark-soft transition-colors ${social.color} p-2 rounded-lg hover:bg-morandi-cream`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
