import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // GLOBAL STATES
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if(data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token
      })
    }
    //eslint-disable-next-line
  }, [])
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>
  )
};

// custom Hook
const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}
