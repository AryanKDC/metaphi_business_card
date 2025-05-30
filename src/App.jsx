import React, { useState } from 'react';
import { Avatar, Box, Link, Paper, Stack, Typography } from '@mui/material';
import './App.css';
import logo from './images/Logoheader.png';
import profileImage from './images/profileimg.jpg';
import PhoneIcon from './images/Call.png';
import EmailIcon from './images/Mail.png';
import LanguageIcon from './images/Website.png';
import MapIcon from './images/Map.png';
import WhatsAppIcon from './images/whatsapp.png';
import InstagramIcon from './images/instagram.png';
import LinkedInIcon from './images/linkedin.png';
import DownloadIcon from './images/download.png';
import PictureAsPdfIcon from './images/pdf.png';
import ShareIcon from './images/share.png';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const socialLinks = [
  {
    iconSrc: InstagramIcon,
    url: 'https://www.instagram.com/metaphi.innovations/?hl=en',
    alt: 'Instagram',
  },
  {
    iconSrc: LinkedInIcon,
    url: 'https://www.linkedin.com/company/metaphi-innovations/',
    alt: 'MetaphiLinkedIn',
  },
  {
    iconSrc: LinkedInIcon,
    url: 'https://www.linkedin.com/in/avnishmmehta/',
    alt: 'AvnishMehtaLinkedIn',
  },

  {
    iconSrc: PictureAsPdfIcon,
    url: '/files/MIPL company profile.pdf',//change the domain while hosting live
    alt: 'PDF',
  },
  {
    iconSrc: MapIcon,
    url: 'https://www.google.com/maps/place/K+DIGITALCURRY/@19.0875495,72.9075216,13z/data=!4m6!3m5!1s0x3be7c774623709b5:0x967265778402237d!8m2!3d19.0866689!4d72.9080822!16s%2Fg%2F11rggrcpkm?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D',
    alt: 'PDF',
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

  // const handleShare = async () => {
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: 'Metaphi Innovations',
  //         text: 'Check out this awesome profile!',
  //         url: 'https://metaphi.in',//add proper path here
  //       });
  //       console.log('Shared successfully');
  //     } catch (error) {
  //       console.error('Sharing failed:', error);
  //     }
  //   } else {
  //     alert('Sharing not supported on this browser.');
  //   }
  // };

  return (
    <>
      <Box
        sx={{
          width: { xs: '412px', md: '800px', lg: '1200px', xl: '1400px' },
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
            top: {
              xs: '-100px',
              md: '-490px',
            },
            right: {
              xs: '-500px',
              md: '-600px',
            },
            width: {
              xs: '1200px',
              md: '2300px',
            },
            height: {
              xs: '320px',
              md: '900px',
            },
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
          }}
        >
          <img
            src={logo}
            alt="metaphi-logo"
            style={{
              width: '207px',
              height: '52px',
              objectFit: 'contain',
            }}
          />
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
            width: {
              xs: '380px',
              md: '600px',
              lg: '780px',
              xl: '816px',
            },
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

              <Typography variant="h6" fontWeight="800" fontFamily="AirIndiaRegular">
                Avnish M Mehta
              </Typography>
              <Typography variant="body2" fontWeight="600" fontSize="16px" fontFamily="AirIndiaRegular">
                CEO & Founder
              </Typography>
              <Typography variant="body2" color="#000000"  fontSize="16px" fontFamily="Nunito Sans">
                <span style={{fontFamily:"AirIndiaRegular"}}>Metaphi Innovations</span> <br /> Tech Entrepreneur and Digital Transformation Strategist
              </Typography>
            </Box>

            <Box mt={"44px"}>
              <Typography sx={{
                textAlign: {lg: 'center', xs: ""},
                mb: 2,
                fontFamily: "AirIndiaRegular"
              }}>
                Services
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} justifyContent={{ lg: 'center', xs: 'flex-start' }}>
                {[...primaryServices, ...(showMore ? additionalServices : [])].map((service, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: 'Nunito Sans',
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
                    fontFamily: 'Nunito Sans',
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

            <Box
              sx={{
                mt: "51px",
                p: 2,
                borderRadius: 2,
                border: '1px solid #ccc',
                bgcolor: '#FFFFF',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: {
                  xs: '330px',
                  md: '650px',  
                },
                mx: 'auto',
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: { xs: '100%', md: '30%' } }}
                >
                  <Link
                    href="tel:+919702464242"
                    underline="none"
                    color="inherit"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img src={PhoneIcon} alt="Phone" style={{ width: 20, height: 20, marginRight: 8 }} />
                    <Typography variant="body2" fontWeight="500" fontFamily="Nunito Sans">
                      +91 97024 64242
                    </Typography>
                  </Link>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: { xs: '100%', md: '30%' } }}
                >
                  <Link
                    href="mailto:avnish@metaphi.in"
                    underline="none"
                    color="inherit"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img src={EmailIcon} alt="Email" style={{ width: 20, height: 20, marginRight: 8 }} />
                    <Typography variant="body2" fontWeight="500" fontFamily="Nunito Sans">
                      avnish@metaphi.in
                    </Typography>
                  </Link>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: { xs: '100%', md: '30%' } }}
                >
                  <Link
                    href="https://metaphi.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img src={LanguageIcon} alt="Website" style={{ width: 20, height: 20, marginRight: 8 }} />
                    <Typography fontWeight="500" fontFamily="Nunito Sans" variant="body2">
                      www.metaphi.in
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
            </Box>

          </Box>

          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} my={3}>
            {socialLinks.map(({ iconSrc, url, alt, download }, i) => (
              <Link
                key={i}
                href={url}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                download={download || undefined}
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

            {/* <Box
              onClick={handleShare}
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <img src={ShareIcon} alt="Share" style={{ width: 18, height: 18 }} />
            </Box> */}

          </Stack>

          <Box mt={4} sx={{
            display: 'flex',
            flexDirection: {xs: "column", md: "row"},
            gap: 1
          }}>

            <Link
              href="https://api.whatsapp.com/send/?phone=9702464242&text=Hello&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                display: 'block',
                width: '100%',
                maxWidth: '359px',
                mx: 'auto',
                mb: '20px',
              }}
            >
              <Box
                sx={{
                  p: '2px',
                  borderRadius: '14px',
                  background: 'linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7)',
                  boxSizing: 'border-box',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '39px',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                  }}
                >
                  <img
                    src={WhatsAppIcon}
                    alt="whatsapp-icon"
                    style={{
                      marginRight: '8px',

                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      background: 'linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'Nunito Sans'
                    }}
                  >
                    Connect on WhatsApp
                  </Typography>
                </Box>
              </Box>

            </Link>

            {/* Add to Contact Button */}
            <Link
              href="/files/avnishContact.vcf"
              download
              sx={{
                textDecoration: 'none',
                display: 'block',
                width: '100%',
                maxWidth: '359px',
                mx: 'auto',
                mb: '20px',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '36px',
                  borderRadius: '12px',
                  background: 'linear-gradient(to right, #07B9CE, #3969E7, #7D2AE7)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 0.6,
                  cursor: 'pointer',
                  
                }}
              >
                <PersonAddAltIcon sx={{ color: 'white', mr: 1 }} />
                <Typography color="white" fontWeight="bold" fontFamily = 'Nunito Sans'>
                  Add to Contact
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
