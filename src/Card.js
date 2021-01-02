import React from "react";

const Card = ( { name, email, id} ) => {
    return (
        <div className=' bg-light-green dib br3 pa3 ma2 grow shadow-5 tc'>
            <img alt ='photo' src={`https://robohash.org/${id}?100x100`}></img>
            <div>
            <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;