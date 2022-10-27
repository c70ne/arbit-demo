import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
    
export default function Query({id, cardData, setCardData}) {
    
    const thisCard = cardData.findIndex(index => index.id === id)

    // query the first 10 pair swaps of a chosen pool.
    // the pool is selected on the front-end by a user.
    const PAIR_SWAPS_QUERY = gql`
        {
            swaps(
                first: 10, 
                orderBy: timestamp, 
                orderDirection: asc, 
                where: { pool: "${cardData[thisCard].dexPairId}" }
            ) {
                amount0
                amount1
                amountUSD
                timestamp
            }
        }
    `
    
    // return all swaps for a chosen exchange.
    // this option is not yet implemented.
    const ALL_SWAPS_QUERY = gql`
        {
            swaps(
                first: 10, 
                orderBy: timestamp, 
                orderDirection: asc, 
            ) {
                token0 {
                    symbol
                }
                token1 {
                    symbol
                }
                amountUSD
                timestamp
            }
        }
    `

    // useQuery hook will run a query on component mount.
    // destructure loading, data and error for purposes below.
    const { loading, data, error } = useQuery(PAIR_SWAPS_QUERY, {
        context: { clientName: "uni" },
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
        pollInterval: 60000
    })

    useEffect(() => {
        if (data) {
            // map over data returned from query.
            const newCard = cardData.map(card => {
                if (card.id == id) {
                    return {
                        // spread operator to include all data.
                        ...card,
                        // USD value of each swap.
                        dexData: data.swaps.map(x => x.amountUSD),
                        // timestamp of swap in epoch format.
                        labels: data.swaps.map(x => x.timestamp),
                        // timestamp of swap in GMT date format.
                        dateLabels: data.swaps.map(x => {
                            const myDate = new Date(x.timestamp * 1000)
                            return myDate.toGMTString()
                        })
                    }
                }
                return card
            })
            setCardData(newCard)
        }
    }, [loading && !data])
    
    if (error) console.error(error)

    return (null)
}