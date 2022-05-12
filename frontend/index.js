fetch("https://rxdub2-3001.sse.codesandbox.io/")
  .then((response) => response.json())
  .then((weatherJsonObj) => {
    let img =
      weatherJsonObj.status === "Broken Clouds"
        ? "broken-clouds.jpeg"
        : "sunny.jpeg";
    document.querySelector(
      ".card__image"
    ).innerHTML = `<img src ="./images/${img}"/>`;
    document.querySelector(".card__degree").textContent =
      weatherJsonObj.degree + "°C";
    document.querySelector(".card__status").textContent = weatherJsonObj.status;
    document.querySelector(".card__value-degree").textContent =
      weatherJsonObj.feeling + "°C";
    document.querySelector(".card__value-humidity").textContent =
      weatherJsonObj.humidity + "%";
    console.log(weatherJsonObj);
  });
