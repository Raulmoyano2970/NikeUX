import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Prueba los Electric Nike",
  subtitle: "Adapt 2.0 Sneakers",
  img: heroimg,
  btntext: "Explorar producto",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Novedades!",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Comprar!",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Comprar!",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "DESTACADO",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Nuestro propósito es impulsar al mundo hacia adelante. Tomamos medidas construyendo una comunidad, protegiendo nuestro planeta y aumentando el acceso al deporte.",
  btn: "Explorar Más",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "DESTACADO",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "La luminosidad perdura en los Nike Sneakers Air Lancing Shoes, el original del baloncesto que le da un giro fresco a lo que mejor conoces: superposiciones cosidas con durabilidad, acabados limpios y la cantidad perfecta de brillo para hacerte brillar.",
  btn: "Explorar Más",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Lo más Vendido",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Comprar!",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Jordan Brands modelo de la firma durante los últimos años, Jayson Tatum será el amanecer de la Air Jordan 37 esta temporada antes de lograr potencialmente su primera zapatilla de firma con Jumpman, que se rumorea que está en las obras recientemente a través de su Twitter.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Leer más"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Justo a tiempo para el otoño, esta nueva versión de las Zoom Freak 4 parece inspirarse en el Día de Acción de Gracias. El naranja y el marrón, dos elementos básicos de la festividad, se utilizan en toda la parte superior, vistiendo las partes que no están bañadas en tonos grises.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Leer más"
    },
    {
      title: "Nike Air Max Plus",
      text: "La Nike Air Max Plus ha disfrutado de la revelación de varias combinaciones de colores en los últimos meses. Y a medida que nos embarcamos oficialmente en la temporada de otoño, un conjunto adicional se han añadido al calendario, incluyendo este colorway gris y naranja recién revelado.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Leer más"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular serie de AJ1s con el popular color-bloqueo con el sabor original Yellow Toe. El colorway fue revelado de nuevo PE por el músico Zach Myers, casi cuatro años más tarde, los fanáticos de Jordania finalmente tendrá su oportunidad una liberación GR.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Leer más"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "El Bred colorway de Zoom GT Cut 2 será el primero en liberar este viernes, Para Nike Miembros Nación Mundial, mientras que Sabrina Ionescus colorway se establece para una fecha de lanzamiento 13 de octubre. Mientras tanto, disfrutar de las imágenes oficiales de ambos colorways a continuación.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Leer más"
    },
    {
      title: "Puma Announces Breanna",
      text: "Por primera vez en más de una década, se crea una silueta de baloncesto exclusiva para una de las mejores y más brillantes estrellas de la WNBA, la medallista de oro olímpica y superestrella de los Seattle Storm Breanna Stewart. Las Puma Stewie 1 Quiet Fire estarán disponibles este viernes.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Leer más"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "Desde los toggles de encaje hasta los cambios de imagen inspirados en la ciudad, las Nike Air Force 1 han presentado una serie de modificaciones únicas. Aquí, sin embargo, la marca está bajando las cosas bastantes muescas, optando por un colorway simple dirigido principalmente por negro y Laser Orange.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Leer más"
    },
    {
      title: "Hello Kitty y Adidas",
      text: "El mundo de Sanrio es inmenso y está repleto de personajes emblemáticos. Sin embargo, pocos de la familia rivalizan con la inmensa influencia de Hello Kitty, que ha sido la mascota de todo tipo de productos, desde Pringles hasta colaboraciones con zapatillas deportivas.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Leer más"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "La estética nocturna que se ve aquí se aplica a los paneles de cuero negro pulido de la parte superior y a la construcción de malla perforada de la lengüeta, mientras que el ribete Royal y los Swooshes del antepié aportan una intriga adicional a la paleta oscurecida.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Leer más"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "Sobre Nike"},{title: "Ayuda"},{title: "Empresa"} ],
  links: [
    [
      {link: "Noticias"},
      {link: "Empleos"},
      {link: "Inversores"},
      {link: "Sostenibilidad"},
    ],
    [
      {link: "Estado de Pedido"},
      {link: "Envio y Entrega"},
      {link: "Opciones de pago"},
      {link: "Contactanos"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promociones"},
      {link: "Buscar una tienda"},
      {link: "Regístrate"},
      {link: "Envíanos un comentario"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
