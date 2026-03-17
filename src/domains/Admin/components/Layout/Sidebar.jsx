import { NavLink } from "react-router-dom";
import { LayoutDashboard, Calendar, FileText, MapPin, LogOut } from "lucide-react";
import { useAuthContext } from "../../contexts/AuthContext";

const Sidebar = () => {
  const { logout } = useAuthContext();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Calendar, label: "Événements", path: "/admin/evenements" },
    { icon: FileText, label: "Réservations", path: "/admin/reservations" },
    { icon: MapPin, label: "Destinations", path: "/admin/destinations" },
  ];

  return (
    <aside className="w-64 bg-primary text-white flex flex-col">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          Hils Admin
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-white text-primary font-bold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>


      <div className="p-4 border-t border-white/10">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-colors w-full"
        >
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;