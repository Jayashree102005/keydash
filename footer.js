document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-slate-900 w-full border-t border-slate-100">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
         <h1 class="text-2xl text-slate-900 font-bold tracking-tight">
          <a href="index.html" class="flex items-center gap-2.5 group">
            <span class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#F59E0B] shadow-md shadow-[#F59E0B]/20 group-hover:shadow-lg group-hover:shadow-[#F59E0B]/30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" class="w-5 h-5">
                <circle cx="11" cy="11" r="5.5" stroke="white" stroke-width="2.2" fill="none"/>
                <line x1="15.5" y1="11" x2="27" y2="11" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="24" y1="11" x2="24" y2="16" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="20" y1="11" x2="20" y2="15" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="3" y1="21" x2="9" y2="21" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.45"/>
                <line x1="5" y1="24" x2="15" y2="24" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.65"/>
                <line x1="3" y1="27" x2="19" y2="27" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.9"/>
              </svg>
            </span>
            <span class="flex items-baseline font-bold"><span class="text-slate-900">Key</span><span class="text-[#F59E0B]">Dash</span></span>
          </a>
        </h1>
        <p class="text-slate-500 text-sm leading-relaxed mt-2">
          We specialize in mobile car key replacement, smart fob programming, 
          and emergency locksmith services. Fast, reliable, and dispatched directly 
          to your vehicle's location.
        </p>

        <div class="flex gap-4 mt-6 text-lg">
          <a href="#" class="hover:text-[#F59E0B] transition text-slate-400"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#F59E0B] transition text-slate-400"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#F59E0B] transition text-slate-400"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          Our Services
        </h3>
        <ul class="space-y-2 text-slate-500 text-sm font-medium">
          <li><a href="services.html" class="hover:text-[#F59E0B] transition">Smart Fob Programming</a></li>
          <li><a href="services.html" class="hover:text-[#F59E0B] transition">Transponder Key Cutting</a></li>
          <li><a href="services.html" class="hover:text-[#F59E0B] transition">Emergency Vehicle Lockout</a></li>
          <li><a href="services.html" class="hover:text-[#F59E0B] transition">Ignition Repair & Replacement</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          Quick Links
        </h3>
        <ul class="space-y-2 text-slate-500 text-sm font-medium">
          <li><a href="about.html" class="hover:text-[#F59E0B] transition">About</a></li>
          <li><a href="library.html" class="hover:text-[#F59E0B] transition">Key Type Library</a></li>
          <li><a href="pricing.html" class="hover:text-[#F59E0B] transition">Price Matrix</a></li>
          <li><a href="contact.html" class="hover:text-[#F59E0B] transition">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          Dispatch Center
        </h3>

        <ul class="space-y-3 text-slate-500 text-sm font-medium">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt-fill text-[#F59E0B] mt-0.5"></i>
            <span>Serving the Greater Metro Area<br>Mobile Units Only</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone-fill text-[#F59E0B]"></i>
            <span>+1 (555) 123-4567</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope-fill text-[#F59E0B]"></i>
            <span>dispatch@mobilekeys.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="border-t border-slate-100 py-6 text-center text-slate-400 text-sm px-4 font-medium">
    © ${new Date().getFullYear()} KeyDash. All Rights Reserved.
  </div>

</footer>
`;
});
