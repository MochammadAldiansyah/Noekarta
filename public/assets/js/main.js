document.addEventListener('DOMContentLoaded', () => {
    // Tombol Aktif/Nonaktif Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    // Animasi Perputaran Gambar Hero Section
    const heroImage = document.getElementById('hero-title-img');
    const heroContainer = document.getElementById('hero-img-container');
    
    if (heroImage && heroContainer) {
        // Daftar gambar yang disediakan
        const images = [
            'hero-title1.png',
            'hero-title2.png',
            'hero-title3.png',
            'hero-title4.png',
            'hero-title5.png',
            'hero-title6.png'
        ];
        let currentIndex = 0;

        // Muat awal (preload) gambar agar transisi lebih mulus
        images.forEach(src => {
            const img = new Image();
            img.src = `/assets/image/${src}`;
        });

        // Fungsi untuk memperbarui lebar pembungkus berdasarkan rasio aspek gambar dan tinggi pembungkus
        function updateContainerWidth(imgWidth, imgHeight) {
            const containerHeight = heroContainer.clientHeight;
            if (imgHeight > 0 && containerHeight > 0) {
                const newWidth = imgWidth * (containerHeight / imgHeight);
                heroContainer.style.width = newWidth + 'px';
            }
        }

     
        if (heroImage.complete && heroImage.naturalWidth > 0) {
            updateContainerWidth(heroImage.naturalWidth, heroImage.naturalHeight);
        } else {
            heroImage.onload = () => {
                updateContainerWidth(heroImage.naturalWidth, heroImage.naturalHeight);
            };
        }

       
        window.addEventListener('resize', () => {
            updateContainerWidth(heroImage.naturalWidth, heroImage.naturalHeight);
        });

        // Ganti gambar setiap 3 detik
        setInterval(() => {
            // Pudarkan (fade out) gambar saat ini
            heroImage.style.opacity = '0';
            
            //  Tunggu hingga transisi fade-out CSS selesai (500ms)
            setTimeout(() => {
                // Lanjut ke gambar berikutnya
                currentIndex = (currentIndex + 1) % images.length;
                const nextSrc = `/assets/image/${images[currentIndex]}`;
                
                // Buat gambar sementara untuk mengukur dimensinya
                const tempImg = new Image();
                tempImg.onload = () => {
                    // Animasikan lebar pembungkus dengan mulus agar sesuai dengan gambar baru
                    updateContainerWidth(tempImg.width, tempImg.height);
                    
                    // Ubah sumber (source) dan pudarkan (fade in) gambar baru
                    heroImage.src = nextSrc;
                    heroImage.style.opacity = '1';
                };
                tempImg.src = nextSrc;
            }, 500); 
        }, 3000);
    }
});
