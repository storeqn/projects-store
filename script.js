// رقم واتساب بصيغة دولية وبدون +
const WHATSAPP_NUMBER = "9647731378313";

const projects = [
  {
    id: 1,
    category: "system",
    type: "نظام إدارة",
    title: "نظام إدارة الدليفري",
    icon: "🚚",
    status: "اشتراك شهري",
    price: "35,000 د.ع / شهرياً",
    subscriptionOnly: true,
    description: "إدارة المطاعم والسائقين والطلبات مع متابعة حالة الطلب ولوحة تحكم سهلة.",
    features: ["إدارة سائقين", "تتبع الطلب", "لوحة تحكم", "هاتف + كمبيوتر"],
    demo: "delivery.html"
  },
  {
    id: 2,
    category: "web",
    type: "متجر إلكتروني",
    title: "متجر الأمير براند",
    icon: "🛍️",
    status: "مشروع حقيقي",
    description: "متجر إلكتروني متكامل لعرض مستحضرات التجميل والعطور مع الأقسام والعروض والسلة وإرسال الطلب عبر واتساب.",
    features: ["سلة شراء", "عروض", "أقسام وبراندات", "PWA"],
    demo: "https://storeqn.github.io/-alameer-brand/"
  },
  {
    id: 3,
    category: "app",
    type: "تطبيق ويب",
    title: "تطبيق متابعة السائق",
    icon: "📍",
    status: "متاح",
    description: "واجهة مبسطة للسائق لتنفيذ الطلبات وتحديث الحالات بسهولة من الهاتف.",
    features: ["GPS", "حالات طلب", "واجهة سريعة", "تثبيت كتطبيق"],
    demo: "#"
  },
  {
    id: 4,
    category: "system",
    type: "نظام أعمال",
    title: "نظام عد ومتابعة",
    icon: "📊",
    status: "حسب الطلب",
    description: "نظام مخصص لتسجيل العمليات اليومية وعرض تقارير وتحليلات للإدارة.",
    features: ["تقارير", "صلاحيات", "سجل يومي", "Firebase"],
    demo: "#"
  },
  {
    id: 5,
    category: "web",
    type: "موقع خدمات",
    title: "موقع شركة احترافي",
    icon: "🏢",
    status: "قالب جاهز",
    description: "واجهة شركة حديثة لعرض الخدمات والأعمال ووسائل التواصل بشكل احترافي.",
    features: ["متجاوب", "SEO", "واتساب", "سرعة عالية"],
    demo: "#"
  },
  {
    id: 6,
    category: "app",
    type: "أداة رقمية",
    title: "أداة إدارة وتقارير",
    icon: "🧰",
    status: "قابل للتطوير",
    description: "أداة خفيفة للمهام اليومية والتقارير ويمكن تحويلها لنظام خاص حسب النشاط.",
    features: ["تخصيص", "تصدير", "بحث", "هاتف"],
    demo: "#"
  }
];

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectGrid");
  const data = filter === "all" ? projects : projects.filter(p => p.category === filter);
  grid.innerHTML = data.map(p => `
    <article class="project-card">
      <div class="project-cover">
        <span class="project-status">${p.status}</span>
        <span class="project-icon">${p.icon}</span>
      </div>
      <div class="project-body">
        <span class="project-type">${p.type}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        ${p.price ? `<div class="project-price"><strong>${p.price}</strong></div>` : ""}
        <div class="project-features">
          ${p.features.map(f => `<span>${f}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a href="${p.demo}" ${p.demo === "#" ? 'onclick="return false;"' : 'target="_blank" rel="noopener"'}>معاينة</a>
          <button onclick="orderProject('${p.title}', ${p.subscriptionOnly ? 'true' : 'false'})">${p.subscriptionOnly ? "اشترك الآن" : "طلب المشروع"}</button>
        </div>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll("#filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

function wa(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function orderProject(name, subscriptionOnly = false) {
  if (subscriptionOnly) {
    wa(`مرحباً، أريد الاشتراك في: ${name}\nالاشتراك الشهري: 35,000 د.ع\nأريد معرفة خطوات التفعيل.`);
    return;
  }
  wa(`مرحباً، أريد الاستفسار عن مشروع: ${name}\nأريد معرفة السعر والتفاصيل.`);
}

function orderPlan(name) {
  wa(`مرحباً، أريد الاستفسار عن: ${name}\nيرجى إرسال التفاصيل والسعر.`);
}

function contactWhatsApp() {
  wa("مرحباً، لدي استفسار بخصوص تصميم أو شراء مشروع رقمي.");
}

renderProjects();
