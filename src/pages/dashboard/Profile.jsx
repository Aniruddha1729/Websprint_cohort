import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Pencil,
  MessageSquare,
  Mail,
  LogOut,
  Camera,
  Users,
  UserCheck,
  UserPlus,
  Zap,
  CheckCircle2,
  Sparkles,
  Share2,
  RefreshCw,
  X,
  Check,
  Building,
  GraduationCap,
  Globe,
  Heart,
} from "lucide-react";
import { useAuth } from "../../components/providers/AuthProvider";
import { userProfiles } from "../../data/userProfiles";
import Silk from "../../components/ui/Silk";

function LinkedinIcon(props) {
  return (
    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"/>
    </svg>
  );
}

export default function Profile() {
  const { username } = useParams();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("posts");
  const [isFollowing, setIsFollowing] = useState(false);

  const avatarInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  // Normalize route username parameter or default to current student
  const targetUsername = username ? username.toLowerCase() : "shubhang24";
  const defaultProfile = userProfiles[targetUsername] || {
    name: targetUsername,
    username: targetUsername,
    role: "PCCOE Student",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    banner: null,
    bio: "Student @ Pimpri Chinchwad College of Engineering (PCCOE), Pune.",
    department: "Engineering Student",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    stats: { communities: 4, followers: 42, following: 18, flex: 3 },
    isCurrentUser: false,
    posts: [],
  };

  const isCurrentUser = targetUsername === "shubhang24" || targetUsername === "046_shuhbang_doley";

  // Avatar & Banner states (stored locally for logged in user)
  const [avatar, setAvatar] = useState(() => {
    if (isCurrentUser) {
      return localStorage.getItem("cohort_user_avatar") || user?.avatar || defaultProfile.avatar;
    }
    return defaultProfile.avatar;
  });

  useEffect(() => {
    if (isCurrentUser && user?.avatar) {
      const savedAvatar = localStorage.getItem("cohort_user_avatar");
      if (!savedAvatar) {
        setAvatar(user.avatar);
      }
    }
  }, [user, isCurrentUser]);

  const [banner, setBanner] = useState(() => {
    if (isCurrentUser) {
      return localStorage.getItem("cohort_user_banner") || defaultProfile.banner;
    }
    return defaultProfile.banner;
  });

  // Profile Data state (stored locally for logged in user)
  const [profileData, setProfileData] = useState(() => {
    if (isCurrentUser) {
      const saved = localStorage.getItem("cohort_user_profile_data");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {}
      }
    }
    return {
      name: defaultProfile.name,
      username: defaultProfile.username,
      bio: defaultProfile.bio,
      department: defaultProfile.department,
      linkedin: defaultProfile.linkedin,
      github: defaultProfile.github,
    };
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState(profileData);

  useEffect(() => {
    // When username parameter changes, update state to match target user
    const found = userProfiles[targetUsername] || defaultProfile;
    if (isCurrentUser) {
      const saved = localStorage.getItem("cohort_user_profile_data");
      if (saved) {
        try {
          setProfileData(JSON.parse(saved));
        } catch (e) {
          setProfileData({
            name: found.name,
            username: found.username,
            bio: found.bio,
            department: found.department,
            linkedin: found.linkedin,
            github: found.github,
          });
        }
      } else {
        setProfileData({
          name: found.name,
          username: found.username,
          bio: found.bio,
          department: found.department,
          linkedin: found.linkedin,
          github: found.github,
        });
      }
      setAvatar(localStorage.getItem("cohort_user_avatar") || found.avatar);
      setBanner(localStorage.getItem("cohort_user_banner") || found.banner);
    } else {
      setProfileData({
        name: found.name,
        username: found.username,
        bio: found.bio,
        department: found.department,
        linkedin: found.linkedin,
        github: found.github,
      });
      setAvatar(found.avatar);
      setBanner(found.banner);
    }
  }, [username, targetUsername]);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setAvatar(base64String);
        if (isCurrentUser) {
          localStorage.setItem("cohort_user_avatar", base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Banner image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setBanner(base64String);
        if (isCurrentUser) {
          localStorage.setItem("cohort_user_banner", base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetAvatar = () => {
    setAvatar(defaultProfile.avatar);
    if (isCurrentUser) {
      localStorage.removeItem("cohort_user_avatar");
    }
  };

  const resetBanner = () => {
    setBanner(defaultProfile.banner);
    if (isCurrentUser) {
      localStorage.removeItem("cohort_user_banner");
    }
  };

  const handleOpenEditModal = () => {
    let extractedBranch = "Computer Engineering";
    let extractedYear = "TE";

    if (profileData.department) {
      if (profileData.department.includes("Information")) extractedBranch = "Information Technology";
      else if (profileData.department.includes("Artificial") || profileData.department.includes("AI")) extractedBranch = "Artificial Intelligence & Data Science (AI&DS)";
      else if (profileData.department.includes("Electronics") || profileData.department.includes("ENTC")) extractedBranch = "Electronics & Telecommunication (ENTC)";
      else if (profileData.department.includes("Mechanical")) extractedBranch = "Mechanical Engineering";
      else if (profileData.department.includes("Civil")) extractedBranch = "Civil Engineering";
      else if (profileData.department.includes("Computer")) extractedBranch = "Computer Engineering";

      if (profileData.department.includes("FE")) extractedYear = "FE";
      else if (profileData.department.includes("SE")) extractedYear = "SE";
      else if (profileData.department.includes("TE")) extractedYear = "TE";
      else if (profileData.department.includes("BE")) extractedYear = "BE";
    }

    setEditForm({
      ...profileData,
      branch: extractedBranch,
      year: extractedYear,
    });
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfileData(editForm);
    if (isCurrentUser) {
      localStorage.setItem("cohort_user_profile_data", JSON.stringify(editForm));
    }
    setIsEditModalOpen(false);
  };

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  const stats = defaultProfile.stats || { communities: 5, followers: 0, following: 3, flex: 0 };
  const statCards = [
    {
      id: "communities",
      count: stats.communities,
      label: "COMMUNITIES",
      icon: "👥",
      color: "from-blue-500/10 to-indigo-500/10",
    },
    {
      id: "followers",
      count: isFollowing ? stats.followers + 1 : stats.followers,
      label: "FOLLOWERS",
      icon: "👥",
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: "following",
      count: stats.following,
      label: "FOLLOWING",
      icon: "🧩",
      color: "from-teal-500/10 to-emerald-500/10",
    },
    {
      id: "flex",
      count: stats.flex,
      label: "FLEX",
      icon: "🚩",
      color: "from-amber-500/10 to-orange-500/10",
    },
  ];

  return (
    <div className="w-full min-h-full pb-16 flex flex-col relative select-none bg-background">
      {/* Hidden File Inputs for Current User */}
      {isCurrentUser && (
        <>
          <input
            type="file"
            ref={avatarInputRef}
            onChange={handleAvatarUpload}
            accept="image/*"
            className="hidden"
          />
          <input
            type="file"
            ref={bannerInputRef}
            onChange={handleBannerUpload}
            accept="image/*"
            className="hidden"
          />
        </>
      )}

      {/* Decorative Accents */}
      <div className="absolute top-4 left-6 opacity-20 pointer-events-none text-xs font-mono z-30">
        ✦ ✨ ✦
      </div>

      {/* ========================================== */}
      {/* 1. PROFILE COVER / HERO BANNER (~260px)     */}
      {/* ========================================== */}
      <div className="w-full h-[260px] relative overflow-hidden bg-gradient-to-r from-pink-500/30 via-purple-700 to-blue-900 group">
        {banner ? (
          <img src={banner} alt="Profile Cover Banner" className="w-full h-full object-cover" />
        ) : (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Silk
              speed={5}
              scale={1}
              color="#b885e4"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
        )}

        {/* Change Banner Button (Only visible to current user) */}
        {isCurrentUser && (
          <div className="absolute top-6 left-8 flex items-center gap-2">
            <button
              onClick={() => bannerInputRef.current?.click()}
              className="px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md border border-white/20 transition-all cursor-pointer"
              title="Change Cover Banner"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Change Cover</span>
            </button>

            {banner && (
              <button
                onClick={resetBanner}
                className="px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
                title="Reset Banner"
              >
                Reset
              </button>
            )}
          </div>
        )}

        {/* Top-Right COHORT USER Pill Badge */}
        <div className="absolute top-6 right-8 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-2.5 shadow-md">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold font-secondary text-xs">
            C
          </div>
          <span className="text-xs font-bold tracking-wider text-white">
            {isCurrentUser ? "COHORT USER" : "PCCOE STUDENT"}
          </span>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. PROFILE IDENTITY AREA (Avatar + Info)    */}
      {/* ========================================== */}
      <div className="px-[2.5%] relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 -mt-16 mb-8">
        {/* Avatar & Username */}
        <div className="flex items-end gap-6">
          {/* Avatar Container (~150 x 145px) */}
          <div className="relative group shrink-0">
            <div className="w-[150px] h-[145px] rounded-2xl bg-card border-4 border-card shadow-xl overflow-hidden relative">
              <img
                src={avatar}
                alt={`${profileData.name} Avatar`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Right Camera Upload Button (Only for current user) */}
            {isCurrentUser && (
              <button
                onClick={() => avatarInputRef.current?.click()}
                className="absolute -bottom-1.5 -right-1.5 w-11 h-11 rounded-full bg-primary border-2 border-card text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                title="Upload Profile Picture"
              >
                <Camera className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Username & Tag */}
          <div className="space-y-1 pb-2">
            <div className="flex items-center gap-3">
              <h1 className="font-heading text-3xl md:text-[38px] font-bold text-foreground tracking-tight leading-none">
                {profileData.name}
              </h1>

              {isCurrentUser && avatar !== defaultProfile.avatar && (
                <button
                  onClick={resetAvatar}
                  className="px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground hover:text-foreground text-[11px] font-medium border border-border flex items-center gap-1 cursor-pointer"
                  title="Reset to default avatar"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <p className="text-base text-muted-foreground font-medium">
              @{profileData.username}
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground font-normal">
              <GraduationCap className="w-3.5 h-3.5 text-primary" />
              <span>{profileData.department}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2.5 pb-2 shrink-0">
          {isCurrentUser ? (
            <>
              <button
                onClick={handleOpenEditModal}
                className="h-10 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center gap-2 shadow-md hover:opacity-90 transition-all cursor-pointer"
                title="Edit Profile"
              >
                <Pencil className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>

              <button
                onClick={handleSignOut}
                className="h-10 px-4 rounded-xl bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign out</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`h-10 px-5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                  isFollowing
                    ? "bg-secondary text-foreground border border-border hover:bg-secondary/80"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {isFollowing ? (
                  <>
                    <UserCheck className="w-4 h-4 text-emerald-500" />
                    <span>Following</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Follow</span>
                  </>
                )}
              </button>

              <button
                onClick={() => navigate("/dashboard/xd")}
                className="h-10 px-4 rounded-xl bg-card border border-border hover:bg-secondary text-foreground font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Message</span>
              </button>
            </>
          )}

          {profileData.linkedin && (
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border/80 hover:bg-secondary text-foreground flex items-center justify-center shadow-sm transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
          )}

          <button
            onClick={() => alert(`Profile link for @${profileData.username} copied!`)}
            className="w-10 h-10 rounded-xl bg-card border border-border/80 hover:bg-secondary text-foreground flex items-center justify-center shadow-sm transition-all cursor-pointer"
            title="Share Profile"
          >
            <Share2 className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* Profile Bio Card */}
      {profileData.bio && (
        <div className="px-[2.5%] mb-8">
          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs max-w-3xl">
            <p className="text-sm text-foreground leading-relaxed font-normal">
              {profileData.bio}
            </p>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* 3. STATISTICS CARDS GRID (4-Columns)        */}
      {/* ========================================== */}
      <div className="px-[2.5%] grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div
            key={card.id}
            className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                {card.label}
              </span>
              <p className="font-heading text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                {card.count}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 4. ACTIVITY & POSTS TABS                   */}
      {/* ========================================== */}
      <div className="px-[2.5%] space-y-6">
        <div className="flex items-center gap-6 border-b border-border/60 pb-3">
          <button
            onClick={() => setActiveTab("posts")}
            className={`text-base font-bold transition-colors cursor-pointer relative pb-3 -mb-3 ${
              activeTab === "posts"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Posts ({defaultProfile.posts?.length || 0})
          </button>

          <button
            onClick={() => setActiveTab("replies")}
            className={`text-base font-bold transition-colors cursor-pointer relative pb-3 -mb-3 ${
              activeTab === "replies"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Replies (0)
          </button>
        </div>

        {/* Tab Content List */}
        {defaultProfile.posts && defaultProfile.posts.length > 0 && activeTab === "posts" ? (
          <div className="space-y-4 max-w-3xl">
            {defaultProfile.posts.map((post) => (
              <div
                key={post.id}
                className="p-5 rounded-2xl bg-card border border-border/80 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={avatar}
                      alt={profileData.name}
                      className="w-9 h-9 rounded-full object-cover border border-border"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{profileData.name}</h4>
                      <span className="text-[11px] text-muted-foreground">@{profileData.username} • {post.time}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground leading-relaxed">
                  {post.text}
                </p>

                <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 text-rose-500 font-semibold">
                    <Heart className="w-4 h-4 fill-rose-500" />
                    <span>{post.likes}</span>
                  </div>
                  <span>•</span>
                  <span>PCCOE Campus Feed</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full py-16 px-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground text-2xl">
              ✍️
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              No {activeTab} yet
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              When {profileData.name} creates posts or replies to discussions across Cohort communities, they will appear here.
            </p>
          </div>
        )}
      </div>

      {/* ========================================== */}
      {/* 5. EDIT PROFILE MODAL                      */}
      {/* ========================================== */}
      {isEditModalOpen && isCurrentUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-3xl bg-card border border-border shadow-2xl p-6 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Pencil className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Edit Profile</h3>
                  <p className="text-xs text-muted-foreground">Saved locally in your browser storage</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="w-8 h-8 rounded-full bg-secondary text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  required
                  className="w-full h-11 px-3.5 rounded-xl bg-secondary/60 border border-border text-foreground text-sm font-medium focus:outline-none focus:border-primary"
                  placeholder="e.g. Shubhang Doley"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">Username</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-muted-foreground font-bold text-sm">@</span>
                  <input
                    type="text"
                    value={editForm.username}
                    onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                    required
                    className="w-full h-11 pl-8 pr-3.5 rounded-xl bg-secondary/60 border border-border text-foreground text-sm font-medium focus:outline-none focus:border-primary"
                    placeholder="shubhang24"
                  />
                </div>
              </div>

              {/* Branch & Year Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                    PCCOE Branch
                  </label>
                  <select
                    value={editForm.branch || "Computer Engineering"}
                    onChange={(e) => {
                      const selectedBranch = e.target.value;
                      const currentYear = editForm.year || "TE";
                      setEditForm({
                        ...editForm,
                        branch: selectedBranch,
                        department: `${selectedBranch} (${currentYear})`,
                      });
                    }}
                    className="w-full h-11 px-3 rounded-xl bg-secondary/60 border border-border text-foreground text-xs font-semibold focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Artificial Intelligence & Data Science (AI&DS)">Artificial Intelligence & Data Science (AI&DS)</option>
                    <option value="Electronics & Telecommunication (ENTC)">Electronics & Telecommunication (ENTC)</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Computer Engineering (Regional)">Computer Engineering (Regional)</option>
                    <option value="Master of Computer Applications (MCA)">Master of Computer Applications (MCA)</option>
                    <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                    <option value="First Year Engineering (FE)">First Year Engineering (FE)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Year of Study
                  </label>
                  <select
                    value={editForm.year || "TE"}
                    onChange={(e) => {
                      const selectedYear = e.target.value;
                      const currentBranch = editForm.branch || "Computer Engineering";
                      setEditForm({
                        ...editForm,
                        year: selectedYear,
                        department: `${currentBranch} (${selectedYear})`,
                      });
                    }}
                    className="w-full h-11 px-3 rounded-xl bg-secondary/60 border border-border text-foreground text-xs font-semibold focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="FE">First Year (FE)</option>
                    <option value="SE">Second Year (SE)</option>
                    <option value="TE">Third Year (TE)</option>
                    <option value="BE">Final Year (BE)</option>
                    <option value="Alumni">Alumni / Graduated</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">Bio / Tagline</label>
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  rows={3}
                  className="w-full p-3 rounded-xl bg-secondary/60 border border-border text-foreground text-sm font-medium focus:outline-none focus:border-primary resize-none"
                  placeholder="Write a short tagline..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">LinkedIn Profile URL</label>
                <input
                  type="url"
                  value={editForm.linkedin}
                  onChange={(e) => setEditForm({ ...editForm, linkedin: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl bg-secondary/60 border border-border text-foreground text-sm font-medium focus:outline-none focus:border-primary"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/60">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="h-10 px-4 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-10 px-5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}