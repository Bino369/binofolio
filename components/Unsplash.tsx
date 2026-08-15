import React, { useState } from 'react';
import { UnsplashPhoto } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  ExternalLink, 
  Eye, 
  Download, 
  Heart, 
  Sparkles, 
  Search, 
  Share2, 
  X, 
  SlidersHorizontal, 
  Check, 
  Maximize2,
  Zap,
  Flame,
  Globe
} from 'lucide-react';

const unsplashPhotos: UnsplashPhoto[] = [
  {
    id: 'un-1',
    title: 'Neon Nights & Cyber Shadows',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'cyber',
    views: '84.2K',
    downloads: '9.4K',
    likes: 1420,
    camera: 'Sony A7 IV',
    focal: '35mm',
    aperture: 'f/1.4',
    iso: '400',
    colors: ['#0a051b', '#ff007f', '#00f0ff'],
    tags: ['#neon', '#cyberpunk', '#nightlife', '#citylights'],
    sticker: 'HOT DROP 🔥',
    featured: true
  },
  {
    id: 'un-2',
    title: 'Tokyo Rain Alley Reflection',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'urban',
    views: '112.5K',
    downloads: '14.1K',
    likes: 2150,
    camera: 'Fujifilm X-T4',
    focal: '23mm',
    aperture: 'f/2.0',
    iso: '320',
    colors: ['#0d1117', '#38ef7d', '#11998e'],
    tags: ['#urban', '#street', '#reflection', '#rainy'],
    sticker: 'EDITORS CHOICE ⭐',
    featured: true
  },
  {
    id: 'un-3',
    title: 'Minimalist Cosmic Fog',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'minimal',
    views: '65.8K',
    downloads: '7.8K',
    likes: 980,
    camera: 'Canon EOS R6',
    focal: '85mm',
    aperture: 'f/1.8',
    iso: '100',
    colors: ['#1e1b4b', '#818cf8', '#c084fc'],
    tags: ['#minimal', '#ocean', '#fog', '#calm'],
    sticker: 'PURE VIBE 🍃'
  },
  {
    id: 'un-4',
    title: 'Futuristic Architectural Geometry',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'urban',
    views: '49.1K',
    downloads: '5.2K',
    likes: 740,
    camera: 'Sony A7 IV',
    focal: '16mm',
    aperture: 'f/8.0',
    iso: '200',
    colors: ['#0f172a', '#38bdf8', '#94a3b8'],
    tags: ['#architecture', '#lines', '#monochrome', '#futuristic'],
    sticker: 'NO CAP 🧢'
  },
  {
    id: 'un-5',
    title: '35mm Film Grain Portrait in Midnight Blue',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'mood',
    views: '93.7K',
    downloads: '11.3K',
    likes: 1890,
    camera: 'Leica M10',
    focal: '50mm',
    aperture: 'f/1.2',
    iso: '800',
    colors: ['#172554', '#f43f5e', '#fb7185'],
    tags: ['#portrait', '#35mm', '#filmgrain', '#moody'],
    sticker: 'MAIN CHARACTER ✨',
    featured: true
  },
  {
    id: 'un-6',
    title: 'Cyberpunk OLED Mobile Wallpaper 4K',
    url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'wallpaper',
    views: '124.0K',
    downloads: '18.9K',
    likes: 3100,
    camera: 'Sony A7S III',
    focal: '24mm',
    aperture: 'f/1.4',
    iso: '1600',
    colors: ['#000000', '#d946ef', '#06b6d4'],
    tags: ['#wallpaper', '#oled', '#abstract', '#gradient'],
    sticker: '4K WALLPAPER 📱'
  },
  {
    id: 'un-7',
    title: 'Electric Violet Sunset Over Horizon',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'minimal',
    views: '78.4K',
    downloads: '8.1K',
    likes: 1250,
    camera: 'Fujifilm X-Pro3',
    focal: '35mm',
    aperture: 'f/4.0',
    iso: '160',
    colors: ['#3b0764', '#a855f7', '#ec4899'],
    tags: ['#sunset', '#gradient', '#violet', '#nature'],
    sticker: 'AESTHETIC 🔮'
  },
  {
    id: 'un-8',
    title: 'Golden Hour Street Motion Blur',
    url: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?q=80&w=1200&auto=format&fit=crop',
    downloadUrl: 'https://unsplash.com/@binoy369',
    unsplashUrl: 'https://unsplash.com/@binoy369',
    category: 'urban',
    views: '54.9K',
    downloads: '6.4K',
    likes: 890,
    camera: 'Canon EOS R5',
    focal: '50mm',
    aperture: 'f/2.8',
    iso: '100',
    colors: ['#451a03', '#f59e0b', '#fbbf24'],
    tags: ['#goldenhour', '#street photography', '#city', '#motion'],
    sticker: 'RAW 35MM 🎞️'
  }
];

