import {Container, Typography, Box} from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh', // This makes the container take up the full viewport height
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 10">
                    <rect x="0" y="4" width="50" height="2" style="fill:black"/>
                    <circle cx="0" cy="5" r="5" style="fill:black"/>
                    <circle cx="50" cy="5" r="5" style="fill:black"/>
                </svg>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Gym Data Log
                </Typography>
                <Typography variant="h6" component="p">
                    Track your workouts and progress over time.
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;