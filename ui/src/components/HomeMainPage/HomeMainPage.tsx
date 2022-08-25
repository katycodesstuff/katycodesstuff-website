import './HomeMainPage.css'

interface Props {}

function HomeMainPage(props: Props) {
    const {} = props

    return (
        <>
        <h1>About Katy</h1>
        <p className='bigger-margin'>Hello! I’m Katy Ashby. <br />
        I started my tech career as a Physics graduate, <br />
        who liked the “coding bits” of my course.<br />
        Fast forward to today, and I have been working as a Software Developer for 5 years, moving up quickly from Junior to Senior and Lead roles.
        </p>
        <p>
        My expertise is primarily within C# and .NET, alongside Angular and TypeScript on the front end. 
        I have a DevOps mentality with extensive experience in managing infrastructure via Azure cloud, Docker and Kubernetes.
        </p>
        <p>
        I started my Twitter account in September 2021 as a means to share my insights into being a Senior Developer and leader within tech. 
        Since then it has grown into a community of over 18,000!</p>

        <h1>Latest Tweets</h1>

        <p> Todo </p>

        <h1>Latest Articles</h1>

        <p>Todo</p>
        </>
    )
}

export default HomeMainPage