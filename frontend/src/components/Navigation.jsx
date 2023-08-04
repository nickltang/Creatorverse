import "@picocss/pico";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/')
    }
    return (
        <nav className="container">
            <ul>
                <li onClick={handleLogoClick} className="logo"><strong>CreatorVerse📱</strong></li>
            </ul>
        </nav>
    )
}

export default Navigation