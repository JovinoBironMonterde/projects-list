import * as React from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import '../../public/css/Style.css';

import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const DialogSlider = dynamic(() => import("react-slick"), { ssr: false });

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': { padding: theme.spacing(2) },
  '& .MuiDialogActions-root': { padding: theme.spacing(1) },
}));

export default function CustomizedDialogs({ open, handleClose, project }) {
  if (!project) return null;

  const DialogCarousel = {
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
    <BootstrapDialog sx={{backgroundColor: '#111111a1', zIndex: '9999999'}} onClose={handleClose} aria-labelledby="customized-dialog-title w-full" open={open} fullWidth maxWidth='xl'>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {project.titlePage}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box sx={{ position: 'relative', width: '100%', height: '618px'}}>
          <DialogSlider {...DialogCarousel}>
            {project.images.map((imgSrc, imgIndex) => (
              <div key={imgIndex} className="Image-rapper relative w-full h-[600px]">
                <Image
                  className="image-box w-full"
                  src={imgSrc}
                  alt={`Project ${project.id} - Image ${imgIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </DialogSlider>
          <Box
            sx={{
              position: 'absolute',
              left: '0',
              bottom: '18px',
              width: '100%',
              height: 'auto',
              background: 'linear-gradient(to bottom, rgba(23, 156, 173, 0) 0%, rgba(23, 156, 173, 0.6) 50%, #179cad 100%)',
              padding: '25px',
              paddingTop: '150px'
            }}
          >
            <Typography gutterBottom>{project.description}</Typography>
            <Typography gutterBottom>{project.description}</Typography>
            <Typography gutterBottom>{project.description}</Typography>
          </Box>
        </Box>
      </DialogContent> 
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close 
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
