import React from 'react';
import { Photo } from '../types';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const photos: Photo[] = [
  { id: 1, url: "https://drive.google.com/thumbnail?id=1gLc9Xfy9rv12RQAhyHvcY2VVsJB9RNKR&sz=w1000", caption: "Perspective", span: "md:col-span-2 md:row-span-2" },
  { id: 2, url: "https://drive.google.com/thumbnail?id=1mLtvEIwuSaaJkKwHqjAbteHVICnuDRdY&sz=w1000", caption: "Vibe Check", span: "md:col-span-1 md:row-span-2" },
  { id: 3, url: "https://drive.google.com/thumbnail?id=1gudBTciUGuL8Ku2ZYvZjT_6YdkhRPSzJ&sz=w1000", caption: "Frames", span: "" },
  { id: 5, url: "https://drive.google.com/thumbnail?id=1EPgFpKiPPgUBe3aaT0Dh_6GH6_EM0_Jn&sz=w1000", caption: "Focus", span: "md:col-span-2" },
  { id: 6, url: "https://drive.google.com/thumbnail?id=11Q6_zLJDcXY6oLW2Lb-VeP-faIN7l8mh&sz=w1000", caption: "Contrast", span: "md:col-span-2" }, // Swapped position for layout balance
  { id: 7, url: "https://drive.google.com/thumbnail?id=1liXNOmh3A3_NgNZ-QSmltulmKseSTXgP&sz=w1000", caption: "Light", span: "" },
  { id: 8, url: "https://drive.google.com/thumbnail?id=15_J7ayQu18JaOCeKHdjUnwyV0e9UAgWE&sz=w1000", caption: "Shadows", span: "md:col-span-2 md:row-span-2" }, // Swapped position
  { id: 10, url: "https://drive.google.com/thumbnail?id=1SN8_vsWxQBcBUsqGxHQcTCA1mlgx2kNw&sz=w1000", caption: "Mood", span: "md:row-span-2" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 relative">
      {/* Decorative bg text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -z-10 opacity-[0.02] pointer-events-none">
         <h2 className="text-[20vw] font-bold font-display leading-none text-center">CAPTURED</h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 text-pink-400">
            <Camera size={16} />
            <span className="text-sm font-bold tracking-wide uppercase">The Darkroom</span>
          </div>
          <h2 className="text-4xl font-display font-bold">Pixels & Memories 📸</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl border border-white/5 ${photo.span}`}
            >
              <img 
                src={photo.url} 
                alt={photo.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display font-bold text-xl tracking-wider text-white border-b-2 border-pink-500 pb-1">
                  {photo.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://instagram.com/binooyyyyyy" target="_blank" rel="noreferrer" className="inline-block text-gray-400 hover:text-white underline underline-offset-4 decoration-purple-500 hover:decoration-2 transition-all">
                See more on Insta →
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;