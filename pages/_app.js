import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'

import '../styles/globals.css'
import client from './api/apollo-client'
import Nav from '../components/Nav'
import Header from '../components/Header'

export default function MyApp({ 
    Component, 
    pageProps: { session, ...pageProps }, 
}) {
    return (
        <SessionProvider session={session} refetchOnWindowFocus={true}>
            <ApolloProvider client={client}>
                <Component {...pageProps}>
                    <Nav />
                </Component>
            </ApolloProvider>
        </SessionProvider>
    )
}