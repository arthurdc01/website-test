// ===== Product Data =====
const products = [
  {
    id: 1,
    name: "Fiido D11 Foldable",
    category: "foldable",
    price: 680,
    originalPrice: 1499,
    condition: "Excellent — 8/10",
    badge: "hot",
    specs: ["36V 11.6Ah", "30km range", "17.5kg", "Foldable"],
    emoji: "🚲"
  },
  {
    id: 2,
    name: "Lankeleisi MG740 Plus",
    category: "mountain",
    price: 1450,
    originalPrice: 2899,
    condition: "Very Good — 7.5/10",
    badge: "deal",
    specs: ["48V 20Ah", "60km range", "Dual Motor", "Fat Tyre"],
    emoji: "🏔️"
  },
  {
    id: 3,
    name: "DYU D3F Mini",
    category: "foldable",
    price: 380,
    originalPrice: 799,
    condition: "Good — 7/10",
    badge: null,
    specs: ["36V 10Ah", "25km range", "14.5kg", "Compact"],
    emoji: "🚲"
  },
  {
    id: 4,
    name: "Himo Z20 City Cruiser",
    category: "city",
    price: 590,
    originalPrice: 1199,
    condition: "Excellent — 8.5/10",
    badge: "new",
    specs: ["36V 10Ah", "35km range", "Shimano 6-speed", "Foldable"],
    emoji: "🏙️"
  },
  {
    id: 5,
    name: "ADO A20F+ Fat Tyre",
    category: "mountain",
    price: 920,
    originalPrice: 1799,
    condition: "Very Good — 7.5/10",
    badge: "hot",
    specs: ["36V 10.4Ah", "40km range", "Fat Tyre", "Foldable"],
    emoji: "🏔️"
  },
  {
    id: 6,
    name: "Tern HSD S+ Cargo",
    category: "cargo",
    price: 2200,
    originalPrice: 4500,
    condition: "Good — 7/10",
    badge: "deal",
    specs: ["48V 14Ah", "65km range", "Bosch Motor", "Cargo Rack"],
    emoji: "📦"
  },
  {
    id: 7,
    name: "Fiido X Folding",
    category: "foldable",
    price: 850,
    originalPrice: 1899,
    condition: "Excellent — 9/10",
    badge: "new",
    specs: ["36V 11.6Ah", "45km range", "19.8kg", "Torque Sensor"],
    emoji: "🚲"
  },
  {
    id: 8,
    name: "Aleoca E-City 26\"",
    category: "city",
    price: 520,
    originalPrice: 999,
    condition: "Good — 7/10",
    badge: null,
    specs: ["36V 7.8Ah", "30km range", "26\" Wheels", "Step-through"],
    emoji: "🏙️"
  },
  {
    id: 9,
    name: "Xiaomi QiCycle C2",
    category: "city",
    price: 750,
    originalPrice: 1599,
    condition: "Very Good — 8/10",
    badge: "hot",
    specs: ["36V 7.5Ah", "40km range", "Torque Sensor", "App Connected"],
    emoji: "🏙️"
  },
  {
    id: 10,
    name: "Tern GSD S10 Cargo",
    category: "cargo",
    price: 2800,
    originalPrice: 5800,
    condition: "Very Good — 7.5/10",
    badge: "deal",
    specs: ["48V 20Ah", "80km range", "Bosch CX", "200kg Load"],
    emoji: "📦"
  },
  {
    id: 11,
    name: "Himo C26 Mountain",
    category: "mountain",
    price: 780,
    originalPrice: 1599,
    condition: "Good — 7/10",
    badge: null,
    specs: ["48V 10Ah", "50km range", "Shimano 7-speed", "26\""],
    emoji: "🏔️"
  },
  {
    id: 12,
    name: "DYU T1 Pedal-assist",
    category: "city",
    price: 480,
    originalPrice: 999,
    condition: "Excellent — 8/10",
    badge: "new",
    specs: ["36V 10Ah", "35km range", "Pedal Assist", "Lightweight"],
    emoji: "🏙️"
  }
];

// ===== Render Products =====
const productGrid = document.getElementById('productGrid');
const bikeSelect = document.getElementById('bike');

function renderProducts(filter = 'all') {
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  productGrid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" style="animation-delay: ${i * 0.07}s">
      <div class="product-image">
        <div class="product-image-placeholder">${p.emoji}</div>
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'hot' ? '🔥 Hot' : p.badge === 'new' ? 'New In' : 'Great Deal'}</span>` : ''}
      </div>
      <div class="product-details">
        <h3>${p.name}</h3>
        <div class="product-specs">
          ${p.specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">$${p.price.toLocaleString()}</span>
            <span class="product-original-price">$${p.originalPrice.toLocaleString()}</span>
          </div>
        </div>
        <div class="product-condition">${p.condition}</div>
        <button class="btn-enquire" style="margin-top: 12px" onclick="enquireBike('${p.name}')">Enquire Now</button>
      </div>
    </div>
  `).join('');
}

// Populate contact form select
products.forEach(p => {
  const opt = document.createElement('option');
  opt.value = p.name;
  opt.textContent = `${p.name} — $${p.price.toLocaleString()}`;
  bikeSelect.appendChild(opt);
});

renderProducts();

// ===== Filters =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// ===== Enquire Button on Product =====
function enquireBike(name) {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  bikeSelect.value = name;
  document.getElementById('message').focus();
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(contactForm));
  try {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (result.success) {
      successModal.classList.add('active');
      contactForm.reset();
    } else {
      alert(result.error || 'Something went wrong. Please try again.');
    }
  } catch {
    alert('Network error. Please try again.');
  }
});

modalClose.addEventListener('click', () => {
  successModal.classList.remove('active');
});

successModal.addEventListener('click', (e) => {
  if (e.target === successModal) successModal.classList.remove('active');
});

// ===== Mobile Nav =====
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});

// ===== Navbar scroll effect =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const root = document.documentElement;

function setTheme(dark) {
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeIcon.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Init from saved preference or system preference
const saved = localStorage.getItem('theme');
if (saved) {
  setTheme(saved === 'dark');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme(true);
}

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  setTheme(!isDark);
});
