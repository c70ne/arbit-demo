import ClientOnly from './ClientOnly'
import Pairs from './Pairs'

export default function ClientSide({id, name, value, dexTitle, view, cardHandler}) {
    return (
        <>
            <ClientOnly>
                <Pairs 
                    id={id} 
                    name={name} 
                    value={value}
                    dexTitle={dexTitle}
                    view={view}
                    cardHandler={cardHandler} 
                />
            </ClientOnly>
        </>
    )
}