"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../public/css/Style.css';
import { Typography, Button } from "@mui/material";
import { projectsData } from "../components/projectsData"; // Import data
import CustomizedDialogs from "../components/DialogBox";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Projects() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "10%",
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: "5%" } },
      { breakpoint: 768, settings: { centerPadding: "2%" } },
      { breakpoint: 480, settings: { centerMode: false, centerPadding: "0px" } },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    appendDots: (dots) => <div className="dots-wrapper">{dots}</div>,
  };

  return (
    <div className="w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 p-10">
      {projectsData.map((project, index) => (
        <div key={project.id} className={`Content-${index + 1} Content-wrapper w-full rounded-lg overflow-hidden h-full`}>
          {/* Image Slider */}
          <div className="image-wrapper relative w-full">
            <Slider {...settings2}>
              {project.images.map((imgSrc, imgIndex) => (
                <div key={imgIndex} className="relative w-full lg:h-60 md:h-60 h-40">
                  <Image
                    className="image-box w-full"
                    src={imgSrc}
                    alt={`Project ${project.id} - Image ${imgIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </Slider>
          <div className="Button-Group left-0 bottom-4 w-full flex gap-4 justify-center p-4">
            <Button sx={{ width: '130px', fontSize: '12px', color: 'whitesmoke', borderColor: 'whitesmoke' }} variant="outlined" color="primary" href={project.linkViewPage} target="_blank" rel="noopener noreferrer">
                Preview
              </Button>

              {/* Open Dialog Button */}
              <Button sx={{ width: '130px', fontSize: '12px', color: 'whitesmoke', backgroundColor: '#179cad' }} onClick={() => handleOpenDialog(project)}>
                Details
              </Button>
          </div>
          </div>
          {/* Details */}
          <div className="relative w-full h-[180px] flex flex-wrap content-between lg:w-full">
            <Typography
              variant="h6"
              gutterBottom
              sx={{ width: '100%', fontWeight: "bold", textAlign: 'center', color: "Black", padding: '10px 30px' }}
            >
              {project.titlePage}
            </Typography>
            <div className="w-full pt-3 flex-1 pb-1 px-3">
              {project.icons.map((item, index) => (
                <div key={index} className={`stack-${index + 1} h-auto flex items-center mb-2`}>
                  <div className={`color-${item.title} language-title relative w-full text-xs pl-5 `}>{item.title}</div>
                  <div className={`stack-${index + 1} h-4 w-full relative bg-slate-100`}>
                    <div className={`${item.title} absolute left-0 top-0 h-4`} style={{ width: item.percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Dialog Component */}
      <CustomizedDialogs open={openDialog} handleClose={handleCloseDialog} project={selectedProject} />
    </div>
  );
}
