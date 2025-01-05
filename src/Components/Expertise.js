import React from 'react';
import { Box, Typography } from '@mui/material';

const Expertise = () => {
    const expertiseData = [
        {
            title: 'Frontend Development',
            details: [
                'Proficient in building responsive and dynamic web applications using React.js, Redux toolkit, and TypeScript.',
                'Expertise in HTML, CSS, and SCSS for creating modern, user-friendly interfaces.',
                'Experience in Material-UI and Radix-UI for UI component libraries.'
            ]
        },
        {
            title: 'JavaScript & TypeScript',
            details: [
                'Deep understanding of JavaScript and TypeScript, with experience in writing clean, maintainable code and implementing best practices.',
                'Strong knowledge of ES6+ features and asynchronous programming (Promises, async/await).'
            ]
        },
        {
            title: 'State Management',
            details: [
                'Proficient in using Redux toolkit for state management in React applications, including Redux Toolkit.',
                'Experience in handling complex state logic and optimizing app performance.'
            ]
        },
        {
            title: 'Version Control',
            details: [
                'Extensive experience using Git for version control, including working with branches, pull requests, and resolving merge conflicts.',
                'Experience with GitHub and GitLab for repository management and collaboration.'
            ]
        },
        {
            title: 'API Integration',
            details: [
                'Skilled in integrating third-party APIs and working with RESTful services using Axios and Fetch.',
            ]
        },
        {
            title: 'Performance Optimization',
            details: [
                'Expertise in optimizing React applications for performance, memoization, and code splitting.',
                'Knowledge of React’s reconciliation process and strategies for improving app performance.'
            ]
        },
    ];

    return (
        <Box sx={styles.container}>
            <Typography className="name_title_style" style={{ textAlign: "unset !important", marginBottom: '20px' }}>My Expertise</Typography>
            <Box sx={styles.expertiseList}>
                {expertiseData.map((item, index) => (
                    <Box key={index} sx={styles.expertiseItem}>
                        <Typography sx={styles.title}>{item.title}</Typography>
                        <Box sx={styles.details}>
                            {item.details.map((detail, idx) => (
                                <Typography key={idx} sx={styles.detail}>
                                    - {detail}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

 const styles = {
    container: {
        padding: '40px',
        borderRadius: '8px',
        marginTop: '20px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#333',
        marginBottom: '20px',
    },
    expertiseList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flexWrap:'wrap',

    },
    expertiseItem: {
            padding: '20px',
            backgroundColor: 'rgb(111 111 111 / 27%)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
    },
    title: {
        fontSize: '20px',
        fontWeight: '500',
        marginBottom: '10px',
    },
    details: {
        paddingLeft: '20px',
    },
    detail: {
        fontSize: '16px',
        color: '#555',
    },
};

export default Expertise;
