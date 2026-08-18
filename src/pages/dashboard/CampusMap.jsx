import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation, Compass, Layers, ZoomIn, ZoomOut, Sparkles, Building, Info, User } from "lucide-react";

export default function CampusMap() {
  const mapContainerRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapZoom, setMapZoom] = useState(16);

  // PCCOE Campus Coordinates & Landmarks
  const pccoeLocation = { lat: 18.6517, lng: 73.7615, name: "PCCOE Main Building" };

  const campusMarkers = [
    {
      id: "main-building",
      name: "PCCOE Main Admin Building",
      category: "Academic",
      lat: 18.6517,
      lng: 73.7615,
      type: "blue",
      avatar: "🏛️",
      user: "Director's Office & Admin",
      description: "Central administrative building, principal office, and conference hall.",
    },
    {
      id: "computer-dept",
      name: "Computer & IT Building",
      category: "Department",
      lat: 18.6522,
      lng: 73.7619,
      type: "blue",
      avatar: "💻",
      user: "Shravan Kolhe (@shravan24)",
      description: "Computer Engineering & IT labs, Nvidia AI Workstation, and GDG Hub.",
    },
    {
      id: "mechanical-dept",
      name: "Mechanical & Civil Complex",
      category: "Department",
      lat: 18.6511,
      lng: 73.7610,
      type: "purple",
      avatar: "⚙️",
      user: "Felina Mathew (@felina22)",
      description: "Robotics workshop, CAD/CAM centers, and fluid mechanics lab.",
    },
    {
      id: "library",
      name: "Central Library & Reading Hall",
      category: "Facility",
      lat: 18.6525,
      lng: 73.7612,
      type: "blue",
      avatar: "📚",
      user: "Arnav Telangi (@arnav24)",
      description: "3-floor central library with 50,000+ books & digital repository access.",
    },
    {
      id: "canteen",
      name: "PCCOE Central Canteen & Food Court",
      category: "Amenity",
      lat: 18.6509,
      lng: 73.7621,
      type: "purple",
      avatar: "☕",
      user: "Gaurav Patil (@gaurav25)",
      description: "Main student food court, Nescafe outlet, and hangout zone.",
    },
    {
      id: "sports-ground",
      name: "PCCOE Sports Ground & Gymkhana",
      category: "Sports",
      lat: 18.6504,
      lng: 73.7608,
      type: "blue",
      avatar: "⚽",
      user: "Chirag Ferwani (@chirag)",
      description: "Football turf, basketball courts, and indoor gymkhana complex.",
    },
    {
      id: "hostel-block",
      name: "Boys & Girls Hostel Blocks",
      category: "Residential",
      lat: 18.6530,
      lng: 73.7625,
      type: "purple",
      avatar: "🏢",
      user: "Aditi Joshi (@aditi23)",
      description: "Campus residential quarters for outstation students.",
    },
  ];

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-12 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. MAIN MAP HEADER (~105px Height)         */}
      {/* ========================================== */}
      <div className="w-full h-[80px] flex flex-col justify-center">
        <h1 className="font-heading text-[22px] font-bold text-foreground tracking-tight">
          c/maps
        </h1>
        <p className="text-sm md:text-[18px] text-muted-foreground font-normal mt-0.5">
          Interactive internal campus map for PCCOE.
        </p>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-6" />

      {/* ========================================== */}
      {/* 2. MAP AREA CONTAINER (FillsCenter Area)   */}
      {/* ========================================== */}
      <div className="w-full h-[calc(100vh-230px)] min-h-[520px] rounded-2xl bg-card border border-border/80 shadow-md relative overflow-hidden flex flex-col">
        {/* Vector Interactive Campus Map Viewport */}
        <div
          ref={mapContainerRef}
          className="w-full h-full relative bg-[#e8ecef] dark:bg-[#1a202c] overflow-hidden flex items-center justify-center"
        >
          {/* SVG Campus Grid / Road Network Map Background */}
          <svg className="absolute inset-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border/60" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Campus Road Paths */}
            <path d="M 100 200 Q 300 150 600 250 T 1100 300" fill="none" stroke="#cbd5e1" strokeWidth="24" className="dark:stroke-slate-700" />
            <path d="M 100 200 Q 300 150 600 250 T 1100 300" fill="none" stroke="#ffffff" strokeWidth="16" className="dark:stroke-slate-800" />

            <path d="M 400 50 L 400 700" fill="none" stroke="#cbd5e1" strokeWidth="20" className="dark:stroke-slate-700" />
            <path d="M 400 50 L 400 700" fill="none" stroke="#ffffff" strokeWidth="12" className="dark:stroke-slate-800" />

            <path d="M 700 80 L 700 650" fill="none" stroke="#cbd5e1" strokeWidth="18" className="dark:stroke-slate-700" />
            <path d="M 700 80 L 700 650" fill="none" stroke="#ffffff" strokeWidth="10" className="dark:stroke-slate-800" />

            {/* Green Lawn & Turf Blocks */}
            <rect x="220" y="320" width="140" height="200" rx="16" fill="#86efac" opacity="0.3" />
            <rect x="460" y="100" width="180" height="120" rx="16" fill="#86efac" opacity="0.3" />
            <rect x="750" y="280" width="220" height="180" rx="16" fill="#86efac" opacity="0.25" />

            {/* Building Outlines */}
            <rect x="180" y="120" width="120" height="140" rx="12" fill="#cbd5e1" className="dark:fill-slate-700" opacity="0.7" />
            <rect x="440" y="280" width="160" height="150" rx="12" fill="#cbd5e1" className="dark:fill-slate-700" opacity="0.7" />
            <rect x="730" y="120" width="140" height="110" rx="12" fill="#cbd5e1" className="dark:fill-slate-700" opacity="0.7" />
          </svg>

          {/* Center Map Label Overlay */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-card/90 border border-border/80 shadow-md backdrop-blur-md z-20 flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <p className="text-xs font-bold text-foreground">PCCOE Campus View</p>
              <p className="text-[10px] text-muted-foreground">Akurdi, Pradhikaran, Pune</p>
            </div>
          </div>

          {/* Map Controls (Top Right) */}
          <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
            <button
              onClick={() => setMapZoom((prev) => Math.min(prev + 1, 20))}
              className="w-10 h-10 rounded-xl bg-card/90 border border-border/80 shadow-md backdrop-blur-md flex items-center justify-center text-foreground hover:bg-secondary transition-all cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => setMapZoom((prev) => Math.max(prev - 1, 10))}
              className="w-10 h-10 rounded-xl bg-card/90 border border-border/80 shadow-md backdrop-blur-md flex items-center justify-center text-foreground hover:bg-secondary transition-all cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => alert("Re-centered on PCCOE Main Building")}
              className="w-10 h-10 rounded-xl bg-card/90 border border-border/80 shadow-md backdrop-blur-md flex items-center justify-center text-primary hover:bg-secondary transition-all cursor-pointer"
              title="Recenter Map"
            >
              <Compass className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* ======================================== */}
          {/* MAP MARKERS CLUSTERED AROUND PCCOE       */}
          {/* ======================================== */}
          {/* Marker 1: Main Admin */}
          <div
            onClick={() => setSelectedMarker(campusMarkers[0])}
            className="absolute top-[32%] left-[42%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">🏛️</span>
              </div>
              <div className="w-3 h-3 bg-primary rotate-45 -mt-1.5 shadow-sm" />
              <div className="mt-1 px-2 py-0.5 rounded bg-card/90 text-[10px] font-bold text-foreground shadow border border-border whitespace-nowrap">
                PCCOE Admin
              </div>
            </div>
          </div>

          {/* Marker 2: Computer & IT */}
          <div
            onClick={() => setSelectedMarker(campusMarkers[1])}
            className="absolute top-[28%] left-[56%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">💻</span>
              </div>
              <div className="w-3 h-3 bg-blue-600 rotate-45 -mt-1.5 shadow-sm" />
              <div className="mt-1 px-2 py-0.5 rounded bg-card/90 text-[10px] font-bold text-foreground shadow border border-border whitespace-nowrap">
                Computer Dept
              </div>
            </div>
          </div>

          {/* Marker 3: Mechanical Complex (Purple) */}
          <div
            onClick={() => setSelectedMarker(campusMarkers[2])}
            className="absolute top-[52%] left-[32%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">⚙️</span>
              </div>
              <div className="w-3 h-3 bg-purple-600 rotate-45 -mt-1.5 shadow-sm" />
              <div className="mt-1 px-2 py-0.5 rounded bg-card/90 text-[10px] font-bold text-foreground shadow border border-border whitespace-nowrap">
                Mechanical Complex
              </div>
            </div>
          </div>

          {/* Marker 4: Library */}
          <div
            onClick={() => setSelectedMarker(campusMarkers[3])}
            className="absolute top-[22%] left-[26%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">📚</span>
              </div>
              <div className="w-3 h-3 bg-blue-500 rotate-45 -mt-1.5 shadow-sm" />
              <div className="mt-1 px-2 py-0.5 rounded bg-card/90 text-[10px] font-bold text-foreground shadow border border-border whitespace-nowrap">
                Central Library
              </div>
            </div>
          </div>

          {/* Marker 5: Canteen (Purple) */}
          <div
            onClick={() => setSelectedMarker(campusMarkers[4])}
            className="absolute top-[65%] left-[62%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">☕</span>
              </div>
              <div className="w-3 h-3 bg-purple-600 rotate-45 -mt-1.5 shadow-sm" />
              <div className="mt-1 px-2 py-0.5 rounded bg-card/90 text-[10px] font-bold text-foreground shadow border border-border whitespace-nowrap">
                Food Court
              </div>
            </div>
          </div>

          {/* Marker 6: Sports Ground */}
          <div
            onClick={() => setSelectedMarker(campusMarkers[5])}
            className="absolute top-[68%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">⚽</span>
              </div>
              <div className="w-3 h-3 bg-emerald-600 rotate-45 -mt-1.5 shadow-sm" />
              <div className="mt-1 px-2 py-0.5 rounded bg-card/90 text-[10px] font-bold text-foreground shadow border border-border whitespace-nowrap">
                Sports Turf
              </div>
            </div>
          </div>

          {/* Marker 7: Hostel Blocks (Purple) */}
          <div
            onClick={() => setSelectedMarker(campusMarkers[6])}
            className="absolute top-[18%] left-[78%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">🏢</span>
              </div>
              <div className="w-3 h-3 bg-purple-600 rotate-45 -mt-1.5 shadow-sm" />
              <div className="mt-1 px-2 py-0.5 rounded bg-card/90 text-[10px] font-bold text-foreground shadow border border-border whitespace-nowrap">
                Hostel Complex
              </div>
            </div>
          </div>

          {/* Active Selected Location Popup Card (Bottom Left Overlay) */}
          {selectedMarker && (
            <div className="absolute bottom-6 left-6 max-w-sm p-4 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-md z-30 animate-in fade-in slide-in-from-bottom-3 duration-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
                    {selectedMarker.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{selectedMarker.name}</h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {selectedMarker.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMarker(null)}
                  className="p-1 rounded-lg text-muted-foreground hover:bg-secondary text-xs"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {selectedMarker.description}
              </p>
              <div className="mt-3 pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground font-medium">
                <span className="text-primary font-semibold">Active: {selectedMarker.user}</span>
                <button
                  onClick={() => alert(`Directions to ${selectedMarker.name} calculated.`)}
                  className="px-3 py-1 rounded-lg bg-primary text-primary-foreground font-semibold text-[11px] hover:opacity-90 transition-all cursor-pointer"
                >
                  Get Directions
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. FLOATING ASSISTANT BUTTON               */}
      {/* ========================================== */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}