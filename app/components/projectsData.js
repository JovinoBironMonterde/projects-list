const kylin1 = "/assets/img/kylin/kylin1.png";
const kylin2 = "/assets/img/kylin/kylin2.png";
const kylin3 = "/assets/img/kylin/kylin3.png";

const mimnu1 = "/assets/img/mimnu/mimnu1.png";
const mimnu2 = "/assets/img/mimnu/mimnu2.png";
const mimnu3 = "/assets/img/mimnu/mimnu3.png";

const burgerbistro1 = "/assets/img/burger_bistro/burgerbistro1.png";
const burgerbistro2 = "/assets/img/burger_bistro/burgerbistro2.png";
const burgerbistro3 = "/assets/img/burger_bistro/burgerbistro3.png";
const burgerbistro4 = "/assets/img/burger_bistro/burgerbistro4.png";

const apchu1 = "/assets/img/apchu/apchu1.png";
const apchu2 = "/assets/img/apchu/apchu2.png";
const apchu3 = "/assets/img/apchu/apchu3.png";

const lolitahotel1 = "/assets/img/lolita_heights_hotel/lolitahotel1.png";
const lolitahotel2 = "/assets/img/lolita_heights_hotel/lolitahotel2.png";
const lolitahotel3 = "/assets/img/lolita_heights_hotel/lolitahotel3.png";
const lolitahotel4 = "/assets/img/lolita_heights_hotel/lolitahotel4.png";
const lolitahotel5 = "/assets/img/lolita_heights_hotel/lolitahotel5.png";
const lolitahotel6 = "/assets/img/lolita_heights_hotel/lolitahotel6.png";
const lolitahotel7 = "/assets/img/lolita_heights_hotel/lolitahotel7.png";
const lolitahotel8 = "/assets/img/lolita_heights_hotel/lolitahotel8.png";
const lolitahotel9 = "/assets/img/lolita_heights_hotel/lolitahotel9.png";
const lolitahotel10 = "/assets/img/lolita_heights_hotel/lolitahotel10.png";

import AboutImage1 from "../../public/assets/img/avails.png";
import AboutImage2 from "../../public/assets/img/image1.jpeg";
import AboutImage3 from "../../public/assets/img/image2.jpeg";

import ComingSoon3 from "../../public/assets/img/comingsoon3.jpg";
import { Code, Web, DesignServices, Javascript } from "@mui/icons-material"; // Import MUI icons


export const projectsData = [
  {
    id: 1,
    status: "Published",
    layout: "Kylin Project",
    titlePage: "Kylin Project",
    images: [kylin1, kylin2, kylin3],
    description: "This is the first project description with some key details. This is the first project description with some key details.This is the first project description with some key details.This is the first project description with some key details.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "JAVASCRIPT", percentage: "52.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },
  {
    id: 2,
    status: "Published",
    titlePage: "Mimnu",
    images: [mimnu1, mimnu2, mimnu3],
    description: "This is the second project showcasing another example.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "LARAVEL", percentage: "70.3%" },
      { icon: <Javascript />, title: "JQUERY", percentage: "60.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "60.6%" },
    ],
  },
  {
    id: 3,
    status: "Published",
    titlePage: "Property Management System",
    images: [lolitahotel1, lolitahotel2, lolitahotel3, lolitahotel4, lolitahotel5, lolitahotel6, lolitahotel7, lolitahotel8, lolitahotel9, lolitahotel10],
    description: "A design project featuring creative visuals.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "JAVASCRIPT", percentage: "52.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },
  {
    id: 4,
    status: "Published",
    titlePage: "A.P. Chu",
    images: [apchu1, apchu2, apchu3],
    description: "Take design mockups and translate them into clean, responsive, and pixel-perfect web interfaces.",
    linkViewPage: "https://www.apccdc.com/",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "WORDPRESS", percentage: "80.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },
  {
    id: 5,
    status: "Published",
    titlePage: "Burger Bistro",
    images: [burgerbistro1, burgerbistro2, burgerbistro3, burgerbistro4],
    description: "This is my first sample page using Webflow, built to explore its design tools, responsiveness, and interactions. It features a clean layout, custom animations, and a structured approach to web design without coding.",
    linkViewPage: "https://sample-page-25e41f.webflow.io",
    linkViewCode: "#",
    icons: [
      { icon: <DesignServices />, title: "WEBFLOW", percentage: "100%" },
    ],
  },
  {
    id: 6,
    status: "Comming-Soon",
    titlePage: "Coming Soon!",
    images: [ComingSoon3],
    description: "Coming Soon!",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "", percentage: "" },
      { icon: <Javascript />, title: "", percentage: "" },
      { icon: <DesignServices />, title: "", percentage: "" },
    ],
  },
  // {
  //   id: 7,
  //   status: "Comming-Soon",
  //   titlePage: "Coming Soon!",
  //   images: [ComingSoon3],
  //   description: "Coming Soon!",
  //   linkViewPage: "#",
  //   linkViewCode: "#",
  //   icons: [
  //     { icon: <Code />, title: "", percentage: "" },
  //     { icon: <Javascript />, title: "", percentage: "" },
  //     { icon: <DesignServices />, title: "", percentage: "" },
  //   ],
  // },
];
