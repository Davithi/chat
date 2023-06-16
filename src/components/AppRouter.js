import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts.js";
import Chat from "./Chat";
import Login from "./Login";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
function AppRouter() {
  const { auth } = useContext(Context);
  /*user ete darna true sa kashxati | useAuthState sa hook e vory haskanum e ete auth ka aysinqn usery registracia exel e apa kmtni mer sayt */
  const  [user]  = useAuthState(auth);
  return user /* | */ ? (
    <>
      <Routes>
        {" "}
        {/* | */}
        <Route path="chat/" element={<Chat />} />;{/* | */}
      </Routes>{" "}
      {/* | */}
      <Navigate to={CHAT_ROUTE} /> {/* <-----| */}
      {/* Navigate ete GOYUTYUN CHUNECOX hasceov procenq gnanq mez ktexapoxi LOGIN_ROUTE */}
    </>
  ) : (
    <>
      <Routes>
        <Route path={"login"} element={<Login />} />
      </Routes>
      <Navigate to={LOGIN_ROUTE} />{" "}
      {/* Navigate ete GOYUTYUN CHUNECOX hasceov procenq gnanq mez ktexapoxi LOGIN_ROUTE */}
    </>
  );
}

export default AppRouter;
