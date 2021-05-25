import jwtDecode from "jwt-decode";
import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";

const Authcontext = createContext();

let user = null;
if (typeof localStorage !== "undefined") {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);

    const expiresAt = new Date(decodedToken.exp * 1000);
    if (new Date() > expiresAt) {
      localStorage?.removeItem("token");
    } else {
      user = decodedToken.user;
    }
  }
}

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user });
  return (
    <Authcontext.Provider value={{ dispatch, state }}>
      {children}
    </Authcontext.Provider>
  );
};
const useGlobalcontext = () => {
  return useContext(Authcontext);
};
export { useGlobalcontext, AuthState };
