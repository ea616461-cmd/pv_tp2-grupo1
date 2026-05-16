const convertirCelsiusAFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 1.8) + 32;
    console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(1)}°F.`);
};

convertirCelsiusAFahrenheit(25);