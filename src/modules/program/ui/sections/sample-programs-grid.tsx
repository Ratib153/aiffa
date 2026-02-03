"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScheduleGrid({ sampleSchedule }: { sampleSchedule: any[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent server/client mismatch
  if (!mounted) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sampleSchedule.map((day: any) => (
        <Link
          key={`day-${day.day}`}   // ✅ stable key
          href={`/program/day-${String(day.day)}`} // ✅ normalized
          className="block"
        >
          <div
            className="bg-background/60 hover:bg-background/90 transition-all duration-300 rounded-xl p-6 border border-white/10 hover:border-primary/40 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {day.day}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-champagne">
                  Day {day.day} – {day.title}
                </h3>
                <p className="text-champagne/60 text-xs italic">
                  Focus: {day.focus}
                </p>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <p className="text-champagne/70 text-xs font-semibold mb-2">
                  Day
                </p>
                <ul className="space-y-1">
                  {day.dayActivities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-champagne/60"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-champagne/70 text-xs font-semibold mb-2">
                  Evening
                </p>
                <ul className="space-y-1">
                  {day.eveningActivities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-champagne/60"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
