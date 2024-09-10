import {useState} from 'react';
import fannyfemale from '../productImages/Fannypack/fannyfemale.jpeg';
import fannymale from '../productImages/Fannypack/fannymale.jpeg';
import fannymale1 from '../productImages/Fannypack/fannymale1.jpeg';
import './Fannypack.css';
import products from '../Products';

const Fannypack = () => {
    const [isActive, setIsActive] = useState(false);

return (
    <div className='container'>
        <div className='container-1'>
        <div className='text-box'>
        <div className="text-box-left">Perfect for every occasion and location</div>
        <div className="text-box-right">Ensuring you look and feel great no matter where you go</div>
        </div>
        <div className='image-container' onClick ={() => setIsActive(!isActive)}>
        <img src={fannyfemale} alt="Animated" className={`image ${isActive }`} />
        <img src={fannymale1} alt="Animated" className={`image ${isActive}`} />
        <img src={fannymale} alt="Animated" className={`image ${isActive}`} />  
        </div>
        </div>
        
        <div className='fannypack-listing'>
        {products.fannypack.map((item) => (
            <div key= {item.id} className='fannypack-item'>
                <div className='fanny-image-container'>
                <img src={item.primaryImage} alt={item.name} className='fannypack-image primary'/>
                <img src={item.secondImage} alt={item.name + ' alternative'} className='fannypack-image secondary'/>
                </div>
                
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                
               
            </div>
        ))}
        </div>  
    </div>
   
);
}

export default Fannypack;

