import React, { useRef, useState, useEffect } from 'react';
import historyTitle from '../assets/history_title.png';
import history1 from '../assets/history1.png';
import history2 from '../assets/history2.png';
import history3 from '../assets/history3.png';
import history4 from '../assets/history4.png';
import history5 from '../assets/history5.png';
import history6 from '../assets/history6.png';
import title1 from '../assets/hero-title1.png';
import title2 from '../assets/hero-title2.png';
import title3 from '../assets/hero-title3.png';
import title4 from '../assets/hero-title4.png';
import title5 from '../assets/hero-title5.png';
import title6 from '../assets/hero-title6.png';

const historyData = [
  {
    id: 1,
    titleImg: title3,
    year: 'Abad ke-5',
    desc: 'Pelabuhan rempah dan pusat perdagangan Nusantara',
    img: history1,
  },
  {
    id: 2,
    titleImg: title2,
    year: '1527',
    desc: 'Pelabuhan baru dimuara sungai Ciliwung yang mulai berkembang',
    img: history2,
  },
  {
    id: 3,
    titleImg: title1,
    year: '1619 - 1942',
    desc: 'Markas utama VOC dan pusat pemerintahan Hindia - Belanda',
    img: history3,
  },
  {
    id: 4,
    titleImg: title4,
    year: '1945 - 1960-an',
    desc: 'Ibu kota republik yang bangkit dan membenah diri',
    img: history4,
  },
  {
    id: 5,
    titleImg: title5,
    year: '1960 - 2000-an',
    desc: 'Pertumbuhan gesit menjadi kota Metropolitan dan dinamis',
    img: history5,
  },
  {
    id: 6,
    titleImg: title6,
    year: '2000 - Saat ini',
    desc: 'Menuju kota Cerdas, Terhubung dan berkelanjutan',
    img: history6,
  },
];

const History = () => {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCard, setActiveCard] = useState(1);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleScroll, 100);
    window.addEventListener('resize', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="history" className="pb-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <img
            src={historyTitle}
            alt="Lorong Waktu digital"
            className="h-14 md:h-20 mb-6 select-none object-contain"
          />
          <p className="text-gray-800 text-lg md:text-xl font-medium max-w-2xl">
            Jelajahi perjalanan panjang Jakarta Dari masa ke masa
          </p>
        </div>

        <div className="relative w-full">
          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseLeave={() => setActiveCard(1)}
            className="flex overflow-x-auto pb-12 pt-4 px-4 -mx-4 gap-6 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {historyData.map((item) => {
              const isActive = activeCard === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveCard(item.id)}
                  className={`relative min-w-[280px] md:min-w-[320px] h-[480px] bg-white rounded-[24px] snap-center cursor-pointer transition-shadow duration-500 border border-gray-100 flex-shrink-0 ${isActive ? 'shadow-[0_20px_40px_rgb(0,0,0,0.12)]' : 'shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]'}`}
                >
                  {/* Image Container */}
                  <div className={`absolute transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 ${isActive ? 'top-5 left-5 right-5 bottom-[calc(100%-190px)]' : 'top-0 left-0 right-0 bottom-0'}`}>
                    <img
                      src={item.img}
                      alt={`History ${item.id}`}
                      className={`w-full h-full select-none object-cover transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'rounded-[16px]' : 'rounded-[24px]'}`}
                    />
                    <div className={`absolute inset-0 bg-black/10 transition-all duration-500 pointer-events-none ${isActive ? 'opacity-0 rounded-[16px]' : 'opacity-100 rounded-[24px]'}`}></div>
                  </div>

                  {/* Nomor */}
                  <div className={`absolute top-5 left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#e5252a] font-bold text-lg shadow-md transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 ${isActive ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                    {item.id}
                  </div>

                  {/* Container kontent */}
                  <div className={`absolute top-[190px] left-0 right-0 bottom-0 p-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 flex flex-col justify-start ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="relative inline-block self-start mb-3">
                      <img src={item.titleImg} alt={`Title ${item.id}`} className="h-10 select-none md:h-12 object-contain" />
                    </div>

                    <div className="mt-2 mb-3">
                      <span className="inline-block text-[20px] font-bold text-gray-900 pb-1">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-[20px] text-gray-800 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* tombol panah */}
          <div
            className={`absolute top-0 -right-22 bottom-12 w-32 md:w-48 pointer-events-none transition-opacity duration-500 flex items-center justify-end pr-2 md:pr-4 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
          >
            <button
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.15)] text-[#e5252a] pointer-events-auto hover:scale-110 transition-transform duration-300 border border-gray-100"
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
                }
              }}
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default History;
