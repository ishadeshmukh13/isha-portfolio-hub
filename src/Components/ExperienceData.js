import React from 'react';
import { Box, Typography } from '@mui/material';

const ExperienceSection = () => {
    const experienceData = [
        {
            id: 1,
            role: 'Software Engineer',
            company: 'Deeporion Technology Pvt. Ltd.',
            duration: 'March 2024 - Present',
            description: 'Working on React.js-based applications, building reusable components, and optimizing app performance.',
        },
        {
            id: 2,
            role: 'Software Engineer',
            company: 'Precious Infosystem Pvt. Ltd.',
            duration: 'March 2023 - February 2024',
            description: 'Developed responsive web designs and implemented dynamic features using React.js and TypeScript.',
        },
        {
            id: 3,
            role: 'Software Engineer',
            company: 'Infobets Technology Pvt. Ltd.',
            duration: 'August 2022 - February 2023',
            description: 'Contributed to frontend development, improving user interfaces and debugging production issues.',
        },
    ];

    return (
        <Box style={WebStyle.mainBox}>
            <Typography className="name_title_style" style={WebStyle.sectionTitle}>
                Professional Experience
            </Typography>
            <Box style={WebStyle.experienceContainer}>
                {experienceData.map((item) => (
                    <Box key={item.id} style={WebStyle.experienceCard}>
                        <Typography className="role" style={WebStyle.role}>
                            {item.role}
                        </Typography>
                        <Typography className="company" style={WebStyle.company}>
                            {item.company}
                        </Typography>
                        <Typography className="duration" style={WebStyle.duration}>
                            {item.duration}
                        </Typography>
                        <Typography className="description" style={WebStyle.description}>
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const WebStyle = {
    mainBox: {
        padding: '40px',
    },
    sectionTitle: {
        marginBottom: '20px',
        textAlign: "unset !important"
    },
    experienceContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
        gap: '20px',
    },
    experienceCard: {
        padding: '20px',
        backgroundColor: 'rgb(111 111 111 / 27%)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    role: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#333',
    },
    company: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#555',
    },
    duration: {
        fontSize: '14px',
        fontWeight: '400',
        color: '#888',
        marginBottom: '10px',
    },
    description: {
        fontSize: '14px',
        color: '#555',
    },
};

export default ExperienceSection;
