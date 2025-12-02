import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, ExternalLink, Calendar, Award, Check } from 'lucide-react'
import certificatesData from '../data/certificates'

const Certificates = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [expandedCourse, setExpandedCourse] = useState(null)

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null)
      setExpandedCourse(null)
    } else {
      setExpandedCategory(categoryId)
      setExpandedCourse(null)
    }
  }

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  return (
    <section
      id="certificates"
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
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional certifications and course completions
          </p>
        </motion.div>

        {/* Categories List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {certificatesData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden ${
                darkMode
                  ? 'bg-slate-800 border border-slate-700'
                  : 'bg-white border border-gray-200'
              } shadow-lg`}
            >
              {/* Category Header - Clickable */}
              <button
                onClick={() => toggleCategory(category.id)}
                className={`w-full p-6 md:p-8 flex items-center justify-between gap-4 transition-colors ${
                  expandedCategory === category.id
                    ? darkMode
                      ? 'bg-slate-700'
                      : 'bg-emerald-50'
                    : darkMode
                    ? 'hover:bg-slate-750'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-6 text-left flex-1">
                  {/* Icon with Gradient */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${category.color}`}
                  >
                    <category.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {category.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Expand Icon */}
                <motion.div
                  animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
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

              {/* Courses List - Expandable */}
              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-6 md:p-8 pt-0 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                      <div className="space-y-4 mt-6">
                        {category.courses.map((course, courseIdx) => (
                          <div
                            key={course.id}
                            className={`rounded-lg overflow-hidden border ${
                              darkMode
                                ? 'border-slate-700 bg-slate-900/50'
                                : 'border-gray-200 bg-gray-50'
                            }`}
                          >
                            {/* Course Header - Clickable */}
                            <button
                              onClick={() => toggleCourse(course.id)}
                              className={`w-full p-4 md:p-6 flex items-center justify-between gap-4 transition-colors ${
                                expandedCourse === course.id
                                  ? darkMode
                                    ? 'bg-slate-800'
                                    : 'bg-white'
                                  : darkMode
                                  ? 'hover:bg-slate-800'
                                  : 'hover:bg-white'
                              }`}
                            >
                              <div className="flex items-start gap-4 text-left flex-1">
                                {/* Award Icon */}
                                <div
                                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${category.color}`}
                                >
                                  <Award className="w-5 h-5 text-white" />
                                </div>

                                {/* Course Info */}
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-lg md:text-xl font-bold mb-1">
                                    {course.title}
                                  </h4>
                                  <p
                                    className={`text-sm mb-2 ${
                                      darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                  >
                                    {course.subtitle}
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <Calendar size={14} className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                                    <span
                                      className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                                    >
                                      {course.date}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Expand Icon */}
                              <motion.div
                                animate={{
                                  rotate: expandedCourse === course.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                              >
                                <ChevronDown
                                  className={`w-5 h-5 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                  }`}
                                />
                              </motion.div>
                            </button>

                            {/* Course Details - Expandable */}
                            <AnimatePresence>
                              {expandedCourse === course.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className={`p-4 md:p-6 pt-0 border-t ${
                                    darkMode ? 'border-slate-700' : 'border-gray-200'
                                  }`}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                      {/* Left Column - Certificate Image */}
                                      <div>
                                        <div className={`relative overflow-hidden rounded-lg h-48 bg-gradient-to-br ${category.color} bg-opacity-20`}>
                                          <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full flex items-center justify-center"
                                          >
                                            <Award className={`w-20 h-20 opacity-30 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} />
                                          </motion.div>
                                        </div>

                                        {/* Issuer Info */}
                                        <div className="mt-4">
                                          <p
                                            className={`text-sm font-semibold mb-1 ${
                                              darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}
                                          >
                                            Issued by:
                                          </p>
                                          <p className="text-base font-bold">{course.issuer}</p>
                                        </div>

                                        {/* View Credential Button */}
                                        <motion.a
                                          href={course.credentialUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                          className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${category.color} text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all`}
                                        >
                                          <ExternalLink size={16} />
                                          View Credential
                                        </motion.a>
                                      </div>

                                      {/* Right Column - Details */}
                                      <div>
                                        {/* Skills */}
                                        <div className="mb-6">
                                          <h5
                                            className={`text-sm font-bold mb-3 ${
                                              darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}
                                          >
                                            Skills Acquired:
                                          </h5>
                                          <div className="flex flex-wrap gap-2">
                                            {course.skills.map((skill, idx) => (
                                              <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.1 }}
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                  darkMode
                                                    ? 'bg-slate-800 text-gray-300'
                                                    : 'bg-white text-gray-700'
                                                } border ${
                                                  darkMode ? 'border-slate-700' : 'border-gray-200'
                                                }`}
                                              >
                                                {skill}
                                              </motion.span>
                                            ))}
                                          </div>
                                        </div>

                                        {/* Sub-Certificates (if any) */}
                                        {course.subCertificates && course.subCertificates.length > 0 && (
                                          <div>
                                            <h5
                                              className={`text-sm font-bold mb-3 ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                              }`}
                                            >
                                              Courses Completed:
                                            </h5>
                                            <ul className="space-y-2">
                                              {course.subCertificates.map((subCert, idx) => (
                                                <li
                                                  key={idx}
                                                  className="flex items-start gap-2 text-sm"
                                                >
                                                  <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                                                  <span
                                                    className={
                                                      darkMode ? 'text-gray-300' : 'text-gray-700'
                                                    }
                                                  >
                                                    {subCert}
                                                  </span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-16 p-8 rounded-xl ${
            darkMode
              ? 'bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-800'
              : 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-2">25+</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Certifications</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-2">500+</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Learning Hours</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-2">30+</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Courses Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-2">3.86</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>GPA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates