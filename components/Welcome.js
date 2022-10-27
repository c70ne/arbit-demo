import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import styles from '../styles/Home.module.css'

export default function Welcome() {

    return (
        <>
            <h3>Welcome</h3>
            <hr className={styles.hr}/>
            <Card sx={{ pt: 1.2, px: 1.2, borderRadius: 5 }}>
                <CardContent>
                    <Typography 
                        variant="h7"
                        sx={{ 
                            fontSize: 16, 
                            lineHeight: 1.6, 
                        }}
                    >
                        Welcome to a limited demo of our trading education,
                        utilities and community platform, where you can 
                        visualise swaps data from the blockchain subgraph 
                        for Uniswap. Visit us again soon to see new features
                        as they are added. We welcome feedback via the contact
                        details below.                   
                    </Typography>  
                </CardContent> 
            </Card>
            <div className={styles.component_padding}/>
        </>
    )
}