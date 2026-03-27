import { motion } from "framer-motion";

const StatsCard = ({ icon: Icon, label, value, color = "bg-primary", trend, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-6 hover:shadow-xl hover:border-primary transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
          <Icon size={24} className="text-white" />
        </div>
        {trend && (
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            trend > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {trend > 0 ? "+" : ""}{trend}%
          </span>
        )}
      </div>
      <div>
        <p className="text-3xl font-black text-gray-800 mb-1">{value}</p>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatsCard;