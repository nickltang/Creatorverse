import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import "@picocss/pico";


const Card = ({ id, name, imageURL }) => {
    const navigate = useNavigate();

    // console.log('Props', name, imageURL)
    
    const handleClick = () => {
        navigate(`/view-creator/${id}`)
    }

    const handleEdit = () => {
        navigate(`/edit-creator/${id}`)
    }

    return (
        <article className='container card'>
            <div onClick={handleClick}>
                <h1 className='card-title'>{name}</h1> 
                <img src={imageURL}></img>    
            </div>
            <button onClick={handleEdit} className='outline'>Edit</button>  
        </article>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imageURL: PropTypes.string
}


export default Card