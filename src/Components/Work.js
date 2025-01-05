import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

import Petooti from '../Assets/Peetoti.png';
import Boardsi from '../Assets/Boardsi.png';
import SmartPath from '../Assets/SmartPath.png';
import RoyalMindFullNess from '../Assets/RoyalMindFullNess.png';

const Work = () => {
    const projects = [
        {
            title: 'Petooti Web Platform',
            description: 'A platform to help rescuers and adopters connect for pet adoption. Built using React, integrating state and country selection, and chat functionality.',
            features: [
                'User-friendly interface for posting and adopting pets.',
                'State and country selection for location-based filtering.',
                'Real-time chat integration for communication between rescuers and adopters.',
                'Responsive design for mobile and desktop users.',
            ],
            image: Petooti,
            technologies: ['React.js', 'Material-UI', 'Intercom', 'State and Country Picker'],
        },
        {
            title: 'RoyalMindfulness Yoga',
            description: 'A yoga platform built using React.js and Material-UI, allowing users to book classes and track their wellness journey.',
            features: [
                'Class booking system with calendar integration.',
                'User profile management for tracking progress.',
                'Detailed yoga classes with video tutorials and schedules.',
                'Search functionality to find classes based on categories and difficulty levels.',
            ],
            image: RoyalMindFullNess,
            technologies: ['React.js', 'Material-UI', 'Radix-UI'],
        },
        {
            title: 'Boardsi Web Application',
            description: 'A job listing and creation platform developed with React.js and TypeScript, enabling users to create and apply for jobs.',
            features: [
                'Job listing and search functionality.',
                'Job creation form with validation and filtering options.',
                'User authentication and profile management.',
                'Real-time job updates and notifications.',
            ],
            image: Boardsi,
            technologies: ['React.js', 'TypeScript', 'Material-UI', 'Axios'],
        },
        {
            title: 'SmartPath',
            description: 'SmartPath is a personalized career development platform that helps users discover the best path to their career goals through data-driven insights and learning resources.',
            features: [
                'Personalized career path recommendations based on skills, experience, and goals.',
                'Integration with learning resources to help users upskill and achieve career milestones.',
                'Comprehensive career assessments and tracking of progress.',
                'Data-driven insights for better decision-making in career development.',
                'Career path visualization tools for clear, actionable guidance.',
            ],
            image: SmartPath,
            technologies: ['React.js', 'SASS', 'REST API', 'Material-UI', 'Redux-Toolkit'],
        },
    ];

    const [clickedProjects, setClickedProjects] = useState(new Set());

    const handleClick = (index) => {
        setClickedProjects((prevClickedProjects) => {
            const newClickedProjects = new Set(prevClickedProjects);
            if (newClickedProjects.has(index)) {
                newClickedProjects.delete(index);
            } else {
                newClickedProjects.add(index); 
            }
            return newClickedProjects;
        });
    };

    const handleImageClick = (index) => {
        setClickedProjects((prevClickedProjects) => {
            const newClickedProjects = new Set(prevClickedProjects);
            newClickedProjects.delete(index); 
            return newClickedProjects;
        });
    };

    return (
        <Box style={styles.container}>
            <Typography className="name_title_style" style={{ textAlign: "unset !important", marginBottom: '20px' }}>My Work</Typography>
            <Grid container style={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <Grid
                        item
                        sm={12}
                        lg={5}
                        md={5}
                        key={index}
                        style={styles.projectItem}
                    >
                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography sx={styles.title}>{project.title}</Typography>
                            <Box onClick={() => handleClick(index)}>
                                <FlipCameraAndroidIcon style={styles.rotateIcon} />
                            </Box>
                        </Box>

                        {!clickedProjects.has(index) ? (
                            <>
                                <Typography style={styles.projectDescription}>{project.description}</Typography>

                                <Box style={styles.featuresContainer}>
                                    <Typography style={styles.sectionTitle}>Key Features:</Typography>
                                    <ul style={styles.featuresList}>
                                        {project.features.map((feature, index) => (
                                            <li key={index} style={styles.featureItem}>{feature}</li>
                                        ))}
                                    </ul>
                                </Box>

                                <Box style={styles.technologiesContainer}>
                                    <Typography style={styles.sectionTitle}>Technologies Used:</Typography>
                                    <ul style={styles.technologiesList}>
                                        {project.technologies.map((tech, index) => (
                                            <li key={index} style={styles.technologyItem}>{tech}</li>
                                        ))}
                                    </ul>
                                </Box>
                            </>
                        ) : (
                            <Box style={styles.projectImageContainer} onClick={() => handleImageClick(index)}>
                                <img src={project.image} alt={project.title} style={styles.projectImage} />
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const styles = {
    container: {
        padding: '40px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    projectsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    projectItem: {
        backgroundColor: 'rgb(111 111 111 / 27%)',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '10px',
        marginRight: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    },
    projectImageContainer: {
        marginTop: '20px',
        cursor: 'pointer',
    },
    projectImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    rotateIcon: {
        fontSize: '30px',
        cursor: 'pointer',
    },
    projectTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
    },
    projectDescription: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        color: '#666',
        marginTop: '8px',
    },
    sectionTitle: {
        fontSize: '16px',
        fontWeight: '500',
        marginTop: '20px',
    },
    featuresContainer: {
        marginTop: '12px',
    },
    featuresList: {
        listStyleType: 'circle',
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    featureItem: {
        fontSize: '14px',
        color: '#555',
    },
    technologiesContainer: {
        marginTop: '12px',
    },
    technologiesList: {
        listStyleType: 'circle',
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    technologyItem: {
        fontSize: '14px',
        color: '#555',
    },
};

export default Work;
