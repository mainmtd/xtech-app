import React from 'react'

import './User.css'

const User = () => {
    return(
        <>
            <div className="User-Search">
                <select className="User-Selection">
                    <option value="" disabled selected hidden>Select type</option>
                    <option>User ID</option>
                    <option>USERNAME</option>
                </select>
                <button className="User-SearchButton">SEARCH</button>
            </div>
        </>
    )
    
}

export default User;