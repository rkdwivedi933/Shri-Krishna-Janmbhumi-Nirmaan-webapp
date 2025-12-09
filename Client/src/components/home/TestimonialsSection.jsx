import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Shankar Mahadevan",
    role: "Award-winning Singer & Music Composer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    text: "Such iconic temple-cum-cultural centers are the need of the hour. India has a huge potential to develop spiritual tourism for society's overall good and well-being. The Bhagavad-Gita contains a wealth of confidential knowledge that reveals the secret to leading happier and more fulfilled lives.",
    textHindi: "भक्ति के ये मंदिर मेरी हर वह सेंट मेरी shraddha, seva aur sangeet ka sangam hai. Aise temples karys yogkdan dena mere liye ek anand aur adhyatmik tapti ka vishay hai.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    name: "Nitish Bharadwaj",
    role: "Actor | Director | Producer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    text: "भारत जयपुर के गुप्त वृन्दावन धाम में नगरीय का वातावरण महसूस की. हमें अपने मार्गदर्शन और कृष्णा भक्ति में नये आयाम को खोज रहा है इस अनुरूर तम्बूर और साधु मुन्दी के कृपा वृत्ति सभी को आमंत्रित करती है इस मंदिर के निर्माण और यज्ञ की इच्छा है कुछ मुझे ये समझने है कि आप सभी को इस मन्दिर के लाभ मिलेगा इस सुन्दर कृत्य में आप सभी का आमंत्रण है और चाहता है कि सभी सहयोग करे।",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Sri Narendra Modi",
    role: "Prime Minister of India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    text: "Such iconic temple-cum-cultural centers are the need of the hour. India has a huge potential to develop spiritual tourism for society's overall good and well-being.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "Col. Rayavardhan Singh Rathore",
    role: "Minister of Youth Affairs and Sports Department of Rajasthan",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop",
    text: "वृद्धि गुप्तवन धाम पुरे संघ का जॉइना लोगों जोकि पुत्र मैदे दोहार प्रेक से सभी का एक रचना भी दे सकता है। इसकी सारता उच हो गए हैं सभी जानिये थे इसे दीपक तमाम आई डीगन हार अब रहान कार के विश भक्त दीवार सभी और आप का वितरण के रिसी ऐपन भूमिका से रीति पत्री भी दोनो विश्वोई।",
    gradient: "from-green-500 to-teal-500"
  },
  {
    name: "Guru Vinodanand Djion",
    role: "Spiritual Leader",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
    text: "is promoting a grand temple and cultural center in the Pink City of Jaipur to impart spiritual guidance to children, youth, and families, and is also associated with great works like Gaushala and Annakdan. Joining here not only means building a temple, but also bringing the blessings of culture, service, and Prasad to every home. All of you should definitely contribute to this holy work. Hare Krishna.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    name: "Sri Indresh Upadhyay",
    role: "Youth Motivator",
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=400&auto=format&fit=crop",
    text: "भारत जयपुर के गुप्त वृन्दावन धाम में नगरीय का वातावरण महसूस की. हमें अपने मार्गदर्शन और कृष्णा भक्ति में नये आयाम को खोज रहा है।",
    gradient: "from-cyan-500 to-blue-500"
  },
  
];

function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-purple-600 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Here's what people say
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            about us
          </h3>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: star * 0.1 }}
                viewport={{ once: true }}
              >
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 mt-4">Trusted by thousands of devotees worldwide</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden border border-gray-100">
                {/* Gradient accent on hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} origin-left`}
                ></motion.div>

                {/* Quote icon */}
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <Quote className="w-16 h-16 text-gray-900" />
                </motion.div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-50`}></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative z-10">
                  <p className="text-gray-700 leading-relaxed text-sm mb-4 line-clamp-6">
                    {testimonial.text}
                  </p>
                  {testimonial.textHindi && (
                    <p className="text-gray-600 leading-relaxed text-sm italic line-clamp-4">
                      {testimonial.textHindi}
                    </p>
                  )}
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mt-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Bottom decoration */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}
                ></motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join thousands of satisfied devotees
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Quote className="w-5 h-5" />
              Share Your Experience
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;