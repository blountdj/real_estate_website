import Navbar from '../components/navbar/navbar'
import config  from '../config'
import './conditions.scss'

const Conditions = () => {

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <section className="conditions_main">
                <div className="conditions_main_container">
                    
                    <h1 className="conditions_main_h1">Terms and Conditions of Use</h1>
                    <p className="conditions_main_p">Welcome to {config.name}! These Terms and Conditions of Use ("Terms") govern your use of our website {config.url} (the "Site") and any services offered through the Site.</p>
                    
                    <h2 className="conditions_main_h2">Acceptance of Terms</h2>
                        <p className="conditions_main_p">By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms or our Privacy Policy, please do not use the Site.</p>
                    
                    <h2 className="conditions_main_h2">Use of the Site</h2>
                    <p className="conditions_main_p">You may use the Site for lawful purposes only and in accordance with these Terms. You agree not to use the Site in any way that violates any applicable laws or regulations, infringes on the rights of others, or interferes with the operation of the Site.</p>
                    
                    <h2 className="conditions_main_h2">Intellectual Property</h2>
                    <p className="conditions_main_p">All content on the Site, including text, graphics, logos, images, and software, is the property of [Your Real Estate Website Name] or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from the Site without our prior written consent.</p>
                    
                    <h2 className="conditions_main_h2">User Accounts</h2>
                    <p className="conditions_main_p">Some features of the Site may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                                        
                    <h2 className="conditions_main_h2">Third-Party Links</h2>
                    <p className="conditions_main_p">The Site may contain links to third-party websites or resources. These links are provided for your convenience only and do not imply any endorsement or affiliation with the linked site. We are not responsible for the content or practices of third-party websites and encourage you to review their terms of use and privacy policies.</p>

                    <h2 className="conditions_main_h2">Disclaimer of Warranties</h2>
                    <p className="conditions_main_p">The Site is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted or error-free, or that any defects will be corrected. Your use of the Site is at your own risk.</p>

                    <h2 className="conditions_main_h2">Limitation of Liability</h2>
                    <p className="conditions_main_p">In no event shall [Your Real Estate Website Name] or its affiliates, officers, directors, employees, or agents be liable for any indirect, consequential, incidental, special, or punitive damages, arising out of or in connection with your use of the Site.</p>

                    <h2 className="conditions_main_h2">Changes to These Terms</h2>
                    <p className="conditions_main_p">We may update these Terms from time to time, and any changes will be effective when posted on this page. We encourage you to review these Terms periodically for any updates.</p>

                    <h2 className="conditions_main_h2"></h2>
                    <p className="conditions_main_p"></p>

                    <h2 className="conditions_main_h2">Contact Us</h2>
                    <p className="conditions_main_p">If you have any questions or concerns about these Terms or your use of the Site, please contact us at  {config.contact_email}.</p>
                </div>
            </section>
        </>
    )
}

export default Conditions