import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Mail, Phone, MapPin, Clock,
  Facebook, Linkedin, Send,
  MessageCircle
} from 'lucide-react';
import hilsLogo from '../assets/img/hils-logo.png';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Godomey Togoudo, Bénin", "Événementiel | Industries Créatives"],
      color: "text-red-600"
    },
    {
      icon: Phone,
      title: "Téléphones",
      details: ["+229 01 95 41 66 26", "+229 01 68 52 59 12"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["htonissou92.com", "Manager : TOGNISSOU Hervé"],
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Zone d'intervention",
      details: ["Bénin – Afrique de l'Ouest", "Collaborations internationales selon les projets"],
      color: "text-yellow-600"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-900 rounded flex items-center justify-center">
                <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl block leading-tight text-teal-900">HILS</span>
                <span className="text-xs font-medium tracking-widest text-teal-600">COMPANY</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/about" },
                { label: "Services", href: "/#secteurs" },
                { label: "Contact", href: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link 
              to="/contact" 
              className="px-6 py-3 text-sm font-bold bg-teal-900 text-white rounded hover:bg-teal-800 transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8"
          >
            Nous Contacter
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            HILS COMPANY est une agence spécialisée dans la communication, l’événementiel et les expériences de marque, basée au Bénin et active en Afrique de l’Ouest.
            <br />
            Directeur : TOGNISSOU Hervé. Pour tout projet, contactez-nous par email, WhatsApp ou LinkedIn.
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT INFO SECTION ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-slate-100 mb-6`}>
                  <info.icon size={28} className={info.color} />
                </div>
                <h3 className="text-lg font-bold text-teal-900 mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 text-sm mb-2">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-teal-900 mb-6">
              Envoyez-nous un Message
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et nous vous répondrons au plus vite.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-teal-900 mb-3">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-teal-900 mb-3">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-teal-900 mb-3">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="+229 01 95 41 66 26"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-teal-900 mb-3">
                    Sujet
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="communication">Communication</option>
                    <option value="tourisme">Tourisme</option>
                    <option value="evenements">Événementiel</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-teal-900 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-teal-900 text-white font-bold rounded-lg hover:bg-teal-800 transition-all inline-flex items-center justify-center gap-3"
              >
                <Send size={18} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ===== CHANNELS SECTION ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-teal-900 mb-6">
              Autres Moyens de Nous Contacter
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Contact rapide et direct sur WhatsApp.",
                cta: "Envoyer un message",
                url: "https://wa.me/message/TLW5YHAJ74CTH1"
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                description: "Retrouvez-nous sur LinkedIn pour nos actualités professionnelles.",
                cta: "Voir le profil",
                url: "https://www.linkedin.com/in/herv%C3%A9-h-a-tognissou-hils-company-7bb9a2264"
              },
              {
                icon: Facebook,
                title: "Facebook",
                description: "Suivez notre page Facebook pour les dernières annonces.",
                cta: "Visiter la page",
                url: "https://www.facebook.com/profile.php?id=100083100673982"
              },
            ].map((channel, index) => (
              <motion.a
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all text-center block"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-teal-100 mb-6">
                  <channel.icon size={28} className="text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-4">{channel.title}</h3>
                <p className="text-slate-600 mb-6">{channel.description}</p>
                <div className="text-teal-700 font-bold hover:text-teal-900 transition-colors inline-flex items-center gap-2 justify-center">
                  {channel.cta}
                  <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-teal-900 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8"
          >
            Projet Ambitieux ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-xl max-w-3xl mx-auto mb-12"
          >
            Découvrez nos services et trouvez la solution adaptée à vos besoins.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/communication" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-slate-100 transition-all"
            >
              Communication
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/tourisme" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 border border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all"
            >
              Tourisme
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/events" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 border border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all"
            >
              Événementiel
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-teal-950 text-white/70 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <span className="font-bold text-2xl block leading-tight text-white">HILS</span>
                  <span className="text-xs font-medium tracking-widest text-teal-300">COMPANY</span>
                </div>
              </div>
              <p className="text-base leading-relaxed mb-6 max-w-md">
                Écosystème d'excellence africaine : communication, tourisme et événementiel.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=100083100673982" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                  <Facebook size={18} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/herv%C3%A9-h-a-tognissou-hils-company-7bb9a2264" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="https://wa.me/message/TLW5YHAJ74CTH1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/communication" className="hover:text-white">Communication</Link></li>
                <li><Link to="/tourisme" className="hover:text-white">Tourisme</Link></li>
                <li><Link to="/events" className="hover:text-white">Événementiel</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase">Liens Utiles</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-white">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© {new Date().getFullYear()} HILS Company. Tous droits réservés.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white">Confidentialité</a>
              <a href="#" className="hover:text-white">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
