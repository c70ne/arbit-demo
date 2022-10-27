import { getSession } from 'next-auth/react'
import Head from 'next/head'

import css from '../../styles/General.module.css'
import Header from '../../components/Header'
import Overview from '../../components/Overview'

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

export default function Home({ children }) {

    return (
        <div className={css.container}>
            <Head>
                <title>ARBIT</title>
                <meta 
                    name="description" 
                    content="ARBIT - trading education, utilities and community." 
                />
            </Head>
            {children}
            <div className={css.body}>
                <div className={css.header}>
                    <Header />
                </div>
                <div className={css.main}>
                    <Overview />
                </div>
            </div>
        </div>
    )
}