import { oeuvres } from "../Datas/oeuvres";
import Card from "./Card";
import "../Styles/index.css";

function Nav () {
    return (
        <div className="section">
            <h2>Les oeuvres au programme</h2>
            <div className="container-cards">
                {oeuvres.map((oeuvre) => (
                    <Card key={oeuvre.id} oeuvre={oeuvre} />            
                ))}
            </div>
        </div>
    )
}

export default Nav;