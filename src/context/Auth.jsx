import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const IsAuthCheck = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setProfile(null);
      setLoading(false);
      return null;
    }

    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error || !data) {
      setProfile(null);
      setLoading(false);
      return null;
    }

    setProfile(data);
    setLoading(false);
    return data;

  };

  // ✅ RUN ONCE
  useEffect(() => {
            IsAuthCheck();
  }, []);

  // ✅ STATE CHANGE OBSERVER (DEBUG PURPOSE)
  useEffect(() => {
    console.log("PROFILE UPDATED 👉", profile);
    setLoading(false)
  }, [profile]);

  return (
    <AuthContext.Provider value={{ profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