const categories = [
  { id: 'all', label: 'ALL DROPS 🔮' },
  { id: 'cyber', label: 'CYBER & NEON 🌆' },
  { id: 'urban', label: 'URBAN STREET 🏙️' },
  { id: 'minimal', label: 'MINIMALIST 🍃' },
  { id: 'mood', label: 'MOODY PORTRAITS 🕶️' },
  { id: 'wallpaper', label: 'WALLPAPERS 📱' }
];

const Unsplash: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPhoto, setSelectedPhoto] = useState<UnsplashPhoto | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    unsplashPhotos.forEach(p => { counts[p.id] = p.likes; });
    return counts;
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedPhotos(prev => {
      const isLiked = !prev[id];
      setLikeCounts(c => ({
        ...c,
        [id]: c[id] + (isLiked ? 1 : -1)
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  const copyPhotoLink = (photo: UnsplashPhoto, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(photo.unsplashUrl);
    setCopiedId(photo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPhotos = unsplashPhotos.filter(photo => {
    const matchesCategory = activeCategory === 'all' || photo.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      photo.camera.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="unsplash" className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-dark-bg to-black text-white">
      {/* Gen Z Neon Ambient Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Marquee Banner */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 py-2.5 mb-16 shadow-lg shadow-pink-500/10 rotate-[-0.5deg]">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-6 font-display font-extrabold text-sm tracking-widest text-black uppercase px-4">
              <span>⚡ UNSPLASH APPROVED</span>
              <span>•</span>
              <span>📸 @BINOY369</span>
              <span>•</span>
              <span>💅 NO CAP JUST AESTHETICS</span>
              <span>•</span>
              <span>🖼️ FREE HIGH-RES DROPS</span>
              <span>•</span>
              <span>🔥 MAIN CHARACTER ENERGY</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Profile Card Header */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 mb-16 border border-white/10 relative overflow-hidden bg-gradient-to-br from-white/5 via-purple-900/10 to-cyan-900/10 shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Camera size={240} className="text-white" />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Profile Avatar / Badge */}
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 shadow-xl shadow-pink-500/20 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/profile-1718105740417-64293f9e9cf2image?w=150&dpr=2&crop=faces&fit=crop" 
                    onError={(e) => {
                      // Fallback avatar if unsplash avatar URL changes
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop';
                    }}
                    alt="Binoy Unsplash" 
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-black text-[10px] font-black tracking-wider px-2 py-0.5 rounded-full border border-black uppercase flex items-center gap-1 shadow-md">
                  <Zap size={10} fill="black" /> VERIFIED
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 font-mono text-xs font-bold flex items-center gap-1.5">
                    <Sparkles size={13} />
                    UNSPLASH CREATOR
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold flex items-center gap-1.5">
                    <Flame size={13} />
                    @binoy369
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-none mb-3">
                  Unsplash <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400">Vault 📸</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl font-light leading-relaxed">
                  Raw 35mm captures, cyberpunk neon aesthetics, and mood wallpapers free to download and use for your projects. No cap, pure visual dopamine.
                </p>
              </div>
            </div>

            {/* Profile Action & Unsplash Button */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
              <a 
                href="https://unsplash.com/@binoy369" 
                target="_blank" 
                rel="noreferrer"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold text-sm tracking-wide hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-purple-500/25 flex items-center justify-center gap-3 group"
              >
                <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                <span>Visit unsplash.com/@binoy369</span>
                <ExternalLink size={16} />
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-mono bg-white/5 py-2 px-4 rounded-xl border border-white/5">
                <Check size={14} className="text-emerald-400" />
                <span>Free under Unsplash License</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-pink-500/30 transition-colors">
              <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Eye size={14} /> Total Views
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">485K+</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Download size={14} /> Downloads
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">38.2K+</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Camera size={14} /> High-Res Drops
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">24+</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles size={14} /> Resolution
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">6000 px</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20 scale-105 border border-pink-400/50'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search aesthetics, camera, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => {
              const isLiked = likedPhotos[photo.id];
              const likesCount = likeCounts[photo.id];

              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`group relative rounded-3xl overflow-hidden border border-white/10 glass-panel bg-neutral-900/60 shadow-xl cursor-pointer ${
                    photo.featured ? 'sm:col-span-2 sm:row-span-1' : ''
                  }`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  {/* Image */}
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Sticker Badge top-left */}
                  {photo.sticker && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-black border border-white/20 shadow-lg tracking-wider flex items-center gap-1 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all">
                        {photo.sticker}
                      </span>
                    </div>
                  )}

                  {/* Top-right Quick Actions */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => toggleLike(photo.id, e)}
                      className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                        isLiked 
                          ? 'bg-pink-600 text-white border-pink-400 scale-110 shadow-lg shadow-pink-500/50' 
                          : 'bg-black/60 text-white border-white/20 hover:bg-pink-600/80 hover:border-pink-400'
                      }`}
                      title="Vibe check / Like"
                    >
                      <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                    </button>

                    <button
                      onClick={(e) => copyPhotoLink(photo, e)}
                      className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all"
                      title="Copy link to Unsplash"
                    >
                      {copiedId === photo.id ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                    </button>
                  </div>

                  {/* Bottom Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {/* Tags */}
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        {photo.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold font-display text-white mb-2 line-clamp-1 group-hover:text-pink-300 transition-colors">
                        {photo.title}
                      </h3>

                      {/* Camera Info & Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-300 pt-2 border-t border-white/10 font-mono">
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Camera size={13} className="text-purple-400" />
                          <span>{photo.camera} • {photo.focal}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-pink-400">
                            <Heart size={12} fill={isLiked ? 'currentColor' : 'none'} /> {likesCount}
                          </span>
                          <span className="flex items-center gap-1 text-cyan-400">
                            <Eye size={12} /> {photo.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
            <p className="text-2xl font-bold text-gray-400 mb-2">No shots found matching your filter 🔍</p>
            <p className="text-sm text-gray-500 mb-6">Try resetting search or picking another category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-6 py-2.5 rounded-full bg-purple-600 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Footer CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-3xl glass-panel border border-white/10 bg-gradient-to-r from-purple-950/40 via-black to-pink-950/40">
            <div className="text-left">
              <h4 className="text-lg font-bold font-display text-white">Want to use these photos for your project or wallpaper?</h4>
              <p className="text-xs text-gray-400">High-res 4K photos are ready for download under Unsplash License on my official handle.</p>
            </div>
            <a
              href="https://unsplash.com/@binoy369"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-pink-400 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg"
            >
              Go to @binoy369 <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-panel rounded-3xl border border-white/20 bg-neutral-950/90 overflow-hidden flex flex-col lg:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:bg-pink-600 transition-colors border border-white/20"
              >
                <X size={18} />
              </button>

              {/* Photo Display */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[500px]">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />

                {selectedPhoto.sticker && (
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-pink-600 text-white font-mono text-xs font-bold shadow-lg">
                    {selectedPhoto.sticker}
                  </span>
                )}
              </div>

              {/* Sidebar Metadata */}
              <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-neutral-900/90">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono text-xs border border-purple-500/30 uppercase">
                      {selectedPhoto.category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">UNSPLASH ID: {selectedPhoto.id}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-4">
                    {selectedPhoto.title}
                  </h3>

                  {/* EXIF Data */}
                  <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5 mb-6 text-xs font-mono">
                    <div className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-2 flex items-center gap-1.5">
                      <SlidersHorizontal size={12} className="text-cyan-400" /> EXIF Photography Gear
                    </div>

                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Camera</span>
                      <span className="text-white font-bold">{selectedPhoto.camera}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Focal Length</span>
                      <span className="text-white font-bold">{selectedPhoto.focal}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Aperture</span>
                      <span className="text-white font-bold">{selectedPhoto.aperture}</span>
                    </div>

                    <div className="flex justify-between py-1">
                      <span className="text-gray-400">ISO</span>
                      <span className="text-white font-bold">{selectedPhoto.iso}</span>
                    </div>
                  </div>

                  {/* Color Palette Swatches */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold mb-2">
                      Extracted Palette
                    </div>
                    <div className="flex gap-2">
                      {selectedPhoto.colors.map(c => (
                        <div 
                          key={c}
                          style={{ backgroundColor: c }}
                          className="w-8 h-8 rounded-lg border border-white/20 shadow-md group relative cursor-pointer"
                          title={`Copy ${c}`}
                          onClick={() => navigator.clipboard.writeText(c)}
                        >
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black text-[9px] font-mono text-white px-1.5 py-0.5 rounded border border-white/20 whitespace-nowrap z-30">
                            {c}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Buttons */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => toggleLike(selectedPhoto.id, e)}
                      className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition-all ${
                        likedPhotos[selectedPhoto.id]
                          ? 'bg-pink-600 text-white border-pink-500'
                          : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <Heart size={15} fill={likedPhotos[selectedPhoto.id] ? 'currentColor' : 'none'} />
                      {likeCounts[selectedPhoto.id]} Vibe Likes
                    </button>

                    <button
                      onClick={(e) => copyPhotoLink(selectedPhoto, e)}
                      className="py-3 px-4 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 font-bold text-xs flex items-center justify-center gap-2"
                    >
                      <Share2 size={15} />
                    </button>
                  </div>

                  <a
                    href="https://unsplash.com/@binoy369"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 hover:opacity-90 transition-all"
                  >
                    Open on Unsplash ⚡ <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Unsplash;
