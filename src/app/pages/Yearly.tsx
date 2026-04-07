import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const yearlyHeroImage = "https://image2url.com/r2/default/images/1775587225732-658ae54c-d830-408b-b023-e60cc5ddfc53.avif";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayHeaders = ["S", "M", "T", "W", "T", "F", "S"];

function getMonthGrid(year: number, monthIndex: number) {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const cells: Array<number | null> = Array.from({ length: firstDay }, () => null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }

  while (cells.length < 42) {
    cells.push(null);
  }

  return cells;
}

export default function Yearly() {
  const [year, setYear] = useState(new Date().getFullYear());
  const today = new Date();

  const handlePrevYear = () => {
    setYear((previous) => previous - 1);
  };

  const handleNextYear = () => {
    setYear((previous) => previous + 1);
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8 lg:p-12 pb-24 lg:pb-12">
      <motion.div
        className="max-w-[1200px] mx-auto space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className="relative w-full aspect-[21/8] rounded-2xl overflow-hidden shadow-[0px_24px_60px_-20px_rgba(0,0,0,0.22)]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.45 }}
        >
          <img
            src={yearlyHeroImage}
            alt="Yearly calendar hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(45,45,42,0.35)] via-[rgba(45,45,42,0.12)] to-transparent" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-block bg-[rgba(199,199,189,0.15)] px-3 py-1 rounded text-xs uppercase tracking-widest text-[#76786f] font-bold mb-3">
              The Year Atlas
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#2d2d2a] leading-none">{year}</h1>
            <p className="text-xs uppercase tracking-[3px] text-[#a67c52] font-bold mt-4">
              The Year of Intentional Slowing
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm text-[#76786f] max-w-[320px]">
              A curated record of ephemeral moments, seasonal transitions, and quiet persistence of time.
            </p>

            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={handlePrevYear}
                className="w-10 h-10 rounded-full border border-[rgba(186,160,119,0.28)] bg-[rgba(250,243,231,0.72)] text-[#2d2d2a] flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.08, backgroundColor: "rgba(244,231,206,0.84)" }}
                whileTap={{ scale: 0.94 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>

              <span className="text-sm font-bold text-[#76786f] min-w-[84px] text-center">{year}</span>

              <motion.button
                type="button"
                onClick={handleNextYear}
                className="w-10 h-10 rounded-full border border-[rgba(186,160,119,0.28)] bg-[rgba(250,243,231,0.72)] text-[#2d2d2a] flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.08, backgroundColor: "rgba(244,231,206,0.84)" }}
                whileTap={{ scale: 0.94 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div
          key={year}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {monthNames.map((month, monthIndex) => {
            const monthNumber = `${monthIndex + 1}`.padStart(2, "0");
            const grid = getMonthGrid(year, monthIndex);

            return (
              <motion.div
                key={month}
                className="bg-white rounded-xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.06)] p-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: monthIndex * 0.03 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#2d2d2a]">{month}</h3>
                  <span className="text-xs uppercase tracking-widest text-[rgba(118,120,111,0.5)] font-bold">
                    {monthNumber}
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-y-2 mb-2">
                  {dayHeaders.map((day) => (
                    <div key={day} className="text-[10px] text-[#76786f] font-bold text-center">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-y-2">
                  {grid.map((day, index) => {
                    const isToday =
                      day !== null &&
                      year === today.getFullYear() &&
                      monthIndex === today.getMonth() &&
                      day === today.getDate();

                    return (
                      <div
                        key={`${month}-${index}`}
                        className={`text-[10px] text-center leading-5 h-5 w-5 mx-auto rounded-full ${
                          day === null
                            ? "text-transparent"
                            : isToday
                            ? "border border-[#a67c52] text-[#2d2d2a]"
                            : "text-[#2d2d2a]"
                        }`}
                      >
                        {day ?? "0"}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
