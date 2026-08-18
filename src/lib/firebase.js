// Firebase Authentication helper module with safe fallback
export const auth = {
  currentUser: null,
};

export const googleProvider = {
  setCustomParameters: () => {},
};

export const onAuthStateChanged = (authObj, callback) => {
  // Trigger callback with default local user for instant development
  if (typeof callback === "function") {
    setTimeout(() => {
      callback({
        uid: "local-user-123",
        displayName: "Shubhang Doley",
        email: "shubhang.doley@pccoe.edu.in",
        photoURL: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
      });
    }, 50);
  }
  return () => {};
};

export const signOut = async () => {
  return Promise.resolve();
};

export const signInWithPopup = async () => {
  return Promise.resolve({
    user: {
      uid: "local-user-123",
      displayName: "Shubhang Doley",
      email: "shubhang.doley@pccoe.edu.in",
      photoURL: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
    },
  });
};
