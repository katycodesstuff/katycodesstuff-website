import DefaultPage from '../components/DefaultPage/DefaultPage'
import ServiceOption from '../components/ServiceOption/ServiceOption'
import ServiceOptionsContainer from '../components/ServiceOptionsContainer/ServiceOptionsContainer'

interface Props {}

function Partnerships(props: Props) {
    const {} = props

    return (
    <DefaultPage>
        <div className='centered'>
            <h1>Partnerships</h1>
            <p>Do you want to get your message out to a large audience of 18000+ Twitter users?</p>

            <p>Do you think my content aligns with your brand? Let’s partner up!</p>

            <p>I offer a range of options below where we can collaborate on a post, video or article.</p>
            
            <h2>Services</h2>

            <ServiceOptionsContainer>
                <ServiceOption ranking={1} />
            </ServiceOptionsContainer>
        
        </div>
    </DefaultPage>
    )
}

export default Partnerships
