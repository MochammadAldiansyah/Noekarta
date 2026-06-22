import { useState, useEffect, useRef } from 'react';

// impor gambar
import img1 from '../assets/hero-title1.png';
import img2 from '../assets/hero-title2.png';
import img3 from '../assets/hero-title3.png';
import img4 from '../assets/hero-title4.png';
import img5 from '../assets/hero-title5.png';
import img6 from '../assets/hero-title6.png';
import hero from '../assets/hero-image.png';



const images = [img1, img2, img3, img4, img5, img6];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const containerRef = useRef(null);
    const imgRef = useRef(null);

    // Fungsi buat memperbarui lebar pembungkus
    const updateContainerWidth = (imgW, imgH) => {
        if (!containerRef.current) return;
        const containerHeight = containerRef.current.clientHeight;
        if (imgH > 0 && containerHeight > 0) {
            const newWidth = imgW * (containerHeight / imgH);
            containerRef.current.style.width = `${newWidth}px`;
        }
    };

    // buat Perbarui lebar saat ukuran diubah
    useEffect(() => {
        const handleResize = () => {
            if (imgRef.current) {
                updateContainerWidth(imgRef.current.naturalWidth, imgRef.current.naturalHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Logika animasi ganti gambar
    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0); // Pudarkan gambar (fade out)

            setTimeout(() => {
                setCurrentIndex((prev) => {
                    const nextIndex = (prev + 1) % images.length;

                    const tempImg = new Image();
                    tempImg.onload = () => {
                        updateContainerWidth(tempImg.width, tempImg.height);
                        setOpacity(1); // Tampilkan gambar baru (fade in)
                    };
                    tempImg.src = images[nextIndex];

                    return nextIndex;
                });
            }, 500); // Durasi fade out 
        }, 3000); // Ganti gambar setiap 3 detik

        return () => clearInterval(interval);
    }, []);

    const handleImageLoad = (e) => {
        updateContainerWidth(e.target.naturalWidth, e.target.naturalHeight);
    };

    return (
        <section className="w-full min-h-[85vh] flex flex-col items-center justify-start pb-20 pt-10 overflow-hidden">
            <div className="flex flex-col  px-4 md:px-6 items-center justify-center text-center mt-8 mb-12">
                {/* Baris Pertama dengan Gambar Dinamis */}
                <div className="flex items-center justify-center whitespace-nowrap gap-1 sm:gap-2 md:gap-4 lg:gap-5 xl:gap-6 text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight leading-[1.2] md:leading-[1.1]">
                    <span>Dari Jejak</span>
                    {/* Pembungkus untuk gambar. Skala disesuaikan agar tidak melebihi batas */}
                    <div
                        ref={containerRef}
                        className="flex items-center justify-center h-6 sm:h-8 md:h-12 lg:h-16 xl:h-24 transition-[width] duration-500 ease-in-out"
                    >
                        <img
                            ref={imgRef}
                            src={images[currentIndex]}
                            className="h-full w-auto object-contain transition-opacity duration-500 ease-in-out"
                            alt="Batavia"
                            style={{ opacity }}
                            onLoad={handleImageLoad}
                        />
                    </div>
                    <span>Menuju</span>
                </div>

                {/* Baris Kedua */}
                <div className="mt-2 md:mt-4 lg:mt-5 xl:mt-6 text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight leading-[1.2] md:leading-[1.1]">
                    jakarta Kota Digital
                </div>
            </div>

            {/* Hero Image Section as Background */}
            <div 
                className="w-full mx-auto max-w-7xl mb-8 relative mt-16 rounded-2xl bg-no-repeat bg-cover bg-bottom flex flex-col items-center justify-start min-h-[350px] md:min-h-[450px] lg:min-h-[650px]"
                style={{ backgroundImage: `url(${hero})` }}
            >
                {/* Search Bar Overlapping */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-3/4 max-w-[684px] z-10">
                    <div className="bg-white/80 backdrop-blur-lg backdrop-saturate-150 rounded-3xl flex items-center px-6 py-3 mt-8 md:py-4 shadow-[3px_3px_3px_rgba(0,0,0,0.1)] border border-black/10 focus-within:bg-white/60 focus-within:ring-2 focus-within:ring-white/80 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 shrink-0 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input 
                            type="text" 
                            placeholder="Jelajahi Sejarah, budaya, kuliner, dll" 
                            className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400 text-base md:text-lg font-medium"
                        />
                    </div>
                </div>

                {/* Kontainer untuk kartu-kartu yang nanti akan ditambahkan di atas background ini */}
                <div className="w-full h-full flex items-end justify-center pb-10 px-4 mt-20">
                    {/* Placeholder untuk Cards (Batavia, Jayakarta, Sunda Kelapa) */}
                </div>
            </div>



        </section>
    );
};

export default Hero;
