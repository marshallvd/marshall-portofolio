import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, Camera } from 'lucide-react'

const ModelPortfolio = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    { id: 1, src: '/images/model1.JPEG', title: 'Professional Portrait', category: 'Portrait' },
    { id: 2, src: '/images/model2.JPG', title: 'Outdoor Session', category: 'Outdoor' },
    { id: 3, src: '/images/model3.jpg', title: 'Creative Studio', category: 'Studio' },
    { id: 4, src: '/images/model4.jpg', title: 'Fashion Editorial', category: 'Fashion' },
    { id: 5, src: '/images/model5.JPEG', title: 'Lifestyle Photography', category: 'Lifestyle' },
    { id: 6, src: '/images/model6.JPEG', title: 'Urban Exploration', category: 'Urban' },
    // { id: 7, src: '/images/model7.jpg', title: 'Natural Light', category: 'Portrait' },
    // { id: 8, src: '/images/model-8.jpg', title: 'Artistic Shoot', category: 'Studio' },
  ]

  return (
    <section
      id="model-portfolio"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Model <span className="gradient-text">Portfolio</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional photography and modeling portfolio
          </p>
        </motion.div>

        {/* Photo Grid - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`break-inside-avoid rounded-xl overflow-hidden cursor-pointer ${
                darkMode ? 'bg-slate-900' : 'bg-gray-100'
              } shadow-lg card-hover group`}
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative overflow-hidden">
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover aspect-[3/4]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback placeholder if image fails to load */}
                <div className={`aspect-[3/4] ${darkMode ? 'bg-slate-800' : 'bg-gray-200'} items-center justify-center hidden`}>
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-6"
                >
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{photo.title}</h3>
                    <span className="inline-block px-3 py-1 bg-emerald-500/80 text-white text-xs rounded-full">
                      {photo.category}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </motion.button>

                {/* Image */}
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <span className="inline-block px-4 py-2 bg-emerald-500 rounded-full text-sm">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-16 p-8 rounded-xl text-center ${
            darkMode
              ? 'bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-800'
              : 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200'
          }`}
        >
          <Camera className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
          <h3 className="text-2xl font-bold mb-3">Available for Photoshoots</h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Interested in booking me for a modeling or photography session? Let's create something amazing together!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all"
          >
            Book a Session
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ModelPortfolio