import jwtDecode from "jwt-decode";

const reducer = (state, action) => {
  if (action.type === "LOGIN") {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("token", action.payload);
      const decodedToken = jwtDecode(action.payload);
      return {
        ...state,
        user: decodedToken.user,
      };
    }
  }
  if (action.type === "LOGOUT") {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
      };
    }
  }
  return state;
};

export default reducer;
