import LoginComponent from "../components/LoginComponent";
import {UserContext} from "../components/UserContext";
import {useContext} from "react";

export default function Home() {
    const {user, setUser} = useContext(UserContext);
  return (
      <>
        <p>We love tacos. All kinds of tacos. And we love being creative with the way we make our tacos.</p>

        <p>Some taco joints offer a set, finite menu of tacos to choose from. At Taco Cloud, we want to share
          the joy of taco creativity with you, allowing you to design your own tacos from a palette of fresh
          and delicious ingredients. While we may offer some of our creations for you to try, the real fun
          is when you create your own tortilla-wrapped works of art.</p>

        <p>And, even though we love tacos and creativity, we prefer to avoid doing complex math. Thatss why
          all tacos are priced modestly at $4.99 each, no matter how many or what ingredients you choose.</p>

        <p>Click <a href="design" style={{textDecorationLine: "underline"}}>here</a> to get started on your taco masterpiece!</p>
          { user &&  <p>Already logged in</p>}
            <LoginComponent />
    </>
  )
}
