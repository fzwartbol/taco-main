import {useState} from "react";
import styles from './Taco.module.css';

const TacoOrderComponent = ({taco,index}) => {
    const [name, setName] = useState(taco.name);
    const [ingredients, setIngredients] = useState(taco.ingredients);

    return (
        <>
            <div className={styles.dashed} style={{flexDirection: "column", display: "flex",  width: "30%", alignSelf:"center"}}>
                <div style={{flexDirection: "column", display: "flex"}}>
                <h3>Order Item: {index+1}</h3>
                </div>
                <h3>Taco name</h3>
                    <p>{name}</p>
                <h3>Ingredients</h3>
                {ingredients && ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name}</li>)}
            </div>
        </>
    )
}

export default TacoOrderComponent;