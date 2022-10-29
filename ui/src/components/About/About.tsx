import './About.css'
import Data from '../../services/data'
import katy from '../../assets/katy.png'

function About() {

   return (
        <div id='about' className='bigger-margin'>
            {/* <h2>About Katy</h2> */}
            <div className='about-container'>
            <div className='about-section'>
                <h3>Hello! I’m Katy. </h3>
                <p>
                I started my tech career as a Physics graduate,
                who liked the “coding bits” of my course.<br />
                Fast forward to today, and I have been working as a Software Developer for 5 years, moving up quickly from Junior to Senior and Lead roles.
                </p>
                <p>
                My expertise is primarily within C# and .NET, alongside Angular and TypeScript on the front end. 
                I have a DevOps mentality with extensive experience in managing infrastructure via Azure cloud, Docker and Kubernetes.
                </p>
                <p>
                I started my Twitter account in September 2021 as a means to share my insights into being a Senior Developer and leader within tech.<br /> 
                Since then it has grown into a community of over {Data.twitterFollowerCount.long}!</p>
            </div>
            <div className='katy'><img src={katy} alt="Katy"></img></div>
            </div>
        </div>
    )
}

export default About
