export const DAYS = (month = 'January', year = 1) => {
  // check current month if includes in group MONTH_30_DAY || MONTH_31_DAY
  let maxday = 31
  if (MONTH_30.includes(month)) {
    maxday = 30
  } else if (MONTH_31.includes(month)) {
    maxday = 31
  } else {
    parseInt(year) % 4 === 0 ? (maxday = 29) : (maxday = 28)
  }
  const days = []
  for (let i = 1; i <= maxday; i++) {
    const currentDay = i >= 10 ? i : `0${i}`
    days.push(currentDay)
  }
  return days
}

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const YEARS = (day = 0, month = '', rangeYear = 150) => {
  const currentYear = new Date().getFullYear()
  const years = []
  for (let i = currentYear; i > currentYear - rangeYear; i--) {
    // Check to see if the required value is a year || when mount === 'February' and day === 29
    if (month.toString() === 'February' && parseInt(day) === 29) {
      i % 4 && years.push(i)
    } else {
      years.push(i)
    }
  }
  return years
}

const MONTH_30 = ['April', 'June', 'September', 'November']

const MONTH_31 = [
  'January',
  'March',
  'May',
  'July',
  'August',
  'October',
  'December'
]

export async function requestPost (url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTU5NTEyOTUsImV4cCI6MTYxNjAzNzY5NSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMTM2IiwianRpIjoiYmQyM2YwN2EtNGFiYS00MGNiLWJmMzctNzUwY2E5ODkwYmM2In0.EQS9XZthiFK91u4iJR7ZysPJV9JpCrfVAkLDGrY40eM'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json()
}
