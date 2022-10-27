import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import styles from '../styles/Home.module.css'
import latest from '../data/latest.js'

export default function LatestFeatures() {

    return (
        <>
            <h3>Latest Features</h3>
            <hr className={styles.hr}/>
            <div className={styles.card_wrap}>
                {latest.map(index => (
                    <div className={styles.feature} key={index.id}>
                        <Card sx={{ borderRadius: 5 }}>
                            <CardMedia
                                component='img'
                                height='100'
                                image={index.img}
                                alt={index.alt}
                                sx={{ 
                                    p: index.padding,
                                    backgroundColor: '#000000',
                                    objectFit: 'contain',
                                }}
                            />
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
            <div className={styles.component_padding}/>
        </>
    )
}