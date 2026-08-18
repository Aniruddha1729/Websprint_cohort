import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

// TODO: Replace with ThemeProvider when fully implemented
const useTheme = () => ({ theme: "dark", toggleTheme: () => {} });

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/40 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold font-secondary">C</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Cohort
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <Link
            to="/login"
            className="flex items-center px-4 py-2 text-[13px] font-semibold bg-secondary/70 border border-border rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Sign in with Google
          </Link>
        </div>
      </div>
    </nav>
  );
}
