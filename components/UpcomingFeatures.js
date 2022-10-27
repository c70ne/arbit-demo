import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import styles from '../styles/Home.module.css'
import upcoming from '../data/upcoming.js'

export default function UpcomingFeatures() {

    return (
        <>
            <h3>Upcoming Features</h3>
            <hr className={styles.hr}/>
            <div className={styles.card_wrap}>
                {upcoming.map(index => (
                    <div className={styles.feature} key={index.id}>
                        <Card sx={{ borderRadius: 5 }}>
                            <CardContent>
                                <Typography 
                                    gutterBottom 
                                    variant='h7' 
                                    component='div'
                                    sx={{ pt: 1 }}
                                >
                                    {index.title}
                                </Typography>
                                <Typography 
                                    variant='body2' 
                                    color='text.secondary'
                                    sx={{ fontFamily: 'Questrial' }}
                                >
                                    {index.content}
                                </Typography>
                            </CardContent>
                        </Card>  
                    </div>
                ))}
            </div>
        </>
    )
}