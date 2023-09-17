import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations'
import './preloader.css'
const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])


    return (
        <>
                <div className="preloader">
                    <div className="texts-container">
                        <span>!Welcome</span>
                        <span>Weather</span>
                        <span>App!</span>
                    </div>
                </div>

        </>
    )
}

export default PreLoader