import React, { useContext, useState } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

function Chat() {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, loading] = useCollectionData(
      firestore.collection('messages').orderBy('createdAt')
  )

  

  const sendMessage = async () => {
      firestore.collection('messages').add({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          text: value,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      setValue('')
  }

  return (
    <div>
      <div
        style={{
          height: window.innerHeight - 50,
          margin: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid gray",
            overflowY: "auto",
            margin: "20px",
          }}
        >
        <div>
              {messages ? messages.map((item,id)=>(
                <div key={id}>
                  {console.log('iitem',item)}
                  <img src={item.photoURL} />
                  <h2>{item.displayName}</h2>
                  <p>{item.text}</p>
                </div>
              ))
                :
                (
                  <div>
                    <h1>datark</h1>
                  </div>
                )
            }
        </div>
        </div>
        <div>
          <input
            type="text"
            style={{ padding: 20 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button style={{ padding: 20 }} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
