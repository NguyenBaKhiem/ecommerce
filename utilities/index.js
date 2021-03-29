import { MAX_BADGE_COUNT, MONTHS, MONTH_30, MONTH_31 } from './constants'

// export const DAYS = (month = 'January', year = 1) => {
//   // check current month if includes in group MONTH_30_DAY || MONTH_31_DAY
//   let maxday = 31
//   if (MONTH_30.includes(month)) {
//     maxday = 30
//   } else if (MONTH_31.includes(month)) {
//     maxday = 31
//   } else {
//     parseInt(year) % 4 === 0 ? (maxday = 29) : (maxday = 28)
//   }
//   const days = []
//   for (let i = 1; i <= maxday; i++) {
//     const currentDay = i >= 10 ? i : `0${i}`
//     days.push(currentDay)
//   }
//   return days
// }

// export const YEARS = (day = 0, month = '', rangeYear = 150) => {
//   const currentYear = new Date().getFullYear()
//   const years = []
//   for (let i = currentYear; i > currentYear - rangeYear; i--) {
//     // Check to see if the required value is a year || when mount === 'February' and day === 29
//     if (month.toString() === 'February' && parseInt(day) === 29) {
//       i % 4 && years.push(i)
//     } else {
//       years.push(i)
//     }
//   }
//   return years
// }

export async function requestPost (url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTYxMjE1NDAsImV4cCI6MTYxNjIwNzk0MCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMTM2IiwianRpIjoiNDJlZDE4YmUtMjAzMC00MzgwLTkxM2EtNDQ3MjQzNDhiNzI0In0.fox2f8eRgdP2K_OPUaLa8YCvq0rn5BO4XcwJjxBVe2k'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json()
}

export function convertBadge (value) {
  if (value < 1) return null
  return value > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : value
}
