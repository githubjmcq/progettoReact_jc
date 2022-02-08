import './logo.css';
import { Info } from "../info/info";

export const Logo = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className='lg'>
                    <p id='l'>Logo</p>
                </div>    
            </div>
            <Info />
        </div>
    )
}