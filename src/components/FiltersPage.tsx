import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//   });

export default function FiltersPage() {
    // const classes = useStyles();

    return (
        <Container maxWidth="xl">
            {/* <Box sx={{
                // width: 300,
                height: 120,
                backgroundColor: 'primary.dark',
                // '&:hover': {
                //     backgroundColor: 'primary.main',
                //     opacity: [0.9, 0.8, 0.7],
                // },
            }}> */}
            <Typography variant='h6' className='filter_title'>Filter</Typography>
            {/* </Box> */}

        </Container>
    );
}