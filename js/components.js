/*
 * components.js — Shared Navbar & Footer
 * Injected into every page to avoid HTML duplication.
 */

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function renderNavbar() {
  const page = getCurrentPage();
  const links = [
    { href: 'index.html', label: '首頁', icon: 'bi-house-door' },
    { href: 'listings.html', label: '租屋資訊', icon: 'bi-building' },
    { href: 'about.html', label: '關於我們', icon: 'bi-people' },
    { href: 'blog.html', label: '租屋指南', icon: 'bi-journal-text' },
    { href: 'contact.html', label: '聯絡我們', icon: 'bi-telephone' },
  ];

  const navLinksHTML = links.map(l =>
    `<li class="nav-item">
       <a class="nav-link ${page === l.href ? 'active' : ''}" href="${l.href}">
         <i class="bi ${l.icon} d-lg-none me-2"></i>${l.label}
       </a>
     </li>`
  ).join('');

  return `
  <nav class="navbar navbar-expand-lg navbar-morandi fixed-top" id="mainNavbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <div class="brand-icon">M</div>
        <span>方結租屋<small class="text-muted d-none d-md-inline ms-1" style="font-size:.7rem;font-weight:400">有限公司</small></span>
      </a>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-label="Toggle navigation">
        <i class="bi bi-list" style="font-size:1.5rem;color:var(--m-dark)"></i>
      </button>

      <!-- Desktop -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav gap-1">${navLinksHTML}</ul>
      </div>
      <div class="d-none d-lg-flex align-items-center gap-3">
        <a href="#" class="social-link line" aria-label="Line@"><i class="bi bi-chat-dots-fill"></i></a>
        <a href="#" class="social-link ig" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="social-link fb" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
      </div>

      <!-- Mobile Offcanvas -->
      <div class="offcanvas offcanvas-end offcanvas-morandi d-lg-none" tabindex="-1" id="mobileMenu">
        <div class="offcanvas-header">
          <a class="navbar-brand" href="index.html">
            <div class="brand-icon">M</div>
            <span>方結租屋</span>
          </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">${navLinksHTML}</ul>
          <hr class="my-3" style="border-color:var(--m-border)">
          <p class="text-muted small mb-2">社群連結</p>
          <div class="d-flex gap-3">
            <a href="#" class="social-link line" aria-label="Line@"><i class="bi bi-chat-dots-fill"></i></a>
            <a href="#" class="social-link ig" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-link fb" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          </div>
        </div>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="footer-morandi">
    <div class="container">
      <div class="row g-4">
        <!-- Brand -->
        <div class="col-lg-3 col-md-6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="brand-icon">M</div>
            <span class="fw-bold fs-5 text-white">方結租屋</span>
          </div>
          <p class="small" style="color:var(--m-tea-light)">
            專為學生與小資族打造的溫馨租屋平台。<br>
            讓每一位租客都能找到安心、舒適的家。
          </p>
          <div class="mt-3">
            <a href="#" class="footer-social-btn" aria-label="Line@"><i class="bi bi-chat-dots-fill"></i></a>
            <a href="#" class="footer-social-btn" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="footer-social-btn" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          </div>
        </div>
        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6 col-6">
          <h6>快速連結</h6>
          <ul>
            <li><a href="index.html">首頁</a></li>
            <li><a href="listings.html">租屋資訊</a></li>
            <li><a href="about.html">關於我們</a></li>
            <li><a href="blog.html">租屋指南</a></li>
            <li><a href="contact.html">聯絡我們</a></li>
          </ul>
        </div>
        <!-- Contact -->
        <div class="col-lg-4 col-md-6">
          <h6>聯絡資訊</h6>
          <ul>
            <li><i class="bi bi-geo-alt me-2" style="color:var(--m-green)"></i>台北市大安區羅斯福路三段 100 號 2 樓</li>
            <li><i class="bi bi-telephone me-2" style="color:var(--m-green)"></i>(02) 2345-6789</li>
            <li><i class="bi bi-envelope me-2" style="color:var(--m-green)"></i>hello@markrental.tw</li>
            <li><i class="bi bi-clock me-2" style="color:var(--m-green)"></i>週一至週六 09:00-18:00</li>
          </ul>
        </div>
        <!-- Services -->
        <div class="col-lg-3 col-md-6 col-6">
          <h6>服務項目</h6>
          <ul>
            <li>🏠 學生套房出租</li>
            <li>📋 租屋諮詢服務</li>
            <li>🔑 專人帶看服務</li>
            <li>📝 租約代辦服務</li>
            <li>🛠️ 維修通報系統</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
        <span>© 2026 方結租屋有限公司 Mark Rental Co., Ltd. All rights reserved.</span>
        <span>Made with <i class="bi bi-heart-fill" style="color:var(--m-pink)"></i> in Taipei</span>
      </div>
    </div>
  </footer>`;
}

/* ===== Property Card HTML Generator ===== */
function renderPropertyCard(p) {
  const tagsHTML = p.tags.slice(0, 4).map(t => `<span class="tag-morandi">${t}</span>`).join('');
  return `
  <div class="col" data-aos="fade-up">
    <div class="card-morandi" onclick="openPropertyModal(${p.id})" id="property-card-${p.id}">
      <div class="card-img-wrapper">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'">
        <div class="card-price-badge">$${p.price.toLocaleString()}/月</div>
        <div class="card-type-badge">${p.type}</div>
      </div>
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <div class="card-location">
          <i class="bi bi-geo-alt me-1" style="color:var(--m-tea)"></i>${p.area}・${p.city}
          <span class="mx-1" style="color:var(--m-tea)">|</span>${p.size}坪
        </div>
        <div>${tagsHTML}</div>
      </div>
    </div>
  </div>`;
}

