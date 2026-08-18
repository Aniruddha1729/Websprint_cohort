import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { useTheme } from "./providers/ThemeProvider"; // TODO: Implement useTheme

const LIGHT_SPIDERMANS = [
  "/assets/light1.svg",
  "/assets/light2.svg",
  "/assets/light3.svg",
  "/assets/light4.svg",
  "/assets/light5.svg",
  "/assets/light6.svg",
];

const DARK_SPIDERMANS = [
  "/assets/dark1.svg",
  "/assets/dark2.png",
  "/assets/dark3.svg",
  "/assets/dark4.svg",
  "/assets/dark5.png",
  "/assets/dark6.png",
];

export default function SpidermanOverlay() {
  // const { theme } = useTheme();
  const theme = "dark";
  const location = useLocation();
  const [spideys, setSpideys] = useState([]);
  
  const currentImages = useMemo(() => {
    return theme === "dark" ? DARK_SPIDERMANS : LIGHT_SPIDERMANS;
  }, [theme]);

  useEffect(() => {
    const config = [
      { top: "12px", left: "180px" },
      { top: "12px", right: "120px" },
      { top: "35%", right: "16px" },
      { bottom: "24px", right: "140px" },
      { top: "52%", left: "85px" },
      { bottom: "80px", left: "100px" },
    ];

    const mapped = config.map((pos, index) => {
      const scale = 0.85;
      const rotation = (index % 2 === 0 ? 1 : -1) * (10 + index * 4);
      const opacity = 0.88;
      const flipX = index % 2 === 1;
      const animationDelay = `${(index * 0.6).toFixed(1)}s`;

      return {
        id: index,
        srcIndex: index,
        ...pos,
        scale,
        rotation,
        opacity,
        flipX,
        animationDelay,
      };
    });

    setSpideys(mapped);
  }, [location.pathname, theme, currentImages]);

  return (
    <div className="spiderman-overlay-container pointer-events-none fixed inset-0 z-20 overflow-hidden select-none">
      <style>
        {`
          @keyframes spideyFloat6 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          .spidey-anim-6 {
            animation: spideyFloat6 5s ease-in-out infinite;
          }
        `}
      </style>
      {spideys.map((spidey) => (
        <div
          key={spidey.id}
          className="absolute pointer-events-none select-none spidey-anim-6 transition-all duration-500"
          style={{
            top: spidey.top,
            bottom: spidey.bottom,
            left: spidey.left,
            right: spidey.right,
            opacity: spidey.opacity,
            zIndex: 20,
            animationDelay: spidey.animationDelay,
            transform: `scale(${spidey.scale}) rotate(${spidey.rotation}deg) ${
              spidey.flipX ? "scaleX(-1)" : ""
            }`,
          }}
        >
          {/* Note: Actual image assets would need to be downloaded from the live site */}
          <img
            src={currentImages[spidey.srcIndex]}
            alt={`Spider-Man ${spidey.srcIndex + 1}`}
            className="w-16 h-16 md:w-22 md:h-22 object-contain filter drop-shadow-md select-none pointer-events-none"
            onError={(e) => {
               // Hide broken image icon if assets are missing
               e.target.style.display = 'none';
            }}
          />
        </div>
      ))}
    </div>
  );
}
