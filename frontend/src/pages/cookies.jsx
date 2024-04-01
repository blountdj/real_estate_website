import Navbar from '../components/navbar/navbar'
import config  from '../config'
import './cookiesPolicy.scss'

const Cookies = () => {

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <section className="cookies_main">
                <div className="cookies_main_container">
                    
                    <h1 className="cookies_main_h1">Cookies Policy</h1>
                    <p className="cookies_main_p">This Cookies Policy describes how {config.name} ("we", "us", or "our") uses cookies and similar tracking technologies on our website {config.url} (the "Site").</p>
                    
                    <h2 className="cookies_main_h2">What are Cookies?</h2>
                        <p className="cookies_main_p">Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They are used by website owners to provide certain functionalities, analyze website usage, and personalize content and advertisements.</p>
                    
                    <h2 className="cookies_main_h2">Types of Cookies We Use</h2>
                        <ul>
                            <li><p className="cookies_main_p"><span className="cookies_main_span">Essential Cookies:</span>These cookies are necessary for the proper functioning of the website and cannot be disabled. They enable core functionalities such as page navigation, access to secure areas, and form submissions.</p></li>
                            <li><p className="cookies_main_p"><span className="cookies_main_span">Analytical/Performance Cookies:</span>These cookies allow us to collect information about how visitors use our website, such as which pages are visited most frequently and if users encounter error messages. This helps us improve the performance and usability of our website.</p></li>
                            <li><p className="cookies_main_p"><span className="cookies_main_span">Functionality Cookies:</span>These cookies enable enhanced features and personalization, such as remembering your preferences (e.g., language or region selection) and providing personalized content based on your interactions with the website.</p></li>
                            <li><p className="cookies_main_p"><span className="cookies_main_span">Marketing/Advertising Cookies:</span>These cookies are used to deliver advertisements relevant to your interests and to track the effectiveness of our advertising campaigns. They may also be used by third-party advertisers to build a profile of your interests and show you targeted advertisements on other websites.</p></li>
                        </ul>
                    
                    <h2 className="cookies_main_h2">Your Consent</h2>
                    <p className="cookies_main_p">By using our website, you consent to the use of cookies and similar tracking technologies as described in this Cookies Policy. You can withdraw your consent at any time by adjusting your browser settings to reject cookies or by clearing your browser's cookie cache.</p>
                    
                    <h2 className="cookies_main_h2">Managing Cookies</h2>
                    <p className="cookies_main_p">You can manage your cookie preferences and settings in your browser's settings menu. Most web browsers allow you to block or delete cookies, and you can also set preferences for certain types of cookies (e.g., first-party vs. third-party cookies).</p>
                    
                    <h2 className="cookies_main_h2">Changes to This Cookies Policy</h2>
                    <p className="cookies_main_p">We may update this Cookies Policy from time to time, and any changes will be effective when posted on this page. We encourage you to review this Cookies Policy periodically for any updates.</p>
                                        
                    <h2 className="cookies_main_h2">Contact Us</h2>
                    <p className="cookies_main_p">If you have any questions or concerns about our Cookies Policy or our practices regarding your personal information, please contact us at {config.contact_email}.</p>
                </div>
            </section>
        </>
    )
}

export default Cookies