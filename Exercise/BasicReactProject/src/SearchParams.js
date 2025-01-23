import React, { useState } from "react";
const SearchParams = () => {
    const [location,setLocation] = useState("")

    const handleOnChange = (e) => {
        setLocation(e.target.value)
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location 
                    <input id="location" value={location} onChange={handleOnChange} placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;