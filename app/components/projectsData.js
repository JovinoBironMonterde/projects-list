import kylin1 from "../../public/assets/img/kylin1.png";
import kylin2 from "../../public/assets/img/kylin2.png";
import kylin3 from "../../public/assets/img/kylin3.png";

import mimnu1 from "../../public/assets/img/mimnu1.png";
import mimnu2 from "../../public/assets/img/mimnu2.png";
import mimnu3 from "../../public/assets/img/mimnu3.png";

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
    titlePage: "Sample Title",
    images: [AboutImage2, AboutImage1, AboutImage3],
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
    titlePage: "Sample Title",
    images: [AboutImage2, AboutImage1, AboutImage3],
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
    id: 5,
    status: "Comming-Soon",
    titlePage: "Pricing",
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
  {
    id: 7,
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
];
