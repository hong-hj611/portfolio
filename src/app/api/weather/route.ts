import { NextResponse } from "next/server";

export async function GET() {
  const apikey = process.env.OPENWEATHER_KEY
  const city = 'Ansan'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  const res = await fetch(url, {cache: 'no-store'})

  if (!res.ok) {
    return NextResponse.json({ok : false, message: '날씨 정보 요청 실패'}, {status:500})
  }
  const data = await res.json()

  // 날씨정보 중 온도와 아이콘 => 없을경우 0과 맑음
  const temp = data.main?.temp ?? 0
  const icon = data.weather?.[0]?.icon ?? '01d'

  return NextResponse.json({ok: true, temp: Math.round(temp), icon, city})
}