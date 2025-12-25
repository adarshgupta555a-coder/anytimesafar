import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  // const [dashbaord, setDashboard] = useState(null);
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


  // const IsDashboard = async () => {
  //   console.log("dashbaord");
  //   // setLoading(true);
  //   if (profile.id) {
  //     const { data: travel, error } = await supabase
  //     .from('travel')
  //     .select("*")
  //     .eq('userId', profile?.id)
  //     if(!error){
  //       // setDashboard(travel)
  //       console.log(travel)
  //       return travel;
  //       // setLoading(false)
  //     }


  //   }
    
  // }

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
    // <AuthContext.Provider value={{ profile, loading, IsDashboard, dashbaord }}>
    <AuthContext.Provider value={{ profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
