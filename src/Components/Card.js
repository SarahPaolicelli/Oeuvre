import { Link } from 'react-router-dom';
import '../Styles/App.css';

const Card = ({oeuvre}) => {
    return (
        <div key={oeuvre.id} className='card'>
            <Link to={ '/OeuvreOProg/' + oeuvre.id } className="link">
            <div className="card-img"><img src={oeuvre.img} alt={oeuvre.alt} /></div>
            <div className="card-txt">{oeuvre.name}</div>
            </Link>  
        </div>          
    )
}
        
export default Card;