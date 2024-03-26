import React from "react";
import search_icon from '../../assets/icons/search.svg'
import "./filter.scss";

const Filter = ({ page, more_filters }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <div className={`${page}_filter`} id={`${page}_filter`}>
        <form className="filter_form" onSubmit={handleSubmit}>
            <div className="filter_form_container divider">
                <label className="filter_form_container_label" htmlFor="buy_rent">Buy / Rent</label>
                <select className="filter_form_container_select no_icon" id="buy_rent" name="buy_rent">
                    <option value="all">All</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                    <option value="rent_buy">Rent, Buy</option>
                </select>
            </div>

            <div className="filter_form_container divider">
                <label className="filter_form_container_label" htmlFor="property_type">Property Type</label>
                <div className="select-category-container">
                    <select className="filter_form_container_select no_icon" id="property_type" name="property_type">
                        <option value="all">All</option>
                        <option value="new_build">New Build</option>
                        <option value="offices">Offices</option>
                        <option value="residential">Residential</option>
                        <option value="retail">Retail</option>
                        <option value="plot">Plot</option>
                    </select>
                </div>
            </div>

            <div className="filter_form_container divider">
                <label className="filter_form_container_label" htmlFor="town">Town</label>
                <select className="filter_form_container_select no_icon" id="town" name="town">
                    <option value="all">All</option>
                    <option value="gandia">Gandia</option>
                    <option value="bonrepos">Bonrepos y Mirambell</option>
                    <option value="picanya">Picanya</option>
                    <option value="alicante">Alicante</option>
                    <option value="requena">Requena</option>
                    <option value="valencia">Valencia</option>
                    <option value="betera">Betera</option>
                    <option value="montserrat">Montserrat</option>
                    <option value="chiva">Chiva</option>
                    <option value="denia">Denia</option>
                </select>
            </div>

            <div className="filter_form_container">
                <label className="filter_form_container_label" htmlFor="price">Price:</label>
                <div className="price-dropdowns flex-center">
                    <select className="filter_form_container_select select_price" id="min-price" name="min-price">
                        <option value="min">Min</option>
                        <option value="100,000">$100,000</option>
                        <option value="200,000">$200,000</option>
                        <option value="300,000">$300,000</option>
                        <option value="400,000">$400,000</option>
                        <option value="500,000">$500,000</option>
                        <option value="600,000">$600,000</option>
                        <option value="700,000">$700,000</option>
                        <option value="800,000">$800,000</option>
                        <option value="900,000">$900,000</option>
                        <option value="1,000,000">$1,000,000</option>
                    </select>

                    <select className="filter_form_container_select select_price" id="max-price" name="max-price">
                    <option value="max">Max</option>
                        <option value="100,000">$100,000</option>
                        <option value="200,000">$200,000</option>
                        <option value="300,000">$300,000</option>
                        <option value="400,000">$400,000</option>
                        <option value="500,000">$500,000</option>
                        <option value="600,000">$600,000</option>
                        <option value="700,000">$700,000</option>
                        <option value="800,000">$800,000</option>
                        <option value="900,000">$900,000</option>
                        <option value="1,000,000">$1,000,000</option>
                    </select>
                </div>
            </div>

            <button className="filter_search button flex-center"type="submit">
                <img className="search_icon" src={search_icon} alt="search_icon" />
                <div className="filter_search_text">search</div>
            </button>

        </form>
    </div>
  )
};

export default Filter;