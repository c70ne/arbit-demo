import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import styles from '../styles/Analytics.module.css'
import CardMenu from './CardMenu'
import ClientSide from './client-side'
import Query from './Query'
import BarChart from './BarChart'

export default function Cards(props) {

    const { cardData, setCardData, cardHandler, menuHandler } = props

    const cards = cardData.map(card => {
        return (
            <div className={styles.card} key={card.id}>
                <div className={styles.card_header}>
                    <div className={styles.card_title}>
                        {card.editing === 'false' ? card.title :
                        <input 
                            type='text'
                            placeholder='Untitled'
                            className={styles.card_title_input}
                            id={card.id}
                            name='title'
                            value={card.title}
                            onChange={cardHandler}
                        />}
                    </div>
                    <div className={styles.card_menu}>
                        {card.isFavourite == 'true' && 
                        <button 
                            className={styles.card_menu_item}
                            data-key={card.id}
                            name='isFavourite'
                            value={false}
                            onClick={cardHandler}
                            style={{ 
                                opacity: 0.2,
                                backgroundImage: 'url(/pin.svg)',
                                width:'24px',
                                height: '24px'
                            }}
                        />}
                        <CardMenu 
                            id={card.id} 
                            cardData={cardData} 
                            setCardData={setCardData}
                            menuHandler={menuHandler}
                        />
                    </div>
                </div>
                <div className={styles.card_body}>
                    {card.editing === 'true' ? 
                    <div className={styles.data_selection}>
                        <div className={styles.top_left}>
                            <p className={styles.top_left_title}>
                                1. DEX
                            </p>
                            <select 
                                className={styles.top_left_select}
                                id={card.id}
                                name='dexTitle'
                                value={card.dexTitle}
                                onChange={cardHandler}
                                required
                            >
                                <option>
                                    Uniswap
                                </option>
                                <option disabled>
                                    Sushiswap
                                </option>
                            </select>
                        </div>
                        <div className={styles.top_right}>
                            <p className={styles.top_right_title}>
                                2. View <small>(USD)</small>
                            </p>
                            <select 
                                className={styles.bottom_left_select}
                                id={card.id}
                                name='view'
                                value={card.view}
                                onChange={cardHandler}
                                required
                            >
                                <option>
                                    Pair Swaps
                                </option>
                                <option disabled>
                                    All Swaps
                                </option>
                            </select>
                        </div>
                        {/* <div className={styles.top_left}>
                            <Box>
                                <FormControl fullWidth size='small'>
                                    <InputLabel 
                                        id='dex-select-label'
                                    >
                                        DEX
                                    </InputLabel>
                                    <Select
                                        labelId='dex-select-label'
                                        id={card.id}
                                        name='dexTitle'
                                        value={card.dexTitle}
                                        label='dex'
                                        onChange={cardHandler}
                                        sx={{ minWidth: 10 }}
                                    >
                                        <MenuItem 
                                            value={'Uniswap'}
                                        >
                                            Uniswap
                                        </MenuItem>
                                        <MenuItem 
                                            value={'Sushiswap'} 
                                            disabled
                                        >
                                            Sushiswap
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles.top_right}>
                            <Box>
                            <FormControl fullWidth size='small'>
                                <InputLabel 
                                    id='view-select-label'
                                >
                                    View
                                </InputLabel>
                                <Select
                                    labelId='view-select-label'
                                    id={card.id}
                                    name='view'
                                    value={card.view}
                                    label='view'
                                    onChange={cardHandler}
                                >
                                    <MenuItem 
                                        value={'Pair Swaps'}
                                    >
                                        Pair Swaps
                                    </MenuItem>
                                    <MenuItem 
                                        value={'All Swaps'} 
                                        disabled
                                    >
                                        All Swaps
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            </Box>
                        </div> */}
                        <div className={styles.bottom_left}>
                            <p className={styles.bottom_left_title}>
                                3. Pair {!card.dexPairId && 
                                <span style={{ color: 'red' }}> 
                                    *
                                </span>}
                            </p>
                            <ClientSide
                                id={card.id}
                                name='dexPairId'
                                value={card.dexPairId}
                                dexTitle={card.dexTitle}
                                view={card.view}
                                cardHandler={cardHandler}
                            />
                        </div>
                        <div className={styles.bottom_right}>
                            <button 
                                className={styles.bottom_right_select}
                                id={card.id}
                                name='editing'
                                value={false}
                                disabled={
                                    card.view == 'Pair Swaps' && 
                                    card.dexPairId == '' ? 
                                        true : 
                                        false
                                }
                                onClick={cardHandler}
                            >
                                Submit
                            </button>
                        </div>
                    </div> : 
                    <div>
                        <Query 
                            id={card.id} 
                            cardData={cardData} 
                            setCardData={setCardData} 
                        />
                        <BarChart 
                            id={card.id} 
                            cardData={cardData}
                        />
                    </div>}
                </div>
            </div>
        )
    })

    return (
        <div className={styles.card_grid}>
            {cards}
        </div>
    )
}