import {useContext, useState} from "react";
import {CartContext} from "./CartContext";
import styles from './Taco.module.css'

const TacoOrderComponent = ({taco}) => {
    const [name, setName] = useState(taco.name);
    const [ingredients, setIngredients] = useState(taco.ingredients);
    const {cart, setCart} = useContext(CartContext)

    const addToCart = () => {
        setCart(prev => [...prev, taco]);
    }

    return (
        <>
            <div style={{flexDirection: "column", display: "flex", border: "2px dashed black", width: "50%", alignSelf:"center", margin: "auto",marginTop: "30px",marginBottom: "30px"}}>
                <div style={{flexDirection: "column", display: "flex"}}>
                </div>
                <h3>Taco name</h3>
                    <p>{name}</p>
                <h3 style={{border: "2px dashed black",}}>Ingredients</h3>
                {ingredients && ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name}</li>)}
                <div style={{justifyContent: "end"}}>
                <button className={styles.normalButton}
                    onClick={addToCart}
                >Order this taco         +</button>
                </div>
            </div>
        </>
    )
}

export default TacoOrderComponent;