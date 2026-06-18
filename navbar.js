document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<style>
  /* Custom Active States */
  .nav-active { 
    font-weight: 700 !important; 
    text-decoration: underline !important; 
    text-underline-offset: 4px !important;
    text-decoration-thickness: 2px !important;
    background-color: transparent !important; 
    color: #F59E0B !important; /* Theme Amber */
  }
  .home-active { 
    font-weight: 700 !important; 
    text-decoration: none !important; 
    background-color: transparent !important; 
    color: #F59E0B !important;
  }
</style>

<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

    <!-- Logo (left) -->
    <div class="flex items-center">
      <h1 class="text-2xl text-slate-900 font-bold tracking-tight">
          <a href="index.html" class="flex items-center gap-2">
            <i class="bi bi-car-front-fill text-[#F59E0B]"></i>
            KeyDash
          </a>
        </h1>
    </div>

    <!-- Desktop Navigation (center) -->
    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-7 text-sm font-medium text-slate-900" id="navLinks">

        <!-- Home Dropdown -->
        <li class="relative">
          <button id="homeDropdownBtn" class="flex items-center gap-1 hover:text-[#F59E0B] transition">
            Home <i class="bi bi-chevron-down text-xs"></i>
          </button>
          <ul id="homeDropdownMenu"
            class="absolute left-0 mt-3 w-44 bg-white text-slate-900 rounded-xl shadow-xl border border-slate-100 hidden z-50 overflow-hidden">
            <li><a href="index.html" class="block px-4 py-2 hover:bg-amber-50 hover:text-[#F59E0B] transition">Home 1</a></li>
            <li><a href="home2.html" class="block px-4 py-2 hover:bg-amber-50 hover:text-[#F59E0B] transition">Home 2</a></li>
          </ul>
        </li>

        <li><a href="about.html" class="hover:text-[#F59E0B] transition">About</a></li>
        <li><a href="services.html" class="hover:text-[#F59E0B] transition">Services</a></li>
        <li><a href="library.html" class="hover:text-[#F59E0B] transition">Key Library</a></li>
        <li><a href="pricing.html" class="hover:text-[#F59E0B] transition">Price Matrix</a></li>
        <li><a href="contact.html" class="hover:text-[#F59E0B] transition">Contact</a></li>

        <!-- Dashboard Dropdown -->
        <li class="relative">
          <button id="dashboardDropdownBtn" class="flex items-center gap-1 hover:text-[#F59E0B] transition">
            Dashboard <i class="bi bi-chevron-down text-xs"></i>
          </button>
          <ul id="dashboardDropdownMenu"
            class="absolute left-0 mt-3 w-48 bg-white text-slate-900 rounded-xl shadow-xl border border-slate-100 hidden z-50 overflow-hidden">
            <li><a href="user.html" class="block px-4 py-2 hover:bg-amber-50 hover:text-[#F59E0B] transition">User</a></li>
            <li><a href="admin.html" class="block px-4 py-2 hover:bg-amber-50 hover:text-[#F59E0B] transition">Admin</a></li>
          </ul>
        </li>

      </ul>
    </div>

    <!-- Right Side -->
    <div class="flex items-center gap-3">

      <!-- Desktop buttons (hidden on mobile/tablet) -->
      <div id="rightButtons" class="hidden lg:flex items-center gap-4">

        <!-- Theme Toggle -->
        <button id="theme-toggle" class="text-lg text-slate-900 hover:text-[#F59E0B] transition">
          <i class="themeIcon bi bi-moon-stars-fill"></i>
        </button>

        <!-- RTL Toggle -->
        <button id="rtlToggle" class="text-lg text-slate-900 hover:text-[#F59E0B] transition">
          <i class="bi bi-arrow-left-right"></i>
        </button>

        <!-- Get Quote (secondary outlined) -->
        <a href="sign.html"
          class="px-5 py-2.5 rounded-xl border-2 border-[#F59E0B] text-[#F59E0B] text-sm font-bold hover:bg-[#F59E0B] hover:text-white transition duration-200 shadow-sm">
          Sign Up
        </a>

        <!-- Login (primary CTA pill) -->
        <a href="login.html"
          class="px-5 py-2.5 rounded-xl bg-[#F59E0B] text-white text-sm font-bold hover:bg-[#D97706] shadow-md transition duration-200">
          Login
        </a>

      </div>

      <!-- Hamburger (mobile/tablet only) -->
      <button id="hamburgerBtn" class="flex items-center justify-center text-3xl text-[#F59E0B] lg:hidden">
        <i class="bi bi-list" id="hamburgerIcon"></i>
      </button>

    </div>

  </div>
