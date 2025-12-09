import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone, LogIn, Sparkles, Heart } from 'lucide-react';
import Logo from '../assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------- Donate Button ----------------
function DonateButton({ fullWidth = false, variant = 'primary' }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary:
      'bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 border-2 border-yellow-400/50',
    gold:
      'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-orange-600 border-2 border-yellow-300',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/payment')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative flex items-center justify-center gap-2
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        px-5 py-2.5 rounded-xl font-semibold text-white
        shadow-lg hover:shadow-2xl hover:shadow-orange-500/50
        transition-all duration-300 overflow-hidden
      `}
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '200%' : '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
      />

      <Heart className={`w-4 h-4 ${isHovered ? 'fill-current' : ''} transition-all duration-300`} />
      <span className="relative z-10">दान करें</span>

      {isHovered && <Sparkles className="w-4 h-4 animate-pulse" />}
    </motion.button>
  );
}

// ---------------- Phone Button ----------------
function PhoneButton({ fullWidth = false, phoneNumber = '+91-1234567890' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative flex items-center justify-center gap-2
        bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 
        hover:from-green-700 hover:via-green-600 hover:to-emerald-700
        ${fullWidth ? 'w-full' : ''}
        px-5 py-2.5 rounded-xl font-semibold text-white
        shadow-lg hover:shadow-2xl hover:shadow-green-500/50
        border-2 border-green-400/30
        transition-all duration-300 overflow-hidden
      `}
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '200%' : '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
      />

      <motion.div
        animate={{ rotate: isHovered ? [0, -15, 15, -15, 0] : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Phone className="w-4 h-4" />
      </motion.div>

      <span className="relative z-10 hidden lg:inline">{phoneNumber}</span>
      <span className="relative z-10 lg:hidden">संपर्क करें</span>

      {isHovered && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-1 right-1">
          <Sparkles className="w-3 h-3 text-yellow-300" />
        </motion.div>
      )}
    </motion.a>
  );
}

// ---------------- Login Button ----------------
function LoginButton({ onClick, fullWidth = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative flex items-center justify-center gap-2
        bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900
        hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800
        ${fullWidth ? 'w-full' : ''}
        px-5 py-2.5 rounded-xl font-semibold text-white
        shadow-lg hover:shadow-2xl hover:shadow-blue-900/50
        border-2 border-yellow-400/40
        transition-all duration-300 overflow-hidden
      `}
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '200%' : '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      />

      <LogIn className="w-4 h-4 relative z-10" />
      <span className="relative z-10">लॉगिन</span>

      {isHovered && (
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1 right-1"
        >
          <Sparkles className="w-3 h-3 text-yellow-300" />
        </motion.div>
      )}
    </motion.button>
  );
}

// ---------------- NAVBAR MAIN ----------------
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          sticky top-0 z-50 transition-all duration-300
          ${scrolled ? 'w-full top-0 bg-blue-900/95 backdrop-blur-xl shadow-2xl' : 'mx-auto mt-3 bg-blue-900/95 shadow-lg'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"
                />
                <img
                  src={Logo}
                  alt="Logo"
                  className="relative h-16 w-16 md:h-20 md:w-20 object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-yellow-400/50"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-base md:text-xl lg:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                  श्रीकृष्ण जन्मभूमि संघर्ष न्यास
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  </motion.div>
                </span>
                <span className="text-xs text-yellow-300/80 hidden sm:block">Gupt Vrindavan Dham</span>
              </div>
            </motion.div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <DonateButton />
              <PhoneButton />
              <LoginButton onClick={() => navigate('/login')} />
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg"
            >
              {isOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />
      </motion.nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-gradient-to-br from-white via-orange-50 to-yellow-50 shadow-2xl z-50 md:hidden overflow-y-auto rounded-r-3xl"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-6 rounded-tr-3xl">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-yellow-400 hover:bg-white/20 p-2 rounded-full transition border-2 border-yellow-400/30"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                <div className="flex items-center gap-3 mt-2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-50" />
                    <img src={Logo} alt="Logo" className="relative h-16 w-16 object-cover rounded-full shadow-xl border-2 border-yellow-400" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg">गुप्त वृंदावन धाम</h3>
                    <p className="text-yellow-300/90 text-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      पवित्र मिशन
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="p-6 space-y-4">
                <DonateButton fullWidth variant="primary" />

                <PhoneButton fullWidth />

                <LoginButton
                  fullWidth
                  onClick={() => {
                    navigate('/login');
                    setIsOpen(false);
                  }}
                />

                {/* Footer */}
                <div className="pt-6 border-t-2 border-orange-200 space-y-3 mt-8">
                  <div className="flex items-center gap-2 text-orange-800 font-semibold">
                    <Sparkles className="w-4 h-4 text-orange-600" />
                    <span>1985 से सेवारत</span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    वृंदावन की आध्यात्मिक विरासत को संरक्षित और बढ़ावा देने के हमारे पवित्र मिशन में शामिल हों।
                  </p>

                  <div className="pt-4 flex items-center justify-center">
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full border-2 border-orange-300">
                      <span className="text-orange-900 font-bold text-sm">🙏 जय श्री कृष्ण 🙏</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
