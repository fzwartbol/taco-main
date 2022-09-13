import React, {useEffect} from "react";
import TacoComponent from "../../components/TacoComponent";


const Index = () => {
    const [tacos, setTacos] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/tacos/recent')
            .then(response => response.json())
            .then(data => setTacos(data))
            .catch(error => console.log(error));
    }, [tacos]);

 return (
        <>
            <p>The 12 last created taco's for your pleasure</p>
            {tacos && tacos.map(taco => <TacoComponent key={taco.id} taco={taco}  />)}
        </>
 )
}

export default Index