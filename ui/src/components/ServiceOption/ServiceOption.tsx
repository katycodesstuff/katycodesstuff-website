import './ServiceOption.css'

interface Props {
    ranking: 1 | 2 | 3
    title: string
    price: number
    currency: string
    description?: string[],
    features?: string[],
    missing?: string[]
}

function ServiceOption(props: Props) {
    const { ranking, ...info } = props
    return (
        <div className={`service-option service-option-ranking-${ranking}`}>
            <div className='service-option-title'>{info.title}</div>
            <div className='service-option-price'>{info.currency}{info.price}</div>
            <div className='service-option-description'>{getDescription(props)}</div>
        </div>
    )
}

function getDescription(props: Props): JSX.Element {
    let features: JSX.Element[] = []
    let missing: JSX.Element[] = []
    let description: JSX.Element | null = null

    if (props.features && props.features.length >= 1) {
        features = props.features.map((d, i) => <li className='features' key={i}>{d}</li>)
    }
    if (props.missing && props.missing.length >= 1) {
        missing = props.missing.map((d, i) => <li className='missing' key={i}>{d}</li>)
    }
    if (features.length === 0 && missing.length === 0) {
        return <></>
    }
    description = <ul>{features}{missing}</ul>
    return description
}

export default ServiceOption
