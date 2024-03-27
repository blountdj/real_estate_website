import './search_bar.scss'

import search from '../../assets/icons/search_black.svg'

const SearchBar = () => {

    // create the return statement that will display the search bar
    return (
        <div className="search-bar">
            <img className="search-bar_icon" src={search} alt="search icon" />
            <input className='search-bar_input' type="text" placeholder="Search properties..." />
        </div>
    )
     


}

export default SearchBar
