import { Link, useNavigate } from "react-router-dom";
import { Users, MessageSquare, Map, Calendar, Shield, Layout, Globe, Activity } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LiquidEther from "../components/ui/LiquidEther";
import CurvedLoop from "../components/ui/CurvedLoop";
import { useAuth } from "../components/providers/AuthProvider";

export default function Landing() {
  const { bypassLogin } = useAuth();
  const navigate = useNavigate();

  const handleBypass = () => {
    bypassLogin("student");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full border-b border-border/50">
        <div style={{ width: '100%', height: 600, position: 'relative' }} className="hidden md:block absolute inset-0 z-0">
          {/* React Bits LiquidEther - Desktop Background */}
          <LiquidEther
            colors={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        
        {/* Mobile Background Fallback */}
        <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-br from-background via-primary/5 to-secondary/20"></div>

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="animated-gradient-text px-4 py-1.5 mb-8 bg-secondary/50 border border-border text-sm font-semibold shadow-sm backdrop-blur-md">
            ✨ Welcome to the official PCCOE Social Platform
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6 drop-shadow-sm">
            A Social Platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PCCOE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed backdrop-blur-sm bg-background/30 p-4 rounded-2xl border border-background/20">
            Aggregate discussions, campus navigation, and encrypted messaging in real time. 
            Monitor events and track opportunities—all without juggling multiple logins.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleBypass}
              className="px-8 py-3.5 rounded-xl bg-foreground text-background font-semibold text-[15px] hover:opacity-90 shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer"
            >
              Get Started
            </button>
            <a href="#features" className="px-6 py-3.5 rounded-xl bg-background/70 border border-border text-foreground font-semibold text-[15px] hover:bg-secondary backdrop-blur-md transition-all active:scale-95">
              Explore platform
            </a>
          </div>

          <div className="mt-16 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/50 border border-border backdrop-blur-md shadow-sm">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </div>
            <span className="text-sm font-medium">Updating in realtime</span>
            <div className="w-px h-4 bg-border mx-2"></div>
            <span className="text-sm font-bold">10,047</span>
            <span className="text-sm text-muted-foreground">Total Project Views</span>
          </div>
        </div>
      </section>

      {/* Communities Marquee Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground/80">Connecting Communities</h2>
        </div>
        <CurvedLoop 
          marqueeText="LFDT ✦ IOT Club ✦ Geeks For Geeks ✦ AIMSA ✦ ISR ✦ NSS ✦ Art Circle ✦ OWASP ✦ GDGC ✦ "
          speed={2}
          curveAmount={300}
          direction="left"
          interactive={true}
          className="text-primary/60"
        />
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Explore Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to navigate campus life, connect with peers, and build your professional network.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-secondary/50 border border-border">
            <h2 className="font-heading text-3xl font-bold mb-6">About Cohort PCCOE</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Cohort is the official student-built platform designed specifically for the Pimpri Chinchwad College of Engineering community. It bridges the gap between various technical groups (OWASP, GDGC, ACM, GFG) and creative clubs (Art Circle, NSS, ISR), creating a unified campus experience.
              </p>
              <p>
                The platform features end-to-end encrypted messaging for secure communication, an anonymous XD exchange board for open discussions, an interactive 3D campus map powered by TomTom SDK, and a globally synced academic calendar. Students can build their professional profiles and showcase achievements directly on their personalized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const features = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Home Feed",
    description: "Personalized feed of posts, announcements, and discussions from the campus."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Communities",
    description: "Discover and join over 30+ active student clubs and organizations."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Friends",
    description: "Build your campus network and view real-time activity of your peers."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Connect",
    description: "Real-time, end-to-end encrypted messaging for one-on-one and group chats."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "XD (Exchange)",
    description: "An anonymous exchange board to protect user identity and promote open talk."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Campus Maps",
    description: "Interactive 3D map powered by TomTom SDK for easy campus navigation."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Academic Calendar",
    description: "Stay up-to-date with a seamlessly syncing official academic schedule."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Student Profile",
    description: "Showcase your achievement profiles and build a visible portfolio."
  }
];