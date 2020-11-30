import React from 'react'

import './Client.css'

const Client = () => {
    return(
        <>
            <div className="Client-Search">
                <select className="Client-Selection">
                    <option value="" disabled selected hidden>Select type</option>
                    <option>CLIENT ID</option>
                    <option>CLIENT NAME</option>
                </select>
                <button className="Client-SearchButton">SEARCH</button>
            </div>
        </>
    )
    
}

export default Client;