import { useState } from "react";
import { X } from "lucide-react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export default function LoginModal({ isOpen, onClose }) {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    if (!agreed) {
      setError("Please agree to the Terms and Conditions first.");
      return;
    }
    setError("");
    
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
      navigate("/dashboard");
    } catch (err) {
      console.error("Firebase Google sign in error", err);
      setError("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-body">
      <div className="w-full max-w-[950px] h-[600px] rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex overflow-hidden relative">
        
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-slate-100/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-slate-200 text-slate-600 hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Panel: Artwork */}
        <div className="hidden md:block w-1/2 relative bg-black">
          <img 
            src="/login-art.png" 
            alt="Abstract 3D Figure" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
          />
        </div>

        {/* Right Panel: Login Form */}
        <div className="w-full md:w-1/2 bg-[#F8F9FA] flex flex-col items-center justify-center p-8 sm:p-14 relative">
          
          <div className="w-full max-w-[340px] flex flex-col items-center text-center space-y-6">
            
            <img src="/logo-final.png" alt="Cohort Logo" className="w-16 h-16 object-contain drop-shadow-sm" />
            
            <div className="space-y-4">
              <h1 className="font-heading text-[32px] font-extrabold text-[#111827] leading-[1.1] tracking-tight">
                WELCOME TO<br />COHORT
              </h1>
              <p className="text-[15px] text-[#4B5563] font-medium leading-[1.4] px-2">
                Connect, message, and innovate with your campus community
              </p>
            </div>

            {error && (
              <p className="text-red-500 text-xs font-semibold bg-red-50 border border-red-200 p-2.5 rounded-xl w-full">
                {error}
              </p>
            )}

            <div className="w-full pt-8 space-y-7">
              <label className="flex items-start gap-3.5 cursor-pointer group px-1">
                <div className="relative flex items-center justify-center pt-0.5">
                  <input 
                    type="checkbox" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="peer appearance-none w-[22px] h-[22px] border-[2.5px] border-[#CBD5E1] rounded-[6px] checked:bg-[#111827] checked:border-[#111827] transition-all cursor-pointer hover:border-[#94A3B8]"
                  />
                  <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[14px] text-[#475569] font-semibold text-left leading-[1.3]">
                  I agree to the <a href="/terms" className="text-[#0F172A] underline decoration-2 underline-offset-2 hover:text-[#2563EB] transition-colors">Terms and Conditions</a> and <a href="/privacy-policy" className="text-[#0F172A] underline decoration-2 underline-offset-2 hover:text-[#2563EB] transition-colors">Privacy Policy</a>
                </span>
              </label>

              <button
                onClick={handleGoogleSignIn}
                disabled={!agreed}
                className={`w-full h-[56px] flex items-center justify-center gap-3.5 rounded-full font-bold text-[16px] transition-all duration-300 ${
                  agreed 
                    ? "bg-[#111827] text-white hover:bg-black shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0" 
                    : "bg-[#D1D5DB] text-white cursor-not-allowed opacity-80"
                }`}
              >
                <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center p-[7px] shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <span>Sign in with Google</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
