import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ClimateChange from './components/ClimateChange'
import PreLoader from './components/PreLoader'

function App() {

  const [climate, setClimate] = useState()
  const [coords, setCoords] = useState()
  const [temp, setTemp] = useState()


  useEffect(() => {

    const success = (pos) => {
      const {latitude,longitude} = pos.coords
      setCoords({lat:latitude, lon:longitude})
    }
    navigator.geolocation.getCurrentPosition(success);
  }, [])


  
  useEffect(() => {
    if (coords) {
      const apiKey = 'eb96815c50af5a0c476db0d697bc246c'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(url)
        .then(res => {
          setClimate(res.data)
          const obj = {
            celsius: res.data.main.temp - 273.15,
            farenheit: (res.data.main.temp - 273.15) * 9/5 + 32
          }
          setTemp(obj)
        }
          
          )
        .catch(err => console.log(err))
    }
  }, [coords])


  return (
    <>
      <PreLoader
      coords={coords}
      />
      <ClimateChange
        climate={climate}
        temp = {temp}
      />
    </>
  )
}

export default App
