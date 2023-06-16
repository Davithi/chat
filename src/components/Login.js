import React, { useContext } from "react";
import { Context } from "../index";

function Login() {

 let { auth , firebase } = useContext(Context)

 const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
 }

  return (
    <div>
      <div
        style={{
          height: window.innerHeight - 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "grey",
            width: "480px",
          }}
        >
          <div>
            <button
              style={{ margin: "40px", padding: "10px" }} onClick={login} >
              Войдите в с аккаунтом Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
