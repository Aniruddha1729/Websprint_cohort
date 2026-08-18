import { Link } from "react-router-dom";
import { Code, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-secondary">C</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                Cohort PCCOE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Built with modern technologies including React, Tailwind CSS, and more.
              The official student platform for Pimpri Chinchwad College of Engineering.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-foreground">Product</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/dashboard/connect" className="hover:text-primary transition-colors">Connect</Link></li>
              <li><Link to="/dashboard/map" className="hover:text-primary transition-colors">Campus Maps</Link></li>
              <li><Link to="/dashboard/profile" className="hover:text-primary transition-colors">Student Profile</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-foreground">Explore</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link to="/dashboard/communities" className="hover:text-primary transition-colors">Communities</Link></li>
              <li><Link to="/dashboard/network" className="hover:text-primary transition-colors">Friends</Link></li>
              <li><Link to="/dashboard/xd" className="hover:text-primary transition-colors">XD Board</Link></li>
              <li><Link to="/dashboard/calendar" className="hover:text-primary transition-colors">Calendar</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/chiragferwani" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Code className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="mailto:chiragferwani@gmail.com" className="hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <span>&copy; {new Date().getFullYear()} Cohort PCCOE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
