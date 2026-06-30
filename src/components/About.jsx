import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import TitleImage from '../assets/Apa_Itu_Jakarta.png';
import landmark from '../assets/landmark.png';
import landmark2 from '../assets/landmark2.png';
import landmark3 from '../assets/landmark3.png';
import landmark4 from '../assets/landmark4.png';
import landmark5 from '../assets/landmark5.png';

const CARDS = [landmark, landmark2, landmark3, landmark4, landmark5];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CARDS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-4 pb-30 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="flex justify-center mb-[20px]">
        <img src={TitleImage} alt="Apa Itu Jakarta" className="w-[500px] h-[120px] object-contain select-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* text sama tombol */}
        <div className="space-y-6">
          <h2 className="text-[43px] font-bold text-gray-900 leading-tight">
            Jakarta, Kota sejarah<br />& inovasi
          </h2>
          <p className="text-black text-2xl leading-relaxed">
            Dari pelabuhan Sunda Kelapa hingga pusat Inovasi digital Asia Tenggara,
            Jakarta memadukan warisan budaya dan semanat modern untuk masa depan
            yang lebih baik
          </p>
          <button className="flex items-center gap-2 px-3 py-3 border border-red-500 text-red-600 rounded-[15px] font-medium hover:bg-red-50 transition-colors">
            Selengkapnya tentang Jakarta
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* card image */}
        <div className="relative h-[500px] md:h-[550px] w-full flex justify-center items-center overflow-hidden">
          <div className="relative w-[321px] h-[462px]">
            {CARDS.map((cardImg, index) => {
              const len = CARDS.length;
              let offset = index - activeIndex;

              if (offset > Math.floor(len / 2)) offset -= len;
              if (offset < -Math.floor(len / 2)) offset += len;

              let scale = 1;
              let translateX = 0;
              let translateY = 0;
              let zIndex = 10;
              let opacity = 1;

              if (offset === 0) {
                // Tengah
                scale = 1;
                translateX = 0;
                translateY = 0;
                zIndex = 20;
                opacity = 1;
              } else if (offset === -1) {
                // Kiri
                scale = 0.85;
                translateX = -140;
                translateY = 15;
                zIndex = 10;
                opacity = 0.9;
              } else if (offset === 1) {
                // Kanan
                scale = 0.85;
                translateX = 140;
                translateY = 15;
                zIndex = 10;
                opacity = 0.9;
              } else {
                scale = 0.7;
                translateX = 0;
                translateY = 30;
                zIndex = 0;
                opacity = 0;
              }

              return (
                <img
                  key={index}
                  src={cardImg}
                  alt={`Jakarta landmark ${index + 1}`}
                  className="absolute top-0 left-0 w-[321px] h-[462px] rounded-[20px] object-cover select-none transition-all duration-700 ease-in-out origin-bottom"
                  style={{
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
