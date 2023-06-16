import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts.js";
import Chat from "./Chat";
import Login from "./Login";


export  const privateRoutes = [
    {
        path:LOGIN_ROUTE,
        Component:<Login/>
    }
]


export  const publicRoutes =   {
        path:CHAT_ROUTE,
        Component:<Chat/>
    }
