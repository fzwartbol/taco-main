import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from '../../components/CartContext';
import TacoOrderComponent from "../../components/TacoOrderComponent";
import {UserContext} from "../../components/UserContext";
import styles from './style.module.css';

const Index = () => {
    const {user, setUser} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext)
    const [ordered, setOrdered] = useState(false)

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const placeOrder = () => {
        const order = {
            user : user,
            deliveryName: document.getElementById("deliveryName").value,
            deliveryStreet: document.getElementById("deliveryStreet").value,
            deliveryCity: document.getElementById("deliveryCity").value,
            deliveryState: document.getElementById("deliveryState").value,
            deliveryZip: document.getElementById("deliveryZip").value,
            ccNumber: document.getElementById("ccNumber").value,
            ccExpiration: document.getElementById("ccExpiration").value,
            ccCVV: document.getElementById("ccCVV").value,
            tacos: cart
        }

        fetch('http://localhost:8080/design',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                setOrdered(true);
                setCart([]);

            }).catch(error => console.log(error));

    }

    if (ordered) {
        return (
            <div>
                <h1>Thank you for your order!</h1>
            </div>
        )
    }

     return (
       <>     <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <p>You've crafted your mouthwatering taco masterpieces. Now, just imagine those
                            creations appearing before you at home...or work...or wherever you are!</p>
                        <h1>Items In Your Cart</h1>
                        {cart && cart.map((taco, index) => <TacoOrderComponent  key={taco.id} taco={taco} index={index} />)}
                    <div style={{display: "flex", flexDirection: "column" ,  justifyContent: "space-between"}}>
                        {user &&
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <h1>User Information</h1>
                            <div>
                                <label htmlFor="deliveryName">Name</label>
                                <p>{user?.username}</p>
                            </div>
                        </div>
                        }

                        <h1>Order Details</h1>
                    <div>
                        <label htmlFor="deliveryName">Name</label>
                        <input type="text" id="deliveryName" name="deliveryName" />
                    </div>
                    <div>
                        <label htmlFor="deliveryStreet">Street</label>
                        <input type="text" id="deliveryStreet" name="deliveryStreet" />
                    </div>
                    <div>
                        <label htmlFor="deliveryCity">City</label>
                        <input type="text" id="deliveryCity" name="deliveryCity" />
                    </div>
                    <div>
                        <label htmlFor="deliveryState">State</label>
                        <input type="text" id="deliveryState" name="deliveryState" />
                    </div>
                    <div>
                        <label htmlFor="deliveryZip">Zip</label>
                        <input type="text" id="deliveryZip" name="deliveryZip" />
                    </div>
                    <div>
                        <label htmlFor="ccNumber">Bankrekening</label>
                        <input type="text" id="ccNumber" name="ccNumber" />
                    </div>
                    <div>
                        <label htmlFor="ccExpiration">Expiratie Datum</label>
                        <input type="text" id="ccExpiration" name="ccExpiration" />
                    </div>
                    <div>
                        <label htmlFor="ccCVV">CVV</label>
                        <input type="text" id="ccCVV" name="ccCVV" />
                    </div>
                        <button className={styles.normalButton} style={{width: "15%", display: "flex", margin:"auto" , marginTop:"20px"}}
                        onClick={placeOrder}
                        >Order now</button>
                    </div>
            </div>
       </>
          
     );
    
}

export default Index;