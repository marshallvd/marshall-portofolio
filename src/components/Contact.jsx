import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Github, Instagram } from 'lucide-react'

const Contact = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    package: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mademarshall97@gmail.com',
      href: 'mailto:mademarshall97@gmail.com',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 851 5542 6099',
      href: 'https://wa.me/6285155426099',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Denpasar Timur, Bali, Indonesia',
      href: 'https://maps.google.com/?q=Denpasar+Bali',
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/marshallvd/', label: 'LinkedIn', color: 'bg-blue-600' },
    { icon: Github, href: 'https://github.com/marshallvd', label: 'GitHub', color: 'bg-gray-700' },
    { icon: Instagram, href: 'https://instagram.com/marshallvd', label: 'Instagram', color: 'bg-pink-600' },
  ]

  const services = [
    { 
      value: 'landing-page', 
      label: 'Landing Page',
      packages: ['Basic', 'Standard', 'Premium']
    },
    { 
      value: 'company-profile', 
      label: 'Company Profile',
      packages: ['Basic', 'Standard', 'Premium']
    },
    { 
      value: 'ecommerce', 
      label: 'E-Commerce',
      packages: ['Basic', 'Standard', 'Premium']
    },
    { 
      value: 'custom', 
      label: 'Custom Website',
      packages: ['Basic', 'Standard', 'Premium']
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset package when service changes
      ...(name === 'service' ? { package: '' } : {})
    }))
  }

  const handleSubmit = () => {
    // Validation
    if (!formData.name || !formData.service) {
      alert('Please fill in your name and select a service')
      return
    }
    
    // Build WhatsApp message
    const selectedService = services.find(s => s.value === formData.service)
    const serviceName = selectedService ? selectedService.label : 'Service'
    
    // Construct message parts
    let messageParts = []
    messageParts.push(`Hello, I am ${formData.name}.`)
    messageParts.push('')
    messageParts.push(`I am interested in your *${serviceName}* service${formData.package ? ` - *${formData.package}* package` : ''}.`)
    messageParts.push('')
    
    if (formData.message.trim()) {
      messageParts.push(formData.message.trim())
      messageParts.push('')
    }
    
    messageParts.push('Please provide more information. Thank you!')
    
    // Join with line breaks and encode
    const message = messageParts.join('%0A')
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/6285155426099?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const selectedServiceData = services.find(s => s.value === formData.service)

  return (
    <section
      id="contact"
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
            Get In <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Let's bring your digital project to life together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    darkMode
                      ? 'bg-slate-800 border border-slate-700 hover:border-emerald-500'
                      : 'bg-white border border-gray-200 hover:border-emerald-500'
                  } transition-all shadow-lg`}
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10">
                    <info.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {info.title}
                    </h4>
                    <p className="text-emerald-500">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 ${social.color} text-white rounded-xl shadow-lg transition-all`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className={`p-6 rounded-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-800' 
                  : 'bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200'
              }`}
            >
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-500" />
                Fast Response!
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I usually respond within 1-2 hours on business days. For faster responses, contact me via WhatsApp!
              </p>
            </motion.div>
          </motion.div>

          {/* WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-slate-800 border border-slate-700' 
                : 'bg-white border border-gray-200'
            } shadow-xl`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-500/10">
                  <MessageCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chat via WhatsApp</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Connect with me directly
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? 'bg-slate-900 border-slate-600 text-white placeholder-gray-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                    } border focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all`}
                  />
                </motion.div>

                {/* Service Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Service of Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? 'bg-slate-900 border-slate-600 text-white'
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all`}
                  >
                    <option value="">Select Service</option>
                    {services.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Package Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Package (Optional)
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    disabled={!formData.service}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? 'bg-slate-900 border-slate-600 text-white disabled:opacity-50'
                        : 'bg-gray-50 border-gray-300 text-gray-900 disabled:opacity-50'
                    } border focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all`}
                  >
                    <option value="">Select Package</option>
                    {selectedServiceData?.packages.map(pkg => (
                      <option key={pkg} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell me about your project details..."
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? 'bg-slate-900 border-slate-600 text-white placeholder-gray-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                    } border focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none`}
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  <MessageCircle size={20} />
                  Send via WhatsApp
                </motion.button>

                <p className={`text-xs text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  By sending a message, you will be redirected to WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact