import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {

    const { name, lname } = useParams();
    const location = useLocation();
    const history = useHistory();

    console.log(history);

    return <>
        <h1> user {name}{lname} page</h1>;

        <p>my current location is{location.pathname}</p>

        {location.pathname === `/User/PriyasinghA/engineer` ? (
            // <button onClick={ ()=> alert("you are best")}> Click me</button>          //location
            // <button onClick={() => history.goBack()}> Click me</button>
            <button onClick={() => history.push("/")}> Home page</button>

        ) : null
        }
    </>
}



export default User;