import React from 'react'

type WeatherType = 
| {ok: true, temp: number, icon: string, city: string} 
| {ok: false, message: string}

const WeatherComponent = async () => {
  // const res = await fetch(`http://localhost:3000/api/weather/`, {cache: 'no-store'})
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/weather/`, {cache: 'no-store'})
  const data : WeatherType = await res.json()

  if (!data.ok) return null

  return (
    <section>
      <img src={`http://openweathermap.org/img/wn/${data.icon}.png`}  alt="weather icon" width={35} height={35} />
      <strong>{data.temp}℃</strong>
      <span>--{data.city}</span>
    </section>
  )
}

export default WeatherComponent