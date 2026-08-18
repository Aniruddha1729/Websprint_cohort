// Safe Firebase Module for Vite compatibility
let auth = null;
let googleProvider = null;

export const onAuthStateChanged = (authObj, callback) => {
  if (typeof callback === "function") {
    // Return default student user state for local dev
    setTimeout(() => callback(null), 0);
  }
  return () => {};
};

export const signOut = async () => {
  return Promise.resolve();
};

export const signInWithPopup = async () => {
  return Promise.resolve({
    user: {
      displayName: "Shubhang Doley",
      email: "shubhang.doley@pccoe.edu.in",
      photoURL: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
      uid: "pccoe-student-046",
    },
  });
};

export { auth, googleProvider };
