import '../styles/globals.css'
import {CartContext} from '../components/CartContext'
import { useState, createContext, useContext } from "react";
import {UserContext} from "../components/UserContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  return (

         <UserContext.Provider value={{user, setUser}}>
             <Layout>
            <CartContext.Provider value={{cart: cart, setCart: setCart}}>
              <Component {...pageProps} />
            </CartContext.Provider>
             </Layout>
          </UserContext.Provider>

  )
 
}

export default MyApp
