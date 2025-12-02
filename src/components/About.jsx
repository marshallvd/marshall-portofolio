import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Briefcase, Code } from 'lucide-react'

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { icon: GraduationCap, label: 'GPA', value: '3.86/4.00' },
    { icon: Award, label: 'Certifications', value: '10+' },
    { icon: Briefcase, label: 'Projects', value: '15+' },
    { icon: Code, label: 'Technologies', value: '20+' },
  ]

  const education = [
    {
      title: 'Master of Information Systems',
      institution: 'Telkom University',
      period: 'Sep 2025 - Sep 2027',
      location: 'Bandung, Jawa Barat',
    },
    {
      title: 'Bachelor of Information Technology',
      institution: 'Universitas Udayana',
      period: 'Sep 2021 - Jun 2025',
      location: 'Jimbaran, Bali',
      gpa: '3.86/4.00',
    },
    {
      title: 'Machine Learning Cohort',
      institution: 'Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)',
      period: 'Mar 2024 - Aug 2024',
      location: 'Bandung, Jawa Barat',
      achievement: 'Distinction Graduate',
    },
  ]

  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'PHP', 'HTML/CSS'],
    'Frameworks & Libraries': ['Laravel', 'React', 'TensorFlow', 'Node.js'],
    'Data & ML': ['Data Analysis', 'Machine Learning', 'Data Visualization', 'SQL'],
    'Tools & Platforms': ['Git/GitHub', 'Figma', 'Canva', 'Microsoft Office'],
    'Soft Skills': ['Leadership', 'Communication', 'Problem-Solving', 'Teamwork'],
  }

  return (
    <section
      id="about"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know more about my background and expertise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-gray-50 border border-gray-200'
              } text-center shadow-lg`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-emerald-500" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className={`p-6 rounded-lg ${
                    darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <h4 className="text-xl font-semibold mb-2 text-emerald-500">{edu.title}</h4>
                  <p className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {edu.institution}
                  </p>
                  <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.period} | {edu.location}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm font-semibold text-teal-500">GPA: {edu.gpa}</p>
                  )}
                  {edu.achievement && (
                    <p className="text-sm font-semibold text-yellow-500">🏆 {edu.achievement}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-teal-500" />
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode
                            ? 'bg-slate-900 border border-slate-700 text-gray-300'
                            : 'bg-white border border-gray-300 text-gray-700'
                        } shadow-sm`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className={`p-8 rounded-xl ${
            darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-gray-50 border border-gray-200'
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Information Technology graduate from Udayana University (June 2025, GPA 3.86), currently pursuing 
            Master's degree in Information Systems at Telkom University. Demonstrated expertise spanning Machine 
            Learning, Data Science, Software Engineering, AI Development & Testing, IT Governance, and Quality 
            Assurance. Proven experience in data analysis, software development, and AI model evaluation through 
            comprehensive hands-on projects and client work. Skilled in programming, data analysis, test automation, 
            digital communication, and IT strategic planning with strong foundation in technical problem-solving. 
            Possesses excellent communication and leadership abilities, ready to contribute to cutting-edge AI 
            training projects and drive innovation in the tech industry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About