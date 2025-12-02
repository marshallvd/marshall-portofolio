import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import servicesData from '../data/services'

const Services = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedService, setExpandedService] = useState(null)

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section
      id="services"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}
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
            My <span className="gradient-text">Services</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Pilih layanan yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        {/* Services List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden ${
                darkMode
                  ? 'bg-slate-800 border border-slate-700'
                  : 'bg-white border border-gray-200'
              } shadow-lg`}
            >
              {/* Service Header - Clickable */}
              <button
                onClick={() => toggleService(service.id)}
                className={`w-full p-6 md:p-8 flex items-center justify-between gap-4 transition-colors ${
                  expandedService === service.id
                    ? darkMode
                      ? 'bg-slate-700'
                      : 'bg-emerald-50'
                    : darkMode
                    ? 'hover:bg-slate-750'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-6 text-left flex-1">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      darkMode ? 'bg-emerald-500/10' : 'bg-emerald-100'
                    }`}
                  >
                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-500" />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Expand Icon */}
                <motion.div
                  animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    className={`w-6 h-6 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  />
                </motion.div>
              </button>

              {/* Packages - Expandable */}
              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-6 md:p-8 pt-0 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                      {/* Packages Grid */}
                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        {service.packages.map((pkg, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-xl border-2 transition-all hover:shadow-xl ${
                              idx === 1
                                ? darkMode
                                  ? 'border-emerald-500 bg-emerald-500/5'
                                  : 'border-emerald-500 bg-emerald-50'
                                : darkMode
                                ? 'border-slate-700 hover:border-slate-600'
                                : 'border-gray-200 hover:border-emerald-300'
                            }`}
                          >
                            {/* Package Badge */}
                            {idx === 1 && (
                              <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                                  POPULAR
                                </span>
                              </div>
                            )}

                            {/* Package Name */}
                            <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>

                            {/* Price */}
                            <div className="mb-4">
                              <span className="text-3xl font-bold gradient-text">
                                {pkg.price}
                              </span>
                            </div>

                            {/* Highlight */}
                            <p
                              className={`text-sm mb-6 italic ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}
                            >
                              {pkg.highlight}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                              {pkg.features.map((feature, featureIdx) => (
                                <li
                                  key={featureIdx}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                  <span
                                    className={
                                      darkMode ? 'text-gray-300' : 'text-gray-700'
                                    }
                                  >
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.a
                              href="#contact"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`block w-full py-3 text-center rounded-lg font-semibold transition-all ${
                                idx === 1
                                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                                  : darkMode
                                  ? 'bg-slate-700 hover:bg-slate-600 text-white'
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                              }`}
                            >
                              Order Sekarang
                            </motion.a>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-16 p-8 rounded-xl text-center ${
            darkMode
              ? 'bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-800'
              : 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200'
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Butuh Solusi Custom?</h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Punya project unik? Mari diskusikan bagaimana saya bisa membantu mewujudkan visi Anda.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all"
          >
            Hubungi Saya
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services