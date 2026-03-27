import { useMemo } from "react";
import { Calendar, FileText, CheckCircle, Clock } from "lucide-react";
import { useAuthContext } from "../contexts/AuthContext";
import { useEvenements } from "../hooks/useEvenements";
import { useReservations } from "../hooks/useReservations";
import StatsCard from "../components/Dashboard/StatsCard";
import RecentActivity from "../components/Dashboard/RecentActivity";
import LoadingSpinner from "../components/Common/LoadingSpinner";

const DashboardPage = () => {
  const { user } = useAuthContext();
  const { evenements, isLoading: loadingEvenements } = useEvenements();
  const { reservations, isLoading: loadingReservations } = useReservations();

  // Calculer les statistiques
  const stats = useMemo(() => {
    const totalEvenements = evenements.length;
    const evenementsDisponibles = evenements.filter((evt) => !evt.estComplet).length;
    const totalReservations = reservations.length;
    const reservationsEnAttente = reservations.filter((res) => res.statut === "en_attente").length;

    return {
      totalEvenements,
      evenementsDisponibles,
      totalReservations,
      reservationsEnAttente,
    };
  }, [evenements, reservations]);

  // Trier réservations par date (plus récentes d'abord)
  const recentReservations = useMemo(() => {
    return [...reservations].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
  }, [reservations]);

  // Filtrer événements à venir et trier par date
  const upcomingEvenements = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return evenements
      .filter((evt) => new Date(evt.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [evenements]);

  if (loadingEvenements || loadingReservations) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-500">
          Vue d'ensemble de votre activité touristique
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={Calendar}
          label="Total événements"
          value={stats.totalEvenements}
          color="bg-primary"
          delay={0}
        />
        <StatsCard
          icon={CheckCircle}
          label="Événements disponibles"
          value={stats.evenementsDisponibles}
          color="bg-green-500"
          delay={0.1}
        />
        <StatsCard
          icon={FileText}
          label="Total réservations"
          value={stats.totalReservations}
          color="bg-blue-500"
          delay={0.2}
        />
        <StatsCard
          icon={Clock}
          label="Réservations en attente"
          value={stats.reservationsEnAttente}
          color="bg-yellow-500"
          delay={0.3}
        />
      </div>

      <RecentActivity 
        reservations={recentReservations}
        evenements={upcomingEvenements}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-6">
          <h3 className="text-lg font-black text-gray-800 mb-6">
            Réservations par statut
          </h3>
          <div className="space-y-4">
            {[
              { label: "En attente", statut: "en_attente", color: "bg-yellow-500" },
              { label: "Confirmées", statut: "confirmee", color: "bg-green-500" },
              { label: "Traitées", statut: "traitee", color: "bg-blue-500" },
            ].map((item) => {
              const count = reservations.filter((res) => res.statut === item.statut).length;
              const percentage = stats.totalReservations > 0 
                ? Math.round((count / stats.totalReservations) * 100) 
                : 0;

              return (
                <div key={item.statut}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                    <span className="text-sm font-bold text-gray-800">{count} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-6">
          <h3 className="text-lg font-black text-gray-800 mb-6">
            Événements par statut
          </h3>
          <div className="space-y-4">
            {[
              { label: "Disponibles", estComplet: false, color: "bg-green-500" },
              { label: "Complets", estComplet: true, color: "bg-red-500" },
            ].map((item) => {
              const count = evenements.filter((evt) => evt.estComplet === item.estComplet).length;
              const percentage = stats.totalEvenements > 0 
                ? Math.round((count / stats.totalEvenements) * 100) 
                : 0;

              return (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                    <span className="text-sm font-bold text-gray-800">{count} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;