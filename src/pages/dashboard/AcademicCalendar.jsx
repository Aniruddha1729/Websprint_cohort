import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar as CalendarIcon,
  Plus,
  Globe,
  ExternalLink,
  Layers,
} from "lucide-react";

export default function AcademicCalendar() {
  const [selectedDay, setSelectedDay] = useState(18);
  const [currentMonth, setCurrentMonth] = useState("August 2026");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "gcal"

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // August 2026 Calendar Grid Days Structure
  const calendarDays = [
    // Row 1: July prev month dates + Aug 1
    { day: 26, isCurrentMonth: false },
    { day: 27, isCurrentMonth: false },
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },

    // Row 2: Aug 2 to Aug 8
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true, event: "Red Channel Examination", type: "exam" },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true, event: "Red Channel Result", type: "result" },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },

    // Row 3: Aug 9 to Aug 15
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true, event: "Independence Day", type: "holiday" },

    // Row 4: Aug 16 to Aug 22 (Aug 18 Selected)
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true, isSelected: true, event: "Anantya Hackathon", type: "event" },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },

    // Row 5: Aug 23 to Aug 29
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },

    // Row 6: Aug 30, 31 + Sept next month dates
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
    { day: 3, isCurrentMonth: false },
    { day: 4, isCurrentMonth: false },
    { day: 5, isCurrentMonth: false },
  ];

  // Official Live Google Calendar Embed URL (India / PCCOE Timezone Asia/Kolkata)
  const gcalEmbedUrl =
    "https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata";

  const handleSyncToGoogleCalendar = () => {
    // Find event on selected day or default
    const dayItem = calendarDays.find((d) => d.isCurrentMonth && d.day === selectedDay);
    const eventName = dayItem?.event || `PCCOE Event - Aug ${selectedDay}`;

    const formattedDay = selectedDay < 10 ? `0${selectedDay}` : selectedDay;
    const dateStr = `202608${formattedDay}`;

    const title = encodeURIComponent(eventName);
    const details = encodeURIComponent(
      `Official PCCOE Academic Event (${eventName}) on August ${selectedDay}, 2026. Synced from Cohort PCCOE Portal.`
    );
    const location = encodeURIComponent("Pimpri Chinchwad College of Engineering (PCCOE), Akurdi, Pune");
    const dates = `${dateStr}T090000Z/${dateStr}T170000Z`;

    const gcalAddUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(gcalAddUrl, "_blank");
  };

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-12 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. CENTER HEADER (~75-80px Height)         */}
      {/* ========================================== */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-[24px] font-bold text-foreground tracking-tight">
              /calendar
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Google Sync</span>
            </span>
          </div>
          <p className="text-sm md:text-[16px] text-muted-foreground font-normal mt-0.5">
            PCCOE academic events, exam schedules, and direct Google Calendar integration.
          </p>
        </div>

        {/* Action Buttons: Toggle Google Calendar View & Sync */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-card border border-border/80 shadow-xs">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>

            <button
              onClick={() => setViewMode("gcal")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === "gcal"
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Google Calendar Live</span>
            </button>
          </div>

          <button
            onClick={handleSyncToGoogleCalendar}
            className="h-10 px-4 rounded-xl bg-primary hover:opacity-90 text-primary-foreground text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            title={`Add August ${selectedDay} event to your real Google Calendar`}
          >
            <Plus className="w-4 h-4" />
            <span>+ Sync Aug {selectedDay} to GCal</span>
          </button>
        </div>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-6" />

      {/* ========================================== */}
      {/* 2. CALENDAR BODY (Grid / Google Calendar) */}
      {/* ========================================== */}
      {viewMode === "gcal" ? (
        <div className="w-full h-[calc(100vh-230px)] min-h-[550px] rounded-2xl bg-card border border-border/80 shadow-lg overflow-hidden relative">
          <iframe
            title="PCCOE Live Google Calendar Embed"
            src={gcalEmbedUrl}
            className="w-full h-full border-0 grayscale-0 dark:invert-[0.9] dark:hue-rotate-180"
            loading="lazy"
          />
        </div>
      ) : (
        <>
          {/* Month Header & Chevron Navigation */}
          <div className="w-full flex items-center justify-between mt-2 mb-6 px-1">
            <h2 className="font-heading text-[20px] font-bold text-foreground">
              {currentMonth}
            </h2>

            <div className="flex items-center gap-8">
              <button
                onClick={() => alert("Previous Month")}
                className="p-2 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => alert("Next Month")}
                className="p-2 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid Container */}
          <div className="w-full rounded-2xl bg-card border border-border/80 shadow-sm overflow-hidden flex flex-col">
            {/* Weekday Header Row */}
            <div className="grid grid-cols-7 border-b border-border/60 bg-secondary/50">
              {weekdays.map((day) => (
                <div
                  key={day}
                  className="py-3 text-center text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* 6 Calendar Rows */}
            <div className="grid grid-cols-7 auto-rows-[100px] md:auto-rows-[115px] divide-x divide-y divide-border/60">
              {calendarDays.map((item, index) => {
                const isSelected = item.isCurrentMonth && selectedDay === item.day;

                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (item.isCurrentMonth) setSelectedDay(item.day);
                    }}
                    className={`p-3 relative flex flex-col justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-card border-2 border-primary shadow-inner z-10"
                        : item.isCurrentMonth
                        ? "bg-card hover:bg-secondary/40"
                        : "bg-secondary/20 text-muted-foreground/40"
                    }`}
                  >
                    {/* Date Badge / Number */}
                    <div className="flex items-center justify-start">
                      {isSelected ? (
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center shadow-md">
                          {item.day}
                        </div>
                      ) : (
                        <span
                          className={`text-sm font-bold ${
                            item.isCurrentMonth ? "text-foreground" : "text-muted-foreground/40"
                          }`}
                        >
                          {item.day}
                        </span>
                      )}
                    </div>

                    {/* Event Label */}
                    {item.event && (
                      <div className="mt-1">
                        <span className="inline-block w-full px-2.5 py-1 rounded-lg bg-secondary border border-border/60 text-foreground text-[11px] font-semibold truncate shadow-sm">
                          {item.event}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}