import {UserContext} from "./UserContext";
import {useContext} from "react";


const LoginComponent = () => {
    const {user, setUser} = useContext(UserContext);


    console.log(user);
    const submitLogin = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log("Login");
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);

            }).finally(() => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            /** setting mockData*/
            const user = {
                username: username,
                password: password,
                fullname: "John Doe",
                street: "1234 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345",
                phoneNumber: "123-456-7890",
            }
            setUser(user);

        })
            .catch( error => console.log(error));

    }


    return (
        <> { !user &&
            <div className="login-container">
                <div className="login-form">
                    <h1>Login</h1>
                    <div className="login-input">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username"/>
                    </div>
                    <div className="login-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <button onClick={submitLogin}>Login</button>
                </div>
            </div>
        }
            {user && <div>
                <button onClick={() => setUser(null)}>Logout</button>
            </div>}
        </>
    )
}

export  default LoginComponent;