window.addEventListener("load", () => {
  let long;
  let lat;
  let temperaturaValor = document.getElementById("temperatura-valor");
  let temperaturaDescripcion = document.getElementById(
    "temperatura-descripcion"
  );
  let ubicacion = document.getElementById("ubicacion");
  let iconoAnimado = document.getElementById("icono-animado");
  let velocidad = document.getElementById("viento-velocidad");
  let apiKey = "110d5e7cb2d7cad2ca03169b9a594680";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      let long = position.coords.longitude;
      let lat = position.coords.latitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=es`;

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          temperaturaValor.textContent = `${data.main.temp}º C`;
          temperaturaDescripcion.textContent = data.weather[0].description;
          ubicacion.textContent = data.name;
          velocidad.textContent = `${data.wind.speed} m/s`;
          console.log(data);

          switch (data.weather[0].main) {
            case "Thunderstorm":
              iconoAnimado.src = "animated/thunder.svg";
              console.log("TORMENTA");
              break;
            case "Drizzle":
              iconoAnimado.src = "animated/rainy-2.svg";
              console.log("LLOVIZNA");
              break;
            case "Rain":
              iconoAnimado.src = "animated/rainy-7.svg";
              console.log("LLUVIA");
              break;
            case "Snow":
              iconoAnimado.src = "animated/snowy-6.svg";
              console.log("NIEVE");
              break;
            case "Clear":
              iconoAnimado.src = "animated/day.svg";
              console.log("LIMPIO");
              break;
            case "Atmosphere":
              iconoAnimado.src = "animated/weather.svg";
              console.log("ATMOSFERA");
              break;
            case "Clouds":
              iconoAnimado.src = "animated/cloudy-day-1.svg";
              console.log("NUBES");
              break;
            default:
              iconoAnimado.src = "animated/cloudy-day-1.svg";
              console.log("por defecto");
          }
        });
    });
  }
});
