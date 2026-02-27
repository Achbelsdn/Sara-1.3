"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Save } from "lucide-react";
import toast from "react-hot-toast";

const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

const initialHours = [
  { day_of_week: 0, open_time: "", close_time: "", is_closed: true },
  { day_of_week: 1, open_time: "11:30", close_time: "22:00", is_closed: false },
  { day_of_week: 2, open_time: "11:30", close_time: "22:00", is_closed: false },
  { day_of_week: 3, open_time: "11:30", close_time: "22:00", is_closed: false },
  { day_of_week: 4, open_time: "11:30", close_time: "22:00", is_closed: false },
  { day_of_week: 5, open_time: "11:30", close_time: "23:00", is_closed: false },
  { day_of_week: 6, open_time: "11:30", close_time: "23:00", is_closed: false },
];

export default function AdminHoursPage() {
  const [hours, setHours] = useState(initialHours);

  const updateHour = (dayIndex: number, field: string, value: string | boolean) => {
    setHours((prev) =>
      prev.map((h) =>
        h.day_of_week === dayIndex ? { ...h, [field]: value } : h
      )
    );
  };

  const handleSave = () => {
    toast.success("Horaires mis à jour !");
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-cream-100">Horaires d&apos;Ouverture</h1>
          <p className="text-dark-400 mt-1">Configurez les horaires de votre restaurant.</p>
        </div>
        <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow">
          <Save className="w-4 h-4" />Enregistrer
        </button>
      </div>

      <div className="space-y-3">
        {hours.map((hour, index) => (
          <motion.div
            key={hour.day_of_week}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`glass-card rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 ${hour.is_closed ? "opacity-60" : ""}`}
          >
            <div className="flex items-center gap-3 sm:w-40">
              <Clock className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="text-cream-100 font-medium">{dayNames[hour.day_of_week]}</span>
            </div>

            <label className="flex items-center gap-2 cursor-pointer sm:w-32">
              <input
                type="checkbox"
                checked={hour.is_closed}
                onChange={(e) => updateHour(hour.day_of_week, "is_closed", e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <span className="text-dark-300 text-sm">Fermé</span>
            </label>

            {!hour.is_closed && (
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <label className="text-dark-400 text-xs">De</label>
                  <input
                    type="time"
                    value={hour.open_time}
                    onChange={(e) => updateHour(hour.day_of_week, "open_time", e.target.value)}
                    className="px-3 py-2 rounded-lg input-premium text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-dark-400 text-xs">À</label>
                  <input
                    type="time"
                    value={hour.close_time}
                    onChange={(e) => updateHour(hour.day_of_week, "close_time", e.target.value)}
                    className="px-3 py-2 rounded-lg input-premium text-sm"
                  />
                </div>
              </div>
            )}

            {hour.is_closed && (
              <div className="flex-1">
                <span className="text-red-400/60 text-sm italic">Fermé ce jour</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
