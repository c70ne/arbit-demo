import { getSession } from 'next-auth/react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Button from '@mui/joy/Button'
import Add from '@mui/icons-material/Add'

import css from '../../styles/General.module.css'
import Cards from '../../components/Cards'
import Header from '../../components/Header'

export async function getServerSideProps(context) {

    const session = await getSession(context)
  
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
  
    return {
        props: { session }
    }
}

export default function Analytics({ children }) {

    // state for holding an array of analytics cards.
    const [cardData, setCardData] = useState([])

    function createCard() {
        // function currently creates new card in state.
        // soon to be migrated to user accounts on mongoDB.
        setCardData([
            ...cardData, 
            {
                id: nanoid(), 
                title: '',
                token0: '',
                token1: '',
                token0Id: '',
                token1Id: '', 
                view: 'Pair Swaps',
                dexPairId: '',
                dexTitle: 'Uniswap',
                dexToken0: '',
                dexToken1: '',
                dexToken0Id: '',
                dexToken1Id: '',
                dexData: [],
                labels: [],
                dateLabels: [],
                created: Date.now(),
                deleted: '',
                editing: 'true',
                isFavourite: false
            }
        ])
    }
    
    function cardHandler(event) {
        // desctructure required event.target properties.
        const { id, name, value } = event.target
    
        // map to identify and update card that triggered the event.
        const newCards = cardData.map(card => {
            if (id == card.id) {
                return {
                    ...card, 
                    [name]: value
                }
            }
            return card
        })
        setCardData(newCards)
    }
    
    function menuHandler(event) {
        // destructure id and custom dataset values from event.target.
        const { id, dataset: {name, value} } = event.target

        // map to identify and update card that triggered the event.
        const newCards = cardData.map(card => {
            if (id == card.id) {
                return {
                    ...card, 
                    [name]: value
                }
            }
            return card
        })
        setCardData(newCards)
    }

    return (
        <div className={css.container}>
            {children}
            <div className={css.body}>
                <div className={css.header}>
                    <Header>
                        <Button 
                            aria-label="New Card"
                            variant='outlined'
                            color="neutral"
                            size='sm'
                            startIcon={<Add sx={{ fontSize: '1rem' }} />}
                            onClick={createCard}
                        >
                            New
                        </Button>
                    </Header>
                </div>
                <div className={css.main}>
                    <Cards 
                        cardData={cardData} 
                        setCardData={setCardData}
                        cardHandler={cardHandler}
                        menuHandler={menuHandler}
                    />
                </div>
            </div>
        </div>
    )
}