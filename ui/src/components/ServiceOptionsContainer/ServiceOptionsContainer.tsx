import { PropsWithChildren } from "react"
import './ServiceOptionsContainer.css'

interface Props extends PropsWithChildren{
    headerImage?: {
        imageSrc: string,
        imageTitle: string
    }
}

function ServiceOptionsContainer(props: Props) {
    const {headerImage, children} = props

    return (
        <div className='service-options-container'>
        {headerImage ? <img className='service-options-container-image' src={headerImage?.imageSrc} title={headerImage?.imageTitle} alt={headerImage?.imageTitle}></img>:<></>}
        {children}
        </div>
    )
}

export default ServiceOptionsContainer
