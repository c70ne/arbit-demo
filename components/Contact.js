import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/joy/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'

import styles from '../styles/Home.module.css'

export default function Contact() {

    const ownerGithub = 'https://github.com/c70ne'
    const ownerWebsite = 'https://c70ne.dev'
    const arbitGithub = 'https://github.com/c70ne/arbit'
    const arbitProject = ''

    return (
        <>
            <h3>Contact</h3>
            <hr className={styles.hr}/>
            <div className={styles.card_wrap}>
                <Card sx={{ pt: 1.2, px: 1.2, borderRadius: 5 }}>
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant='h7' 
                            component='div'
                            sx={{ pb: 1 }}
                        >
                            Creator
                        </Typography>
                        <Typography 
                            variant='h7' 
                            color='text.secondary'
                        >
                            <Button 
                                size='sm' 
                                startIcon={<GitHubIcon />}
                                onClick={
                                    () => window.open(ownerGithub, '_blank')
                                }
                            >
                                c70ne
                            </Button>
                            <Button 
                                size='sm' 
                                startIcon={<LanguageIcon />}
                                onClick={
                                    () => window.open(ownerWebsite, '_blank')
                                }
                            >
                                c70ne.dev
                            </Button>                            
                        </Typography>  
                    </CardContent> 
                </Card>
                <Card sx={{ pt: 1.2, px: 1.2, borderRadius: 5 }}>
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant='h7' 
                            component='div'
                            sx={{ pb: 1 }}
                        >
                            GitHub
                        </Typography>
                        <Typography 
                            variant='h7' 
                            color='text.secondary'
                        >
                            <Button 
                                size='sm' 
                                startIcon={<GitHubIcon />}
                                onClick={
                                    () => window.open(arbitGithub, '_blank')
                                }
                            >
                                Code
                            </Button>
                            <Button 
                                size='sm' 
                                startIcon={<GitHubIcon />}
                                onClick={
                                    () => window.open(arbitProject, '_blank')
                                }
                                disabled={true}
                            >
                                Project
                            </Button>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.component_padding}/>
        </>
    )
}