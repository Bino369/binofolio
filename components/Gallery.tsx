import React from 'react';
import { Photo } from '../types';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const photos: Photo[] = [
  { id: 1, url: "https://drive.google.com/thumbnail?id=1mAh3MZQJuSfcl4JfFXEBcsCLVkkcTsFF&sz=w1000", caption: "Perspective", span: "md:col-span-2 md:row-span-2" },
  { id: 2, url: "https://drive.google.com/thumbnail?id=16hv-rN6TUMQgzjUmGz0B0lVh8IPZbj75&sz=w1000", caption: "Vibe Check", span: "md:col-span-1 md:row-span-2" },
  { id: 3, url: "https://drive.google.com/thumbnail?id=1Vzq_xFkpWQ9JKWE_IBvRtC2D0rNws7sY&sz=w1000", caption: "Frames", span: "" },
  { id: 5, url: "https://drive.google.com/thumbnail?id=1_3fWcW3GyzxuKll7Qc5FplAiQBT1XQ26&sz=w1000", caption: "Focus", span: "md:col-span-2" },
  { id: 6, url: "https://drive.google.com/thumbnail?id=18nVMldcqTi7Cpr42dXYjMiZbAZTetavg&sz=w1000", caption: "Contrast", span: "md:col-span-2" }, // Swapped position for layout balance
  { id: 7, url: "https://drive.google.com/thumbnail?id=1uDysKfSVwMwkEl7YZyfGTF2iqJwrxYye&sz=w1000", caption: "Light", span: "" },
  { id: 8, url: "https://lh3.googleusercontent.com/rd-d/ALs6j_GUpDo_moBtZ84PdOTI_-wnDbG1XYR2lmMVRXoyXquwItN1vjjZZes0dSR0JElQaoZWXRycDyRYh6IRMjoZoMmfpX8eMWHa_jx3iLKkVUnyNBfoA8hyZ3NBCmHUoy0P9uil9jxgPEE1RsyCGMslrUUxop02oBfVO_c2nrHiNz3LvsFSJp516EzWMF0h40ASVY28w3906cUucg2DtZmC_Ybz5jcsqCSwTG_82mrri60j8AhEPkR5v-wPFpl8RitUdXF-FGwemwYmV7U59yKYb5K-G-VQbU4njP9JBtOO-qISNnTcm6uUIwwZ02qZlS52zcnwKcFv3Q_vZ8i1h4tzbmre0TQtWPezo8zUgzK5dmS4PlHwvwAF2cu3oajioqjOs7J2fPplEXIEuiyqshMbF_6NUldZPQ0LTPG_Omr1KNMJTqGWl0sBJNi3mgyWfWThGgHuBTSb6JHNO-sWcECr1YyOVsqS6zbfeIArBCTGnL7Nw8Q9t_wJZmWzSddkbXrBEJQ0MNH96VRvBmjMHohEGo_gsxzvKRAvsmswlXbAQdxKZomTeH24dkVJbHLzUPxzxwyGbkJDB9JTbJ1IbPpXY5_td8clMXEm3g7XU2mS4U3ut2XCb2ykHOh6fYMDQ07jBqHLBijLa0-U2ZMni1c42E8jtGEQWkhejGPynPabjvuPXOn4zBqIr9kJ3PtEiWMs6Ti_tvMhtM-nEAlg-yl1G2xFYrIRVjiM8zX7_xZJawryRZk3ribKK0zDd_FjZlQXTnR1by0q2tte20VPqHJuGe2G1a2UgdqbEms_oacNhmzsW0zBF2U5-aWDj35Inl0WufbOEJVn1X_a0tO30eOQhIRJDXWBEPSB1k77ABKGg0sKy4lBrKUq-oANGZ9FuGChe5EQTMbGZ2VnHUMmVyKVCzZ-mdJChcmi4xSU6sZdUHoZ54O0_hIwcMGmB8UsZzLd2fyX3QxEAJAlf4YHnz7qD1baBD8-4ZZ8qqa5y8SppUl0NlDS_XkvAA_62eclQspVqh7ZncFfU-VxioKDJKAhf9UqToapoIwYfogviAfE7yfCvk3bhi6rKYOaRGO8JNOpKO2vkPsKz3opQCw=s16383-w1000?authuser=0", caption: "Shadows", span: "md:col-span-2 md:row-span-2" }, // Swapped position
  { id: 10, url: "https://drive.google.com/thumbnail?id=1jHu8NbaF8bg0565KcMrOnPOUf-A1YMiU&sz=w1000", caption: "Mood", span: "md:row-span-2" },
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
