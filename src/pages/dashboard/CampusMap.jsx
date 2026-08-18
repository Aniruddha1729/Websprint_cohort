import { useState } from "react";
import {
  MapPin,
  Navigation,
  Compass,
  Layers,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Building,
  Info,
  User,
  Globe,
  Camera,
  ExternalLink,
} from "lucide-react";

export default function CampusMap() {
  const [activeTab, setActiveTab] = useState("gmap-road"); // "gmap-road", "gmap-sat", "osm"
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Exact PCCOE Campus Coordinates (Akurdi, Pradhikaran, Pune)
  const pccoeCoords = { lat: 18.6517, lng: 73.7615 };

  const campusMarkers = [
    {
      id: "main-building",
      name: "PCCOE Main Admin Building",
      category: "Academic & Admin",
      lat: 18.6517,
      lng: 73.7615,
      avatar: "🏛️",
      user: "Director's Office & Admissions",
      description: "Central administrative building housing the Principal's Office, Conference Hall, T&P Cell, and Registrar Office.",
    },
    {
      id: "computer-dept",
      name: "Computer & IT Engineering Building",
      category: "Department",
      lat: 18.6522,
      lng: 73.7619,
      avatar: "💻",
      user: "Shravan Kolhe (@shravan24)",
      description: "Computer & IT Department labs, Nvidia AI Workstation, High-Performance Computing Lab, and GDGC Student Hub.",
    },
    {
      id: "mechanical-dept",
      name: "Mechanical & Civil Engineering Complex",
      category: "Department",
      lat: 18.6511,
      lng: 73.761,
      avatar: "⚙️",
      user: "Felina Mathew (@felina22)",
      description: "Robotics workshop, SAE BAJA garage, CAD/CAM centers, IC Engines lab, and civil testing facilities.",
    },
    {
      id: "library",
      name: "Central Library & Digital Reading Hall",
      category: "Academic Facility",
      lat: 18.6525,
      lng: 73.7612,
      avatar: "📚",
      user: "Arnav Telangi (@arnav24)",
      description: "3-story central library equipped with 50,000+ volumes, IEEE digital portal, and 24/7 exam reading hall.",
    },
    {
      id: "canteen",
      name: "PCCOE Central Canteen & Food Court",
      category: "Amenities",
      lat: 18.6509,
      lng: 73.7621,
      avatar: "☕",
      user: "Gaurav Patil (@gaurav25)",
      description: "Student food court, Nescafe express counter, South Indian breakfast hub, and outdoor seating zone.",
    },
    {
      id: "sports-ground",
      name: "Sports Ground & Gymkhana Complex",
      category: "Sports & Fitness",
      lat: 18.6504,
      lng: 73.7608,
      avatar: "⚽",
      user: "Chirag Ferwani (@chirag)",
      description: "Full football turf, basketball court, badminton arena, table tennis hall, and fitness gym.",
    },
    {
      id: "hostel-block",
      name: "Boys & Girls Campus Hostels",
      category: "Residential",
      lat: 18.653,
      lng: 73.7625,
      avatar: "🏢",
      user: "Aditi Joshi (@aditi23)",
      description: "Secure campus residential quarters for outstation engineering students with mess dining halls.",
    },
  ];

  // Embed URLs for Google Maps
  const gmapRoadUrl = `https://maps.google.com/maps?q=${pccoeCoords.lat},${pccoeCoords.lng}&hl=en&z=17&output=embed`;
  const gmapSatUrl = `https://maps.google.com/maps?q=${pccoeCoords.lat},${pccoeCoords.lng}&hl=en&t=k&z=18&output=embed`;
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=73.7570,18.6480,73.7660,18.6550&layer=mapnik&marker=${pccoeCoords.lat},${pccoeCoords.lng}`;

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-12 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. MAIN MAP HEADER (~105px Height)         */}
      {/* ========================================== */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-[22px] font-bold text-foreground tracking-tight">
              c/maps
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
              Live Map
            </span>
          </div>
          <p className="text-sm md:text-[16px] text-muted-foreground font-normal mt-0.5">
            Real satellite & interactive vector map of Pimpri Chinchwad College of Engineering (PCCOE, Akurdi).
          </p>
        </div>

        {/* Live Map Provider Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-card border border-border/80 shadow-xs shrink-0">
          <button
            onClick={() => setActiveTab("gmap-road")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "gmap-road"
                ? "bg-primary text-primary-foreground shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Google Roadmap</span>
          </button>

          <button
            onClick={() => setActiveTab("gmap-sat")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "gmap-sat"
                ? "bg-primary text-primary-foreground shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Satellite View</span>
          </button>

          <button
            onClick={() => setActiveTab("osm")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "osm"
                ? "bg-primary text-primary-foreground shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>OpenStreetMap</span>
          </button>
        </div>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-6" />

      {/* ========================================== */}
      {/* 2. MAP AREA CONTAINER                      */}
      {/* ========================================== */}
      <div className="w-full h-[calc(100vh-230px)] min-h-[540px] rounded-2xl bg-card border border-border/80 shadow-lg relative overflow-hidden flex flex-col">
        
        {/* Top Info Banner Overlay */}
        <div className="absolute top-4 left-4 px-4 py-2.5 rounded-xl bg-card/90 border border-border/80 shadow-md backdrop-blur-md z-20 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <div>
            <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <span>Pimpri Chinchwad College of Engineering</span>
              <a
                href="https://maps.google.com/?q=Pimpri+Chinchwad+College+of+Engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-0.5"
                title="Open in Google Maps App"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="text-[11px] text-muted-foreground">
              Sector 26, Pradhikaran, Nigdi, Akurdi, Pune, Maharashtra 411044
            </p>
          </div>
        </div>

        {/* Quick Landmark Quick Selector Buttons (Top Right Overlay) */}
        <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-2 bg-card/90 border border-border/80 p-1.5 rounded-xl backdrop-blur-md shadow-md">
          {campusMarkers.slice(0, 5).map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMarker(m)}
              className="px-2.5 py-1 rounded-lg bg-secondary/80 hover:bg-primary hover:text-white text-[11px] font-semibold text-foreground transition-all cursor-pointer flex items-center gap-1 shrink-0"
            >
              <span>{m.avatar}</span>
              <span>{m.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Live Real Map Views */}
        <div className="w-full h-full relative bg-secondary/40">
          {activeTab === "gmap-road" && (
            <iframe
              title="PCCOE Google Maps Roadmap"
              src={gmapRoadUrl}
              className="w-full h-full border-0 grayscale-0 dark:brightness-90 dark:contrast-110"
              loading="lazy"
              allowFullScreen
            />
          )}

          {activeTab === "gmap-sat" && (
            <iframe
              title="PCCOE Google Maps Satellite"
              src={gmapSatUrl}
              className="w-full h-full border-0 brightness-100"
              loading="lazy"
              allowFullScreen
            />
          )}

          {activeTab === "osm" && (
            <iframe
              title="PCCOE OpenStreetMap View"
              src={osmUrl}
              className="w-full h-full border-0 dark:invert-[0.9] dark:hue-rotate-180"
              loading="lazy"
            />
          )}

          {/* Active Selected Location Details Card (Bottom Overlay) */}
          {selectedMarker && (
            <div className="absolute bottom-6 left-6 max-w-md p-5 rounded-2xl bg-card/95 border border-border shadow-2xl backdrop-blur-md z-30 animate-in fade-in slide-in-from-bottom-3 duration-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0 shadow-inner">
                    {selectedMarker.avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground leading-snug">
                      {selectedMarker.name}
                    </h4>
                    <span className="inline-block mt-0.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {selectedMarker.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMarker(null)}
                  className="w-7 h-7 rounded-full bg-secondary text-muted-foreground hover:text-foreground flex items-center justify-center text-xs font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {selectedMarker.description}
              </p>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <div className="flex items-center gap-1.5 text-foreground font-semibold">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span>{selectedMarker.user}</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${selectedMarker.lat},${selectedMarker.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}