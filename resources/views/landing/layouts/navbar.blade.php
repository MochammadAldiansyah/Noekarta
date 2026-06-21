<nav class="w-full bg-white px-6 md:px-12 lg:px-24 py-5 z-50 relative border-b border-gray-100">
    <div class="flex items-center justify-between">
        <!-- Bagian Logo -->
        <div class="flex items-center">
            <a href="/">
                <img src="{{ asset('assets/image/logo-noekarta.png') }}" alt="Noekarta Logo" class="h-8 md:h-10 w-auto">
            </a>
        </div>

        <!-- Tautan Navigasi (Desktop) -->
        <div class="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            <a href="#" class="relative text-gray-800 font-medium hover:text-red-600 transition-colors py-1 nav-link-animated">Beranda</a>
            <a href="#" class="relative text-gray-800 font-medium hover:text-red-600 transition-colors py-1 nav-link-animated">Beranda</a>
            <a href="#" class="relative text-gray-800 font-medium hover:text-red-600 transition-colors py-1 nav-link-animated">Beranda</a>
            <a href="#" class="relative text-gray-800 font-medium hover:text-red-600 transition-colors py-1 nav-link-animated">Beranda</a>
        </div>

        <!-- Sisi Kanan: Bahasa + Menu Burger -->
        <div class="flex items-center gap-4">
            <!-- Pemilih Bahasa -->
            <button class="flex items-center gap-1.5 text-gray-800 hover:text-black font-medium transition-colors focus:outline-none">
                <!-- Ikon Bola Dunia -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                </svg>
                <span class="text-sm tracking-wide">EN</span>
                <!-- Ikon Panah Bawah -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                </svg>
            </button>

            <!-- Tombol Menu Burger (Mobile) -->
            <button id="mobile-menu-btn" class="md:hidden flex items-center text-gray-800 hover:text-red-600 transition-colors focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>

    <!-- Overlay Menu Mobile -->
    <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 flex-col items-center gap-5 py-6 shadow-lg z-50 md:hidden">
        <a href="#" class="text-gray-800 font-medium hover:text-red-600 transition-colors text-lg">Beranda</a>
        <a href="#" class="text-gray-800 font-medium hover:text-red-600 transition-colors text-lg">Beranda</a>
        <a href="#" class="text-gray-800 font-medium hover:text-red-600 transition-colors text-lg">Beranda</a>
        <a href="#" class="text-gray-800 font-medium hover:text-red-600 transition-colors text-lg">Beranda</a>
    </div>
</nav>
