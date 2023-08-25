import logo from './brain.png'
import Tilt from 'react-parallax-tilt';
import './Logo.css'

function Logo() {
    return (
       <>
            <Tilt className='Tilt'>
                <div className="tilt-box">
                    <img src={logo} alt="brain logo" width={50}/> 
                </div>
            </Tilt>
            
       </>
    )
}

export default Logo;