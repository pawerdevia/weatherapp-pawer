import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations'
import './preloader.css'
const PreLoader = ({coords}) => {

    useEffect(() => {
        preLoaderAnim()
    }, [])
    

    return (
        <>
        {coords ? (
            <div className="preloader">
            <div className="texts-container">
                <span>!Welcome </span>
                <span>Weather </span>
                <span>App!</span>
            </div>
        </div>

        ) : 
        <div className="preloader preloader-error">
            <div className="texts-container">
                <span>ERROR </span>
                <span>UBICATION </span>
                <span>:C</span>
            </div>
        </div>
        }
        
        </>
    )
}

export default PreLoader