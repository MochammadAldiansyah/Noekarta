// import { useEffect } from 'react';
// import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import 'lenis/dist/lenis.css';
import './index.css';

function App() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App;
