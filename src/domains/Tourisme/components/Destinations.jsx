import { MapPin, Clock, ArrowRight } from "lucide-react";
import cotonou from "../../../assets/img/cotonou.jpg";
import abomey from "../../../assets/img/abomey.jpg";
import dakar from "../../../assets/img/dakar.jpg";
import accra from "../../../assets/img/accra.jpg";
import abidjan from "../../../assets/img/abidjan.jpg";
import lome from "../../../assets/img/lome.jpg";

const destinations = [
  {
    id: 1,
    pays: "Bénin",
    ville: "Cotonou",
    description: "La capitale économique, entre modernité et traditions vaudou. Marchés animés, plages et gastronomie locale.",
    image: cotonou,
    tags: ["Culture", "Plage", "Gastronomie"],
    duree: "3-5 jours",
  },
  {
    id: 2,
    pays: "Bénin",
    ville: "Abomey",
    description: "L'ancienne capitale du puissant Royaume du Danxomè, classée au patrimoine mondial de l'UNESCO.",
    image: abomey,
    tags: ["Histoire", "UNESCO", "Art"],
    duree: "2-3 jours",
  },
  {
    id: 3,
    pays: "Sénégal",
    ville: "Dakar",
    description: "Ville dynamique au bout du monde, berceau de la teranga et de la musique africaine.",
    image: dakar,
    tags: ["Musique", "Plage", "Mode"],
    duree: "4-7 jours",
  },
  {
    id: 4,
    pays: "Ghana",
    ville: "Accra",
    description: "La porte d'or de l'Afrique, entre histoire coloniale, art contemporain et innovation.",
    image: accra,
    tags: ["Histoire", "Art", "Business"],
    duree: "3-5 jours",
  },
  {
    id: 5,
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    description: "La perle des lagunes, capitale économique de la région avec une vie nocturne vibrante.",
    image: abidjan,
    tags: ["Business", "Culture", "Nuit"],
    duree: "3-5 jours",
  },
  {
    id: 6,
    pays: "Togo",
    ville: "Lomé",
    description: "La seule capitale africaine bordant l'Atlantique, charmante et authentique.",
    image: lome,
    tags: ["Marché", "Plage", "Artisanat"],
    duree: "2-4 jours",
  },
];

const Destinations = () => {
  return (
    <section className="py-24 bg-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-sm uppercase tracking-widest">
            Nos Destinations
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explorez l'Afrique{" "}
            <span className="text-gold">de l'Ouest</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Des destinations soigneusement sélectionnées pour vous offrir
            le meilleur de la culture, de l'histoire et de la nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-primary/10 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.ville}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Clock size={12} className="text-primary" />
                  <span className="text-primary text-xs font-semibold">{dest.duree}</span>
                </div>
                
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  <MapPin size={14} className="text-white" />
                  <span className="text-white text-sm font-medium">{dest.pays}</span>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-black text-primary mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {dest.ville}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#f5f5f0] text-primary text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-secondary text-sm font-bold group-hover:gap-3 transition-all duration-300">
                  <span>Découvrir</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Voir toutes les destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;