/* ===== Blog Card HTML Generator ===== */
function renderBlogCard(post) {
  return `
  <div class="col" data-aos="fade-up">
    <a href="blog-post.html?id=${post.id}" class="text-decoration-none">
      <div class="blog-card">
        <div style="overflow:hidden">
          <img src="${post.coverImage}" class="card-img-top" alt="${post.title}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="tag-morandi">${post.category}</span>
            <small class="text-muted"><i class="bi bi-calendar3 me-1"></i>${post.publishDate}</small>
          </div>
          <h5 class="fw-bold mb-2" style="color:var(--m-dark);font-size:.95rem;line-height:1.5">${post.title}</h5>
          <p class="text-muted small mb-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${post.summary}</p>
          <span class="read-more">閱讀更多 <i class="bi bi-arrow-right"></i></span>
        </div>
      </div>
    </a>
  </div>`;
}

/* ===== Property Modal ===== */
function openPropertyModal(id) {
  const p = PROPERTIES.find(x => x.id === id);
  if (!p) return;

  const equipHTML = p.equipment.map(e => `<div class="equip-item"><i class="bi bi-check-circle-fill"></i>${e}</div>`).join('');
  const tagsHTML = p.tags.map(t => `<span class="tag-morandi">${t}</span>`).join(' ');

  const modalBody = `
    <div class="modal-gallery">
      <div id="modalCarousel" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">
          ${p.images.map((img, i) => `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
              <img src="${img}" alt="${p.title} - ${i + 1}">
            </div>`).join('')}
        </div>
        ${p.images.length > 1 ? `
          <button class="carousel-control-prev" type="button" data-bs-target="#modalCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span></button>
          <button class="carousel-control-next" type="button" data-bs-target="#modalCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span></button>` : ''}
      </div>
    </div>
    <div class="modal-detail-section">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
        <div>
          <h4 class="fw-bold mb-1">${p.title}</h4>
          <p class="text-muted mb-0"><i class="bi bi-geo-alt me-1"></i>${p.address}</p>
        </div>
        <div class="bg-morandi-green-10 rounded-morandi px-4 py-2 text-center flex-shrink-0">
          <small class="text-muted">月租金</small>
          <div class="fs-3 fw-bold" style="color:var(--m-green-dark)">$${p.price.toLocaleString()}</div>
        </div>
      </div>

      <div class="row g-3 mb-4">
        <div class="col-4"><div class="detail-stat"><i class="bi bi-arrows-fullscreen d-block"></i><div class="stat-value">${p.size} 坪</div><div class="stat-label">坪數</div></div></div>
        <div class="col-4"><div class="detail-stat"><i class="bi bi-layers d-block"></i><div class="stat-value">${p.floor}</div><div class="stat-label">樓層</div></div></div>
        <div class="col-4"><div class="detail-stat"><i class="bi bi-calendar3 d-block"></i><div class="stat-value">${p.publishDate}</div><div class="stat-label">刊登日</div></div></div>
      </div>

      <div class="mb-3">${tagsHTML}</div>

      <h6 class="fw-bold mb-2">房源描述</h6>
      <p class="text-muted small mb-4">${p.description}</p>

      <h6 class="fw-bold mb-3">設備清單</h6>
      <div class="row g-2 mb-4">${p.equipment.map(e => `<div class="col-6 col-sm-4"><div class="equip-item"><i class="bi bi-check-circle-fill"></i>${e}</div></div>`).join('')}</div>

      <div class="bg-morandi-cream rounded-morandi p-4">
        <h6 class="fw-bold mb-3"><i class="bi bi-calendar-check me-2" style="color:var(--m-green)"></i>預約看房</h6>
        <form id="modalBookingForm" onsubmit="handleModalBooking(event)">
          <div class="row g-3">
            <div class="col-sm-6"><input type="text" class="form-control" placeholder="您的姓名" required style="border:2px solid var(--m-border);border-radius:var(--m-radius-sm)"></div>
            <div class="col-sm-6"><input type="tel" class="form-control" placeholder="聯絡電話" required style="border:2px solid var(--m-border);border-radius:var(--m-radius-sm)"></div>
            <div class="col-sm-6"><input type="date" class="form-control" required style="border:2px solid var(--m-border);border-radius:var(--m-radius-sm)"></div>
            <div class="col-sm-6"><input type="text" class="form-control" placeholder="備註（選填）" style="border:2px solid var(--m-border);border-radius:var(--m-radius-sm)"></div>
            <div class="col-12"><button type="submit" class="btn btn-morandi w-100"><i class="bi bi-send me-2"></i>送出預約</button></div>
          </div>
        </form>
      </div>
    </div>`;

  $('#propertyModalLabel').text(p.title);
  $('#propertyModal .modal-body').html(modalBody);
  const modal = new bootstrap.Modal(document.getElementById('propertyModal'));
  modal.show();
}

function handleModalBooking(e) {
  e.preventDefault();
  const form = e.target;
  form.innerHTML = `
    <div class="text-center py-4 success-check">
      <i class="bi bi-check-circle-fill" style="font-size:3rem;color:var(--m-green)"></i>
      <p class="fw-bold mt-2 mb-1">預約已送出！</p>
      <p class="text-muted small">我們會盡快與您聯繫確認看房時間</p>
    </div>`;
}

/* ===== Navbar scroll effect ===== */
function initNavbarScroll() {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 30) {
      $('#mainNavbar').addClass('scrolled');
    } else {
      $('#mainNavbar').removeClass('scrolled');
    }
  });
}

/* ===== Init ===== */
$(document).ready(function() {
  $('#navbar-placeholder').html(renderNavbar());
  $('#footer-placeholder').html(renderFooter());
  initNavbarScroll();

  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, easing: 'ease-out', once: true, offset: 80 });
  }
});
