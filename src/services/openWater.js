const apiKey = process.env.REACT_APP_API_KEY;
const url = "https://api.openweathermap.org/data/2.5";

export const openWater = async (cityName) => {
  try {
    const apiRequest = await fetch(
      `${url}/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`
    );
    const data = await apiRequest.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
