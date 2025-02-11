import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <h1>Welcome to our cafe!</h1>
            <p>We are a small cafe that serves coffee and pastries.</p>
            <button onClick={() => navigate('/menu')}>Order Now</button>
        </div>
    )
}

export default Hero;