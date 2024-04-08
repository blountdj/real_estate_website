import facebook from '../../assets/social_media/social_media_facebook_light_grey.svg';
import twitter from '../../assets/social_media/social_media_twitter.svg';
import linkedin from '../../assets/social_media/social_media_linkedin2.svg';
import './social_share_bar.scss';

const SocialShareBar = () => {

    return (
        <div className='social_share_bar'>
            Share : 
                <a className="social_share_bar_a" href="#"><img className="social_share_bar_img" src={facebook} alt="facebook icon" /></a>
                <a className="social_share_bar_a" href="#"><img className="social_share_bar_img" src={twitter} alt="twitter icon" /></a>
                <a className="social_share_bar_a" href="#"><img className="social_share_bar_img" src={linkedin} alt="linkedin icon" /></a>
        </div>
    )
}

export default SocialShareBar;