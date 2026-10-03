// components/tourisme/Testimonials.jsx
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import abidjanImg from "../../../assets/img/abidjan.jpg";
import cotounouImg from "../../../assets/img/cotonou.jpg";
import accraImg from "../../../assets/img/accra.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Voyageuse Solo",
      image: abidjanImg,
      text: "Une expérience inoubliable à Ganvié ! L'équipe de Hils Travel a organisé chaque détail avec soin. Je recommande vivement.",
      rating: 5,
    },
    {
      name: "Jean-Claude Kouassi",
      role: "Famille de 4",
      image: cotounouImg,
      text: "Notre circuit en Afrique de l'Ouest était parfait. Guides professionnels, hébergements de qualité et découvertes authentiques.",
      rating: 5,
    },
    {
      name: "Amina Diallo",
      role: "Groupe d'amis",
      image: accraImg,
      text: "Hils Travel a su créer un voyage sur mesure qui correspondait exactement à nos attentes. Service impeccable du début à la fin.",
      rating: 5,
    },
  ];

  // Animation variants cohérents avec le reste du site
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-24 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
            Ils ont voyagé <span className="text-teal-600">avec nous</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Découvrez les expériences de nos voyageurs à travers l'Afrique de l'Ouest.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={32} className="text-teal-900" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-teal-600 fill-teal-600" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-slate-700 leading-relaxed mb-6 italic relative z-10 text-sm lg:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden ring-2 ring-teal-200 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div> */}
                {/* <div className="min-w-0">
                  <p className="font-bold text-teal-900 text-sm lg:text-base truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs lg:text-sm text-slate-500 truncate">
                    {testimonial.role}
                  </p>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;