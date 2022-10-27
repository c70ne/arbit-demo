import { getSession, signIn } from 'next-auth/react'
import Chip from '@mui/joy/Chip'
import Button from '@mui/joy/Button'
import EastIcon from '@mui/icons-material/East'

import css from '../styles/General.module.css'
import styles from '../styles/Login.module.css'
import chips from '../data/chips.js'

export async function getServerSideProps(context) {

    const session = await getSession(context)
  
    if (session) {
        return {
            redirect: {
                destination: '/home',
                permanent: false,
            },
        }
    }
  
    return {
        props: { session }
    }
}

export default function Login() {

    return (
        <div className={css.container}>
            <div className={styles.login}>
                <h1 className={styles.h1}>
                    R
                </h1>
                <h2 className={styles.h2}>
                    ARBIT
                </h2>
                <div className={styles.login_options}>
                    <div>
                        <h3 className={styles.h3}>
                            cloud-based trading suite.
                        </h3>
                        <div className={styles.chips}>
                            {chips.map(chip => {
                                return (
                                    <Chip 
                                        key={chip.id}
                                        className={styles.span} 
                                        sx={{ 
                                            color: 'rgba(253, 247, 242, 1)',
                                            backgroundColor: chip.color 
                                        }}
                                    >
                                        {chip.title}
                                    </Chip>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Button
                    endIcon={<EastIcon />}
                    size='md'
                    onClick={() => signIn()}
                    sx={{ 
                        color: 'rgba(253, 247, 242, 1)', 
                        fontSize: '1rem' 
                    }}
                    >
                    Login
                </Button>
            </div>
        </div>
    )
}