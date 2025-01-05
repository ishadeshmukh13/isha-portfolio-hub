import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Contact = () => {
    return (
        <Box style={styles.container}>
            <Typography className="name_title_style" style={{ textAlign: "unset !important", marginBottom: '20px' }}>Contact Me</Typography>
            <Typography style={styles.ctaText}>
                Have an exciting project you need help with?
                <br />
                Send me an email or contact me via instant message!
            </Typography>
            <Box style={styles.contactInfo}>
                <Typography style={styles.infoText}>
                    <strong>Email : </strong>
                    <Link href="mailto:ishakawadkar13@gmail.com" style={styles.link}>
                        ishakawadkar13@gmail.com
                    </Link>
                </Typography>
                <Typography style={styles.infoText}>
                    <strong>LinkedIn : </strong>
                    <Link href="https://www.linkedin.com/in/isha200313" target="_blank" style={styles.link}>
                        linkedin.com/in/isha200313
                    </Link>
                </Typography>
                <Typography style={styles.infoText}>
                    <strong>GitHub : </strong>
                    <Link href="https://github.com/ishadeshmukh13" target="_blank" style={styles.link}>
                        github.com/ishadeshmukh13
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

const styles = {
    ctaText: {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '16px',
        color: '#333',
        marginBottom: '20px',
        fontWeight: 500
    },
    container: {
        padding: '40px',
        textAlign:'center'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    infoText: {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '16px',
        color: '#333',
    },
    link: {
        color: '#0084CA',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
};

export default Contact;
