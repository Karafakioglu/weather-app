export function changeTempToFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

export function changeTempToCelcius(temp) {
  return ((temp - 32) * 5) / 9;
}

export function toggleTemp(isFahrenheit, temp) {
  if (isFahrenheit) {
    return ((temp - 32) * 5) / 9;
  } else {
    return (temp * 9) / 5 + 32;
  }
}
