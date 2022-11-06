import { useState } from 'react'
import './Dropdown.css'
import image from './images/icon-arrow-down.svg'

const Dropdown = ({name, options}) => {
    
    const [isActive, setIsActive] = useState(false)    
    // const options = ['probando', 'probando 2']

    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {name}  &nbsp;
                <img src={image} alt="" />
            </div>
            {isActive && (
                <div className="dropdown-content"> 
                    {
                        options.map((option) => {
                            return(
                            <div key = {option.title} onClick={(e) => {setIsActive(false)}} className="dropdown-item">
                                {option.title}
                            </div>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}

export default Dropdown