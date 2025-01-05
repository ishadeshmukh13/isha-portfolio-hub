import React, { useRef } from 'react';

import Work from './Work';
import Contact from './Contact';
import Expertise from './Expertise';
import ExperienceSection from './ExperienceData';

import { Box, Typography } from '@mui/material';
import BackgroundImg from '../Assets/image.png'

const FirstPartIntro = () => {
    const menuData=[ {
        id: 2,
        name: 'Expertise'
    },
    {
        id: 3,
        name: 'Work'
    },
    {
        id: 4,
        name: 'Experience'
    },
    {
        id: 5,
        name: 'Contact'
    },]

    const expertiseRef = useRef(null);
    const workRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        if (section === 'Expertise') {
            expertiseRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'Work') {
            workRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'Experience') {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'Contact') {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Box style={WebStyle.mainBox}>
            <Box style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography className='name_style_small'>
                    Ishakawadkar._
                </Typography>
                <Box style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {
                        menuData.map((item) => {
                            return <Typography className='menu_item_style' key={item.name} onClick={() => scrollToSection(item.name)}>
                                {item.name}
                            </Typography>
                        })
                    }
                </Box>
            </Box>
            <Typography className='name_style'>
                Isha kawadkar
            </Typography>
            <Typography className='name_title_style'>
                Software Engineer, Front end Developer.
            </Typography>
            <div ref={expertiseRef}>
                <Expertise />
            </div>
            <div ref={workRef}>
                <Work />
            </div>
            <div ref={experienceRef}>
                <ExperienceSection />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </Box>
    )
}

const WebStyle = {
    mainBox: {
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
    },
}

export default FirstPartIntro;