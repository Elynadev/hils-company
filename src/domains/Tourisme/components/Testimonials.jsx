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

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-sm uppercase tracking-widest">
            Témoignages
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ils ont voyagé <span className="text-secondary">avec nous</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez les expériences de nos voyageurs à travers l'Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg rounded-3xl p-8 border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6">
                <Quote size={40} className="text-gold/20" />
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
