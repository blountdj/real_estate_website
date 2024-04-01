import Navbar from '../components/navbar/navbar'
import config  from '../config'
import './privacy_policy.scss'

const Privacy = () => {

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <section className="privacy_main">
                <div className="privacy_main_container">
                    <h1 className="privacy_main_h1">Privacy Policy</h1>
                    <p className="privacy_main_p">This Privacy Policy describes how [{config.name}] ("we", "us", or "our") collects, uses, and shares personal information when you use our website [{config.url}] (the "Site") and the services offered through the Site.</p>
                    <h2 className="privacy_main_h2">Information We Collect</h2>
                        <ul>
                            <li><p className="privacy_main_p"><span className="privacy_main_span">Personal Information:</span>When you visit our Site, we may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other information you provide when contacting us or filling out forms on the Site.</p></li>
                            <li><p className="privacy_main_p"><span className="privacy_main_span">Usage Information:</span> We may also collect non-personal information about your interactions with the Site, such as your IP address, browser type, operating system, referral URLs, and pages viewed, through the use of cookies and similar tracking technologies.</p></li>
                        </ul>
                    <h2 className="privacy_main_h2">How We Use Your Information</h2>
                    <p className="privacy_main_p">We may use the information we collect for the following purposes:</p>
                    <ul>
                        <li className="privacy_main_li">To provide and maintain our services, including responding to inquiries and providing support.</li>
                        <li className="privacy_main_li">To personalize your experience on the Site and to improve our services.</li>
                        <li className="privacy_main_li">To communicate with you about our services, promotions, and updates.</li>
                        <li className="privacy_main_li">To detect, prevent, and address technical issues and security vulnerabilities.</li>
                        <li className="privacy_main_li">To comply with legal and regulatory requirements.</li>
                    </ul>
                    <h2 className="privacy_main_h2">Information Sharing and Disclosure</h2>
                    <p className="privacy_main_p">We may share your personal information with third-party service providers that assist us in operating our website and providing our services. We may also disclose your information in response to legal requests, to protect our rights or property, or to prevent harm.</p>
                    <h2 className="privacy_main_h2">Your Choices and Rights</h2>
                    <p className="privacy_main_p">You may choose not to provide certain personal information, but this may limit your ability to use certain features of the Site. You may also have rights to access, correct, or delete your personal information. Please contact us using the information provided below to exercise these rights.</p>
                    <h2 className="privacy_main_h2">Data Security</h2>
                    <p className="privacy_main_p">We take reasonable measures to protect the security of your personal information and to prevent unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
                    <h2 className="privacy_main_h2">Changes to This Privacy Policy</h2>
                    <p className="privacy_main_p">We may update this Privacy Policy from time to time, and any changes will be effective when posted on this page. We encourage you to review this Privacy Policy periodically for any updates.</p>
                    <h2 className="privacy_main_h2">Contact Us</h2>
                    <p className="privacy_main_p">If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at {config.contact_email}.</p>
                </div>
            </section>
        </>
    )
}

export default Privacy