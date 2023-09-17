import axios from "axios"
import { useEffect, useState } from "react"

const ClimateChange = ({ climate, temp }) => {



    const description = climate?.weather[0].description
    const [bg, setBg] = useState()
    const [backgroundPage, setBackgroundPage] = useState()
    const [isCelsius, setisCelsius] = useState(true)

    useEffect(() => {
        if (description) {
            let keywords = description.split(' ')
            let description2 = `${keywords[0]}%${keywords[1]}`
            setBg(description2)
        }
    }, [description])


    useEffect(() => {
        if (bg) {
            const apiKeyPixabay = '32808186-d3409bfac0a150cb85d0c03fc'
            const urlPixabay = `https://pixabay.com/api/?key=${apiKeyPixabay}&q=${bg}`
            axios.get(urlPixabay)
                .then(response => {
                    setBackgroundPage(response.data)
                })
                .catch(err => console.log(err))
        }

    }, [bg])

    const estiloDeFondo = {
        backgroundImage: `url(${backgroundPage?.hits[4].largeImageURL})`
    };

    const urlIcon = `https://openweathermap.org/img/wn/${climate?.weather[0].icon}@2x.png`

    const handleChangeTemp = () => setisCelsius(!isCelsius)

    console.log(backgroundPage)

    return (
        <article style={estiloDeFondo} className='principal'>
            <div className="card">
                <div className="card__container-header">
                    <h1 className="card__tittle">Weather App</h1>
                    <h3 className="card__city-country">{climate?.name}, {climate?.sys.country}</h3>
                </div>
                <div className="card__container-main">
                    <div className="main__image">
                        <img src={urlIcon} alt="" className="main_img" />
                    </div>
                    <div className="main__info">
                        <h3 className="info__text-bold">"{climate?.weather[0].description}"</h3>
                        <ul className="list-info">
                            <li className="info__item item1">Wind Speed <span> { climate?.wind.speed }m/s</span ></li>
                            <li className="info__item item2">Clouds <span>{climate?.clouds.all}%</span></li>
                            <li className="info__item item3">Pressure <span>{climate?.main.pressure} hPa</span></li>
                        </ul>
                    </div>
                </div>
                <div className="card__container-footer">
                    <h2>{isCelsius ? `${temp?.celsius.toFixed(1)} °C` : `${temp?.farenheit.toFixed(1)} °F`}</h2>
                    <button onClick={handleChangeTemp} className='button-change'>{isCelsius ? `Change to °F` : `Change to °C`}</button>
                </div>
            </div>
        </article>
    )
}

export default ClimateChange


                        // <p> Wind Speed <span> { climate?.wind.speed }m/s</span ></p>
                        // <p> Clouds <span>{climate?.clouds.all}%</span></p>
                        // <p> Pressure <span>{climate?.main.pressure} hPa</span></p>