</header>

<!-- Mobile Overlay -->
<div id="mobileMenuOverlay" class="fixed inset-0 bg-black bg-opacity-40 hidden z-40 backdrop-blur-sm"></div>

<!-- Mobile Menu -->
<div id="mobileMenu"
  class="fixed top-0 right-0 h-full w-72 bg-white text-slate-900 z-50
          transform translate-x-full transition-transform duration-300 shadow-2xl">

  <!-- Header -->
  <div class="flex items-center justify-between p-5 border-b border-slate-100">
    <h2 class="text-xl font-bold flex items-center gap-2">
      <i class="bi bi-car-front-fill text-[#F59E0B]"></i> Menu
    </h2>
    <button id="closeMenuBtn" class="text-3xl text-slate-900 hover:text-[#F59E0B] transition">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>

  <!-- Menu Items + Extras (scrolls together) -->
  <div class="p-6 overflow-y-auto font-medium">
    <ul class="space-y-4">

      <!-- Home -->
      <li>
        <button id="mobileDropdownBtn" class="w-full flex items-center justify-between py-2 hover:text-[#F59E0B] transition">
          <span>Home</span>
          <i id="mobileHomeChevron" class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2 rounded-xl border border-slate-100 p-2 bg-slate-50">
          <li><a href="index.html" class="block py-1 px-2 rounded-md hover:bg-white hover:text-[#F59E0B]">Home 1</a></li>
          <li><a href="home2.html" class="block py-1 px-2 rounded-md hover:bg-white hover:text-[#F59E0B]">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2 hover:text-[#F59E0B] transition">About</a></li>
      <li><a href="services.html" class="block py-2 hover:text-[#F59E0B] transition">Services</a></li>
      <li><a href="library.html" class="block py-2 hover:text-[#F59E0B] transition">Key Library</a></li>
      <li><a href="pricing.html" class="block py-2 hover:text-[#F59E0B] transition">Price Matrix</a></li>
      <li><a href="contact.html" class="block py-2 hover:text-[#F59E0B] transition">Contact</a></li>

      <!-- Dashboard -->
      <li>
        <button id="mobileDashboardBtn" class="w-full flex items-center justify-between py-2 hover:text-[#F59E0B] transition">
          <span>Dashboard</span>
          <i id="mobileDashboardChevron" class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDashboardMenu" class="hidden mt-2 ml-4 space-y-2 rounded-xl border border-slate-100 p-2 bg-slate-50">
          <li><a href="user.html" class="block py-1 px-2 rounded-md hover:bg-white hover:text-[#F59E0B]">User</a></li>
          <li><a href="admin.html" class="block py-1 px-2 rounded-md hover:bg-white hover:text-[#F59E0B]">Admin</a></li>
        </ul>
      </li>
    </ul>

    <!-- Mobile Extras -->
    <div class="mt-6 pt-6 border-t border-slate-100">
      <!-- Auth CTA buttons -->
      <div class="flex flex-col gap-3 mb-6">
        <a href="sign.html" class="w-full text-center py-3 rounded-xl border-2 border-[#F59E0B] text-[#F59E0B] text-sm font-bold hover:bg-[#F59E0B] hover:text-white transition duration-200">
          Sign Up
        </a>
        <a href="login.html" class="w-full text-center py-3 rounded-xl bg-[#F59E0B] text-white text-sm font-bold hover:bg-[#D97706] shadow-md transition duration-200">
          Login
        </a>
      </div>

      <!-- Controls row -->
      <div class="flex justify-center gap-8">
        <button id="mobile-theme-toggle" class="text-2xl text-slate-900 hover:text-[#F59E0B] transition">
          <i class="bi bi-moon-fill"></i>
        </button>
        <button id="mobile-rtl-toggle" class="text-2xl text-slate-900 hover:text-[#F59E0B] transition">
          <i class="bi bi-arrow-left-right"></i>
        </button>
      </div>
    </div>
  </div>

</div>
`;

  // === UI INTERACTIONS ===
  
  // Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenuOverlay.classList.toggle('hidden');
    body.classList.toggle('mobile-menu-open');
  }

  hamburgerBtn?.addEventListener('click', toggleMobileMenu);
  closeMenuBtn?.addEventListener('click', toggleMobileMenu);
  mobileMenuOverlay?.addEventListener('click', toggleMobileMenu);

  // Mobile dropdowns
  const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
  mobileDropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileDropdownMenu.classList.toggle('hidden');
    document.getElementById('mobileHomeChevron')?.classList.toggle('rotate-180');
  });

  const mobileDashboardBtn = document.getElementById("mobileDashboardBtn");
  const mobileDashboardMenu = document.getElementById("mobileDashboardMenu");
  mobileDashboardBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileDashboardMenu.classList.toggle("hidden");
    document.getElementById('mobileDashboardChevron')?.classList.toggle('rotate-180');
  });

  // Desktop dropdowns
  const homeDropdownBtn = document.getElementById('homeDropdownBtn');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');
  homeDropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    homeDropdownMenu.classList.toggle('hidden');
    document.getElementById("dashboardDropdownMenu")?.classList.add("hidden");
  });

  const dashboardBtn = document.getElementById("dashboardDropdownBtn");
  const dashboardMenu = document.getElementById("dashboardDropdownMenu");
  dashboardBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    dashboardMenu.classList.toggle("hidden");
    document.getElementById("homeDropdownMenu")?.classList.add("hidden");
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (homeDropdownBtn && !homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
      homeDropdownMenu.classList.add('hidden');
    }
    if (dashboardBtn && !dashboardBtn.contains(e.target) && !dashboardMenu.contains(e.target)) {
      dashboardMenu.classList.add("hidden");
    }
  });

  // Close dropdowns on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      homeDropdownMenu?.classList.add('hidden');
      dashboardMenu?.classList.add("hidden");
      if (window.innerWidth <= 1024 && !mobileMenu.classList.contains('translate-x-full')) {
        toggleMobileMenu();
      }
    }
  });

  // Dark/light mode toggle
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if(theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const toggleBtn = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    applyTheme(savedTheme);
    const iconHtml = savedTheme === "dark" 
      ? `<i class="bi bi-brightness-high-fill"></i>` 
      : `<i class="themeIcon bi bi-moon-stars-fill"></i>`;
    if(toggleBtn) toggleBtn.innerHTML = iconHtml;
    if(mobileThemeToggle) mobileThemeToggle.innerHTML = iconHtml;
  }

  const handleThemeToggle = () => {
    let theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    const iconHtml = newTheme === "dark" 
      ? `<i class="bi bi-brightness-high-fill"></i>` 
      : `<i class="themeIcon bi bi-moon-stars-fill"></i>`;
    if(toggleBtn) toggleBtn.innerHTML = iconHtml;
    if(mobileThemeToggle) mobileThemeToggle.innerHTML = iconHtml;
  };

  toggleBtn?.addEventListener("click", handleThemeToggle);
  mobileThemeToggle?.addEventListener("click", handleThemeToggle);

  // RTL toggle
  const handleRtlToggle = () => {
    const html = document.documentElement;
    html.setAttribute("dir", html.getAttribute("dir") === "rtl" ? "ltr" : "rtl");
  };
  document.getElementById("rtlToggle")?.addEventListener("click", handleRtlToggle);
  document.getElementById("mobile-rtl-toggle")?.addEventListener("click", handleRtlToggle);

  // ===== ACTIVE NAV TARGETING =====
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Desktop links
  document.querySelectorAll("#navLinks > li > a").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("nav-active");
    }
  });

  // Mobile links
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("nav-active");
      if (link.closest("#mobileDropdownMenu")) {
        document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
      }
      if (link.closest("#mobileDashboardMenu")) {
        document.getElementById("mobileDashboardBtn")?.classList.add("nav-active");
      }
    }
  });

  // Home dropdown button
  if (currentPath === "index.html" || currentPath === "home2.html") {
    document.getElementById("homeDropdownBtn")?.classList.add("home-active");
  }
  
  // Dashboard dropdown button styling logic
  if (currentPath === "user.html" || currentPath === "admin.html") {
      document.getElementById("dashboardDropdownBtn")?.classList.add("nav-active");
  }
});