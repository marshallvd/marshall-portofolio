import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ]

  const services = [
    'Landing Page',
    'Company Profile',
    'E-Commerce',
    'Travel & Tour',
    'Social Media Management',
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/marshallvd', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/marshallvd/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mademarshall97@gmail.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`relative ${darkMode ? 'bg-emerald-950' : 'bg-gray-900'} text-white pt-16 pb-8`}>
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-50 l" />
              {/* <h3 className="text-xl font-bold gradient-text">Marshall VD</h3> */}
            </div>
            <p className="text-gray-400 mb-6">
              Full Stack Developer & Machine Learning Engineer passionate about creating innovative digital solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-emerald-900 hover:bg-emerald-600' : 'bg-gray-800 hover:bg-emerald-600'
                  } transition-all`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-emerald-400 transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-teal-400 transition-colors inline-block"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="font-semibold text-white">Email:</span><br />
                <a href="mailto:mademarshall97@gmail.com" className="hover:text-emerald-400 transition-colors">
                  mademarshall97@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span><br />
                <a href="tel:+6285155426099" className="hover:text-emerald-400 transition-colors">
                  +62 851 5542 6099
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span><br />
                Denpasar Timur, Bali
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`border-t ${darkMode ? 'border-emerald-900' : 'border-gray-800'} mb-8`}></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center md:text-left"
          >
            © {currentYear} Marshall Vira Deva. Made with <Heart className="inline w-4 h-4 text-red-500" /> in Bali.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 text-gray-400 text-sm"
          >
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-emerald-500/50 transition-all z-40"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  )
}

export default Footer