import './Footer.css'

function Footer() {

    return (
        <footer>
            <div className='footer-flex-item'>
            <h1>Katy Ashby</h1>
            <p>This website was designed and created by Katy using React, TypeScript and hosted on Netlify.</p>
            <p>©️ KatyCodesStuff - Katy Ashby 2022</p>
            <p className="footer-attributes"><a href="https://www.flaticon.com/free-icons/uk" title="UK icon">UK icon created by surang - Flaticon</a></p>
            </div>

            <div className='footer-flex-item'>
            <h1>Let’s stay in touch!</h1>
            <p>I’d love to hear from you!<br />Send me an email or send me a DM on Twitter with your request.</p>
            <p>EMAIL<br /><a href='mailto:katycodesstuff@gmail.com'>katycodesstuff@gmail.com</a></p>
            <p>TWITTER<br /><a href='https://twitter.com/KatyCodesStuff'>@KatyCodesStuff</a></p>
            </div>
        </footer>
    )
}

export default Footer
