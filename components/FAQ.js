import { useState } from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import styles from '../styles/Home.module.css'
import faq from '../data/faq'

export default function FAQ() {

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        marginBottom: 12,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 15,
        '&:before': {
            display: 'none',
        },
    }))

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
            }
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, 0)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }))

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }))

    const [expanded, setExpanded] = useState('')

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <>
            <h3>FAQ</h3>
            <hr className={styles.hr}/>
            {faq.map((index) => (
                <Accordion
                    key={index.key} 
                    expanded={expanded === index.key} 
                    onChange={handleChange(index.key)}
                >
                    <AccordionSummary 
                        aria-controls={index.ariaControls}
                        id={index.id}
                    >
                        <Typography 
                            variant='h7'
                        >
                            {index.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant='h7'
                            color='text.secondary'
                        >
                            {index.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )
}