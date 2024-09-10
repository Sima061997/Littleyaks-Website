
import backgroundImage from '../backgroundImage.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className= "container">
      
      <div className="image-container">
      <img src={backgroundImage} alt="Animated" className="zoom-out-image" />
      </div>
      <div className="text-section">
        <h1>Discover the perfect blend of style and sustainability with <br /> LittleYaks</h1>
        <button className='button-style' onClick={() => navigate("/all")}>Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
