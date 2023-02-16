import { Link } from 'react-router-dom';
import "../Styles/App.css";

function Banner () {
    return (
        <div className="banner">
            <div className="banner-name">
                <h1>Le classeur en ligne</h1>
                <img src="/Assets/logo.jpg" alt="une pile de livres de toutes les couleurs" className="logo"/>
            </div>
            <div className='banner-nav'>
                <Link to={'/'} className="link-nav"><h3>Accueil</h3></Link>
            </div>
        </div>
    )
}

export default Banner;