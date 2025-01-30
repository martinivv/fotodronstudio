import caricature1 from "../images/caricature/caricature1.jpg";
import caricature2 from "../images/caricature/caricature2.jpg";
import caricature3 from "../images/caricature/caricature3.jpg";
// Photography
import photo1 from "../images/photography/photo1.jpg";
import photo2 from "../images/photography/photo2.jpg";
import photo3 from "../images/photography/photo3.jpg";
// Products
import product1 from "../images/products/product1.jpg";
import product2 from "../images/products/product2.jpg";
import product3 from "../images/products/product3.jpg";
// Restoration
import restoration1 from "../images/restoration/restoration1.jpg";
import restoration2 from "../images/restoration/restoration2.jpg";

export const SERVICES = [
  {
    title: "Дрон Кадри",
    description:
      "Зашеметяващи въздушни кадри от птичи поглед с професионално оборудване. Перфектни за недвижими имоти, събития на открито и промоционални видеа.",
    icon: "🚁",
    images: [
      new URL("../images/drone-shots/drone1.jpg", import.meta.url).href,
      new URL("../images/drone-shots/drone2.jpg", import.meta.url).href,
      new URL("../images/drone-shots/drone3.jpg", import.meta.url).href,
    ],
  },
  {
    title: "Фотография",
    description:
      "Професионално заснемане на събития, портрети и рекламни материали с внимание към всеки детайл. Създаваме незабравими спомени с високо качество.",
    icon: "📸",
    images: [photo1, photo2, photo3],
  },
  {
    title: "Карикатури",
    description:
      "Уникални художествени карикатури, създадени с професионално майсторство. Идеални за подаръци, събития или просто за забавление.",
    icon: "🎨",
    images: [caricature1, caricature2, caricature3],
  },
  {
    title: "Фото продукти",
    description:
      "Превърнете любимите си снимки в уникални сувенири - от луксозни фото албуми до персонализирани подаръци. Качествени материали и прецизна изработка.",
    icon: "🎁",
    images: [product1, product2, product3],
  },
  {
    title: "Реставрации",
    description:
      "Професионална реставрация на стари и повредени снимки, връщайки им първоначалния блясък. Съхранете безценните спомени за поколенията.",
    icon: "🖼️",
    images: [restoration1, restoration2],
  },
];

export const getMapsUrl = () => {
  const coordinates = "42.478186,26.518817";
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    return `maps://maps.apple.com/?q=${coordinates}`;
  }
  return `https://maps.google.com/?q=${coordinates}`;
};
