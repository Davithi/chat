    import React, { useContext } from "react";
    import { NavLink } from "react-router-dom";
    import {  LOGIN_ROUTE } from "../utils/consts.js";
    import { useAuthState } from "react-firebase-hooks/auth";
    import { Context } from "..";

    function Navbarr() {
        const { auth } = useContext(Context);
        /*user ete darna true sa kashxati | useAuthState sa hook e vory haskanum e ete auth ka aysinqn usery registracia exel e apa kmtni mer sayt */
        const  [user]  = useAuthState(auth);

    return (
        <div
        style={{
            display: "flex",
            justifyContent: "end",
            backgroundColor: "silver",
            height: "50px",
        }}
        >
        {user ? (
            <button onClick={()=>auth.signOut()}>exit</button>
            ) : (
                <NavLink to={LOGIN_ROUTE}>
            <button>signIn</button>
            </NavLink>
        )}
        </div>
    );
    }

    export default Navbarr;
