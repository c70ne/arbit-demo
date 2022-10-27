import { nanoid } from 'nanoid'
import { gql, useQuery } from '@apollo/client'

import styles from '../styles/Analytics.module.css'

// query for top 10 pairs by USD volume traded on uniswap.
const UNISWAP_PAIR_QUERY = gql`
    {
        pools(first: 10, orderBy: volumeUSD, orderDirection: desc) {
            id
            volumeUSD
            token0 {
                symbol
            }
            token1 {
                symbol
            }
        }
    }
`

// query for top 10 pairs by USD volume traded on sushiswap.
const SUSHISWAP_PAIR_QUERY = gql`
    {
        pairs(first: 10, orderBy: volumeUSD, orderDirection: desc) {
            id
            volumeUSD
            token0 {
                symbol
            }
            token1 {
                symbol
            }
        }
    }
`

export default function Pairs({id, name, value, dexTitle, view, cardHandler}) {

    // useQuery hook runs a query on component mount.
    const { data, loading, error } = useQuery(UNISWAP_PAIR_QUERY, {
        // client selection can be 'uni' or 'sushi'.
        context: { clientName: "uni" },
        // initial request is made only to the server.
        fetchPolicy: 'network-only',
        // fetch from the server if cached data is outdated.
        nextFetchPolicy: 'cache-and-network' 
    })

    // while loading return 'loading...' option element.
    if (loading) {
        return (
            <select className={styles.top_right_select}>
                <option>Loading...</option>
            </select>
        )
    }

    // if error loading data return 'error...' option element.
    if (error) {
        console.error(error)
        return (
            <select className={styles.top_right_select}>
                <option>Error loading data...</option>
            </select>
        )
    }

    return (
        <select 
            className={styles.top_right_select} 
            id={id}
            name={name}            
            value={value}
            onChange={cardHandler}
            disabled={view == 'All Swaps' ? true : false}
            required
        >
            <option value='' disabled>- - select - -</option>
            {data.pools.map(data => (
                <option key={nanoid()} value={data.id}>
                    {`${data.token0.symbol} - ${data.token1.symbol}`}
                </option>
            ))}
        </select>
    )
}