import React, { useState } from 'react';
import { Avatar, Box, Link, Paper, Stack, Typography } from '@mui/material';
import './App.css';
import logo from './images/metaphi-logo.png';
import profileImage from './images/profileimg.jpg';
import PhoneIcon from './images/Call.png';
import EmailIcon from './images/Mail.png';
import LanguageIcon from './images/Website.png';
import WhatsAppIcon from './images/whatsapp.png';
import InstagramIcon from './images/instagram.png';
import LinkedInIcon from './images/linkedin.png';
import DownloadIcon from './images/download.png';
import PictureAsPdfIcon from './images/pdf.png';
import ShareIcon from './images/share.png';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const socialLinks = [
  {
    iconSrc: WhatsAppIcon,
    url: 'https://wa.me/919702464242',
    alt: 'WhatsApp',
  },
  {
    iconSrc: InstagramIcon,
    url: 'https://instagram.com/yourprofile',
    alt: 'Instagram',
  },
  {
    iconSrc: LinkedInIcon,
    url: 'https://linkedin.com/in/yourprofile',
    alt: 'LinkedIn',
  },
  {
    iconSrc: DownloadIcon,
    url: 'https://yourwebsite.com/download',
    alt: 'Download',
  },
  {
    iconSrc: PictureAsPdfIcon,
    url: 'https://yourwebsite.com/file.pdf',
    alt: 'PDF',
  },
  {
    iconSrc: ShareIcon,
    url: 'https://yourwebsite.com/share',
    alt: 'Share',
  },
];



const primaryServices = [
  "UI/UX Design",
  "Mobile & Web App Development",
  "Product Development",
];

const additionalServices = [
  "Cloud Solutions",
  "AI & ML Integration",
  "E-Commerce Development",
  "Blockchain Development",
];

function App() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Box
        sx={{
          width: '412px',
          minHeight: '100vh',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          position: 'relative',
          overflow: 'hidden'
        }}
      >

        <Box
          sx={{
            position: 'absolute',
            top: '-100px',  
            right: '-500px',  
            width: '1200px',
            height: '320px',
            backgroundColor: '#F1E8FC',
            transform: 'rotate(28deg)',
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            pt: "30px",
            gap: 1.5,
          }}
        >
          <img
            src={logo}
            alt="metaphi-logo"
            style={{
              width: '54px',
              height: '60px',
              objectFit: 'contain',
            }}
          />
          <Typography
            sx={{
              color: '#404143',
              fontSize: "50px",
              fontWeight: 600,
              fontFamily: "IBM Plex Sans",
              lineHeight: 1,
            }}
          >
            Metaphi
          </Typography>
        </Box>


        <Avatar
          src={profileImage}
          alt="Avnish M Mehta"
          sx={{
            width: 137,
            height: 137,
            border: '4px solid white',
            zIndex: 3,
            mx: 'auto',
            boxShadow: 3
          }}
        />

        <Box
          sx={{
            borderRadius: '16px',
            p: '3px',
            zIndex: '1',
            maxWidth: "360px",
            width: '100%',
            mt: '-87px',
            mb: '20px',
            mx: 'auto',
            background: `
      linear-gradient(white, white) padding-box, 
      linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7) border-box
    `,
            border: '2px solid transparent',
          }}
        >
          <Box
            sx={{
              borderRadius: '14px',
              bgcolor: 'white',
              p: 3,
              mt: "60px",
            }}
          >
            <Box textAlign="center">

              <Typography variant="h6" fontWeight="800" fontFamily="Roboto Serif">
                Avnish M Mehta
              </Typography>
              <Typography variant="body2" fontWeight="600" fontSize="16px" fontFamily="Roboto Serif">
                CEO & Founder
              </Typography>
              <Typography variant="body2" color="#000000" fontWeight="400" fontSize="16px" fontFamily="Roboto Serif">
                Empowering Innovation<br />Across Industries
              </Typography>
            </Box>

            <Box
              sx={{
                mt: "51px",
                p: 2,
                borderRadius: 2,
                border: '1px solid #ccc',
                bgcolor: '#FFFFF',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: "330px",
                maxHeight: "144px",
              }}
            >

              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <Link href="tel:+919702464242" underline="none" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={PhoneIcon} alt="Phone" style={{ width: 20, height: 20, marginRight: 8 }} />
                  <Typography variant="body2" fontWeight="400" fontFamily="Roboto Serif">+91 97024 64242</Typography>
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <Link href="mailto:avnish@metaphi.com" underline="none" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={EmailIcon} alt="Email" style={{ width: 20, height: 20, marginRight: 8 }} />
                  <Typography variant="body2" fontWeight="400" fontFamily="Roboto Serif">avnish@metaphi.com</Typography>
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Link href="https://www.metaphi.in" target="_blank" rel="noopener noreferrer" underline="none" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={LanguageIcon} alt="Website" style={{ width: 20, height: 20, marginRight: 8 }} />
                  <Typography fontWeight="400" fontFamily="Roboto Serif" variant="body2">www.metaphi.in</Typography>
                </Link>
              </Stack>
            </Box>

            <Box mt={"44px"}>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {[...primaryServices, ...(showMore ? additionalServices : [])].map((service, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: 'Roboto Serif',
                      color: '#1C1C1E',
                      background: `
            linear-gradient(white, white) padding-box,
            linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7) border-box
          `,
                      border: '1.5px solid transparent',
                    }}
                  >
                    {service}
                  </Box>
                ))}
                <Box
                  onClick={() => setShowMore(!showMore)}
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: 'Roboto Serif',
                    color: '#1C1C1E',
                    cursor: 'pointer',
                    background: `
          linear-gradient(white, white) padding-box,
          linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7) border-box
        `,
                    border: '1.5px solid transparent',
                  }}
                >
                  {showMore ? "Less" : "More"}
                </Box>
              </Stack>
            </Box>


          </Box>

          <Box mt={4}>
            <Stack direction="row" justifyContent="space-around" alignItems="center" mb={3}>
              {socialLinks.map(({ iconSrc, url, alt }, i) => (
                <Link
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <img src={iconSrc} alt={alt} style={{ width: 18, height: 18 }} />
                </Link>
              ))}
            </Stack>

            <Box
              sx={{
                width: '100%',
                maxWidth: "329px",
                maxHeight: '36px',
                height: "100%",
                borderRadius: '12px',
                background: 'linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 1.2,
                my: '48px',
                mb: '20px',
                cursor: 'pointer',
                mx: 'auto'
              }}
            >
              <PersonAddAltIcon sx={{ color: 'white', mr: 1 }} />
              <Typography color="white" fontWeight="bold">
                Add to Contact
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
