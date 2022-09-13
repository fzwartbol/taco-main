import React, {useContext, useEffect} from 'react';
import {CartContext} from '../../components/CartContext';
import styles from './style.module.css'

const Index = () => {
    const {cart, setCart} = useContext(CartContext)
    const [allIngredients, setAllIngredients] = React.useState([]);
    const [wraps, setWraps] = React.useState([]);
    const [proteins, setProteins] = React.useState([]);
    const [veggies, setVeggies] = React.useState([]);
    const [cheeses, setCheeses] = React.useState([]);
    const [sauces, setSauces] = React.useState([]);
    const [selectedIngredients, setSelectedIngredients] = React.useState([]);
    const [modelName, setModelName] = React.useState("");

    const updateIngredients = (event) => {
        const value = event.target?.value;
        if (event.target.checked) {
           setSelectedIngredients(prevArray => [...prevArray, value]);
        } else {
            setSelectedIngredients(prev => prev.filter(fruit => fruit !== value ));
        }
    }

    /**  fetches the data from the API */
    useEffect(() => {
    fetch('http://localhost:8080/ingredientsx')
        .then(response => response.json())
        .then(data => {
            setAllIngredients(data);
            setWraps(allIngredients.filter(w => w.type === 'WRAP'));
            setProteins(allIngredients.filter(p => p.type === 'PROTEIN'));
            setVeggies(allIngredients.filter(v => v.type === 'VEGGIES'));
            setCheeses(allIngredients.filter(c => c.type === 'CHEESE'));
            setSauces(allIngredients.filter(s => s.type === 'SAUCE'));
        }).catch( error => console.log(error));

    }, [allIngredients]);

    /** console.logs the data */
    useEffect(() => {
        console.log(selectedIngredients)
    }, [selectedIngredients]);

    const onSubmit = (e) => {
        e.preventDefault()
        const createdModel = {
            name: modelName,
            ingredients: allIngredients.filter( e => selectedIngredients.includes(e.id))

        }
        console.log(createdModel);
        /** Saving taco to the database */
        fetch('http://localhost:8080/design',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(createdModel)
            }).then(response => response.json())
    .then(data => {  setCart(prev => [...prev,data]);
        // console.log(console.log(value))
        console.log(data) 
        
    });
    }

    return (
        <>
            <form action="/design" method="post" style={{textAlign: "center", width: "50%", margin:"auto"}}>
                {/*<input type="text" placeholder="Name" />*/}
                <div  className={styles.dashed} style={{textAlign: "center", width: "100%"}}>

                    <div title="Record your wrap" className={styles.dashed}>
                        <p>Maak je wrap</p>
                    {wraps && wraps.map(wrap =>
                        <div key={wrap.id} >
                                <input type="checkbox"
                                       name="ingredients"
                                       value={wrap.id}
                                       onChange={updateIngredients}
                                />{wrap.name}<br/>
                        </div>
                        )}
                    </div>
                    <div title="Record your proteins" className={styles.dashed}>
                        <p>Kies je eiwit</p>
                        {proteins && proteins.map(protein =>
                            <div key={protein.id}>
                                <input type="checkbox"
                                       name="ingredients"
                                       value={protein.id}
                                       onChange={updateIngredients}
                                />{protein.name}<br/>
                            </div>
                        )}
                    </div>
                    <div title="Record your cheeses" className={styles.dashed}>
                        <p>Kies je Kaas</p>
                        {cheeses && cheeses.map(cheese =>
                            <div key={cheese.id}>
                                <input type="checkbox"
                                       name="ingredients"
                                       value={cheese.id}
                                       onChange={updateIngredients}
                                />{cheese.name}<br/>
                            </div>
                        )}
                    </div>
                    <div title="Vouch for your veggies">
                        <p className={styles.dashed}>Kies je groenten</p>
                        {veggies && veggies.map(veggie =>
                            <div key={veggie.id} >
                                <input type="checkbox"
                                       name="ingredients"
                                       value={veggie.id}
                                       onChange={updateIngredients}
                                />{veggie.name}<br/>
                            </div>
                        )}
                    </div>

                    <div title="Vouch for your veggies" className={styles.dashed}>
                        <p>Sause it up!</p>
                        {sauces && sauces.map(sauce =>
                            <div key={sauce.id}>
                                <input type="checkbox"
                                       name="ingredients"
                                       value={sauce.id}
                                       onChange={updateIngredients}
                                />{sauce.name}<br/>
                            </div>
                        )}
                    </div>
                    <group-box title="Name your taco creation">
                        <h2>Geef je taco een naam</h2>
                        <input type="text" name="name" onChange={e => setModelName(e.target?.value)}/>
                    </group-box>
                    <div style={{padding: "5px"}}>
                        <button className={styles.normalButton} style={{padding: "5px",margin: "10px"}} onClick={onSubmit}> BESTEL JE TACO</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Index;