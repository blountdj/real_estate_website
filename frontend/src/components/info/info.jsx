import useScrollVisibility from '../../utilities/useScrollVisibility';
import './info.scss'

const Info = ({ page, index, header, textList, button, button_text, button_link }) => {

    const isVisible = useScrollVisibility(`.${page}_info_${index}`);

    const buttonElem = button === "true" 
        ? <button className={`${page}_info_button`} onClick={() => window.location.href = button_link}>{button_text}</button>
        : ""

    const textElem = textList.map(text => {
        return <p className={`${page}_info_p`}>{text}</p>
    })

    return (
        <div className={`${page}_info ${page}_info_${index} ${isVisible ? 'visible' : 'notVisible'}`}>

            <h2 className={`${page}_info_h2`}>{header}</h2>
            <div className={`${page}_info_container`}>
                {textElem}  
            </div>
            {buttonElem}
        </div>
    )
}

export default Info