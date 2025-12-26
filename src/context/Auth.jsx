import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dashCheck, setDashcheck] = useState(false);

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


  const IsDashboard = async () => {
    if (profile?.id) {
    const { data, error } = await supabase
      .from("travel")
      .select(`
                 id,
                   created_at,
                   seat,
                   price,
                   payment_verified,
                   status,
                   bus_routes (
                    id,
                     operator_name,
                     bus_type,
                    from_city,
                    to_city,
                    departure_time,
                    arrival_time,
                    from_date,
                    available_seats,
                    price
                      )
                `)
      .eq("userId", profile?.id);

    if (!error) {
      // console.log(data)
      setDashboard(data)
      setDashcheck(false)

    } else {
      console.log("some thing went wrong.")
    }

  } else{
    setDashcheck(true)
  }
  }

  // ✅ RUN ONCE
  useEffect(() => {
    IsAuthCheck();
  }, []);

  // ✅ STATE CHANGE OBSERVER (DEBUG PURPOSE)
  useEffect(() => {
    console.log("PROFILE UPDATED 👉", profile);
    setLoading(false)
  }, [profile]);

  useEffect(() => {
    console.log(dashboard)
    if (dashCheck) {
      IsDashboard()
    }
  }, [dashboard,profile])

  return (
    // <AuthContext.Provider value={{ profile, loading, IsDashboard, dashbaord }}>
    <AuthContext.Provider value={{ profile, loading, dashboard, IsDashboard }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
