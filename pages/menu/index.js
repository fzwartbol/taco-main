import React, {useEffect} from "react";
import TacoComponent from "../../components/TacoComponent";


const Index = () => {
    const [tacos, setTacos] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/tacos')
            .then(response => response.json())
            .then(data => setTacos(data))
            .catch(error => console.log(error));
    }, [tacos]);

 return (
        <>
            <p>Browse our classic and custom user created taco's</p>
            {tacos && tacos.map(taco => <TacoComponent key={taco.id} taco={taco}  />)}
        </>
 )
}

export default Index