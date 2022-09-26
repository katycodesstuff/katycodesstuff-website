import DefaultPage from '../components/DefaultPage/DefaultPage'
import ServiceOption from '../components/ServiceOption/ServiceOption'
import ServiceOptionsContainer from '../components/ServiceOptionsContainer/ServiceOptionsContainer'
import Data from '../services/data'
import Twitter from '../assets/icons/twitter.png'

function Partnerships() {
    return (
    <DefaultPage>
        <div className='centered'>
            <h1>Partnerships</h1>
            <p>Do you want to get your message out to a large audience of {Data.twitterFollowerCount.long}+ Twitter users?</p>

            <p>Do you think my content aligns with your brand? Let’s partner up!</p>

            <p>I offer a range of options below where we can collaborate on a post, video or article.</p>
            
            <h2>Sponsored Tweets</h2>

            <ServiceOptionsContainer headerImage={{imageSrc: Twitter, imageTitle:'Twitter logo'}}>
                <ServiceOption title='1x TWEET' price={250} currency='£' ranking={1} features={['Twitter profile tag', 'Uploaded image', 'Link to your content']} missing={['Threads']}/>
                <ServiceOption title='1x THREAD' price={300} currency='£' ranking={2}  features={['Twitter profile tag', 'Uploaded image', 'Link to your content', 'Up to 6 Tweets in a Thread']}/>
                <ServiceOption title='4x TWEETS' price={900} currency='£' ranking={3} features={['Twitter profile tag', 'Uploaded image', 'Link to your content', 'Use your Tweets at any time!']} />
            </ServiceOptionsContainer>

            <h2>Longer Form Content</h2>
            <p>Coming soon, but if you have any ideas for a collaboration, don't hesitate to reach out!</p>
        
        </div>
    </DefaultPage>
    )
}

export default Partnerships
