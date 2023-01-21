const cardBox = document.querySelector(".section-cardBox");

const dataArray = [
  {
    heading: "Dewi-pamular",
    src: "./images/dewi-pamular.jpg",
    alt: "Dewi-pamular",
    description: [
      "Love",
      "Beauty",
      "CSS that Scales!",
      "Great warrior. Wars not make one great!",
    ],
    cardType: "light",
    button: "safe",
  },
  ,
  {
    heading: "Databank Acklay",
    src: "./images/databank_acklay.jpg",
    alt: "Databank Acklay",
    description: ["Nesting!", "Conflict!", "Specificity Wars!", "Cookies"],
    cardType: "dark",
    button: "danger",
  },
  {
    heading: "Abednedo",
    src: "./images/abednedo.jpeg",
    alt: "Abednedo",
    description: ["Clever!", "Conflict!", "Specificity Wars!", "Cookies"],
    cardType: "light",
    button: "safe",
  },
  {
    heading: "Benthic-two-tubes",
    src: "./images/benthic-two-tubes.jpg",
    alt: "Benthic-two-tubes",
    description: ["Nesting!", "Conflict!", "Specificity Wars!", "Cookies"],
    cardType: "dark",
    button: "danger",
  },
  ,
  {
    heading: "Yoda",
    src: "./images/yoda.jpeg",
    alt: "Yoda",
    description: [
      "Love",
      "Beauty",
      "CSS that Scales!",
      "Great warrior. Wars not make one great!",
    ],
    cardType: "light",
    button: "safe",
  },
  {
    heading: "The Dark Side",
    src: "./images/vader.jpeg",
    alt: "The Darth vader",
    description: ["Nesting!", "Conflict!", "Specificity Wars!", "Cookies"],
    cardType: "dark",
    button: "danger",
  },
];

dataArray.forEach((data) => {
  const html1 = `              
    <div class="card card--${data.cardType}">
    <h2 class="heading-card">${data.heading}</h2>
    <img class="card__img" src=${data.src} alt=${data.alt}/>`;

  const html2 = data.description
    .map((des) => {
      return `<p class="card__description">${des}</p>`;
    })
    .join("");

  const html3 = `
    <button class="btn btn--${data.button}">${data.button}</button>
  </div>`;

  const html = html1 + html2 + html3;

  cardBox.insertAdjacentHTML("afterbegin", html);
});
