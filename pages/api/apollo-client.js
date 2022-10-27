import { 
    ApolloClient, 
    ApolloLink, 
    InMemoryCache, 
    HttpLink
} from '@apollo/client'

const sushiswapLink = new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange'
})

const uniswapLink = new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'
})

const client = new ApolloClient({
    link: ApolloLink.split(
        operation => operation.getContext().clientName === 'sushi',
        // route if clientName is 'sushi'.
        sushiswapLink,
        // if not 'sushi' apollo will route to this link.
        uniswapLink
    ),
    cache: new InMemoryCache()
})

export default client