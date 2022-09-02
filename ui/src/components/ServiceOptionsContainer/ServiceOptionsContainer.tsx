import { PropsWithChildren } from "react"

function ServiceOptionsContainer(props: PropsWithChildren) {
    const {children} = props

    return (
        <div className='service-options-container'>
        {children}
        </div>
    )
}

export default ServiceOptionsContainer
