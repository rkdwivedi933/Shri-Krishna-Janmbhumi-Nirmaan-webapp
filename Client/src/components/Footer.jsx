import React from "react";
import { motion } from "framer-motion";
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Heart,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Send,
  CheckCircle,
  Crown,
  Gift
} from "lucide-react";

const footerData = {
  sevaLinks: [
    { label: "Square Feet Seva", href: "#", icon: Crown, desc: "Become a patron" },
    { label: "Anna Daan Seva", href: "#", icon: Gift, desc: "Feed the devotees" },
    { label: "Gau Seva", href: "#", icon: Heart, desc: "Protect sacred cows" },
  ],
  socialLinks: [
    { name: "YouTube", href: "#", icon: Youtube, color: "hover:bg-red-600", followers: "10K+" },
    { name: "Instagram", href: "#", icon: Instagram, color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600", followers: "25K+" },
    { name: "Facebook", href: "#", icon: Facebook, color: "hover:bg-blue-600", followers: "15K+" },
  ],
  termsLinks: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
  contact: [
    { icon: MapPin, text: "Gupt Vrindavan Dham, Vrindavan, Uttar Pradesh" },
    { icon: Mail, text: "contact@guptvrindavan.org" },
    { icon: Phone, text: "+91 98765 43210" },
  ],
  stats: [
    { number: "50K+", label: "Devotees" },
    { number: "₹2Cr+", label: "Donated" },
    { number: "100+", label: "Sevas" },
  ]
};

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Stats bar */}
      

      {/* Donate banner */}
      <div className="max-w-7xl mx-auto px-10 py-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-1 shadow-2xl"
        >
          <div className="bg-gradient-to-br from-white via-orange-50 to-pink-50 rounded-3xl p-2 md:p-1">
            {/* Floating sparkles */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 right-8"
            >
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                    <Crown className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-bold text-orange-800 uppercase tracking-wide">
                      Sacred Mission
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight ">
                    Donate for Construction of<br />
                    <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Radha Krishna Temple
                    </span>
                  </h2>
                  <div className="flex flex-wrap gap-4 ">
                    <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700">Maha Prasadam Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700">80G Tax Benefits</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700">Digital Certificate</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white font-bold text-lg shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Heart className="w-6 h-6 fill-white" />
                    <span>Donate Now</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Seva links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Our Sevas
              </h3>
              <nav className="space-y-4">
                {footerData.sevaLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={i}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="group flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                        <Icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="font-semibold">{link.label}</div>
                        <div className="text-sm text-gray-500">{link.desc}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-4">
                {footerData.contact.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-sm leading-relaxed">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Stay Connected</h3>
              
              {/* Social links */}
              <div className="flex flex-wrap gap-4 mb-8">
                {footerData.socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      aria-label={social.name}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative p-4 rounded-2xl bg-white text-blue-900 shadow-lg hover:text-white transition-all ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-xs text-gray-400 whitespace-nowrap">{social.followers}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Newsletter */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Send className="w-5 h-5 text-purple-400" />
                  Newsletter
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  Get updates on temple construction, events & spiritual insights
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="font-semibold">©{new Date().getFullYear()} Gupt Vrindavan Dham</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">All Rights Reserved</span>
              </div>
              
              <div className="flex flex-wrap gap-6 justify-center">
                {footerData.termsLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <span>Crafted with</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
                <span>& devotion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}