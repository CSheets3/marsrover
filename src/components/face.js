import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function MyFace(){
    const rurl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Y7KiOgTiki3ySb2b8ZzlftZmSKXo4JJeQuZfWhVf';
    const [items, setItems] = useState(null);
     let content = null;

     {/* Just fetching the url */}
    useEffect(() => {
        fetch(rurl)
        .then(response => {
            response.json()
        .then(result => {
            setItems(result);
        })
        })
    }, [rurl])
    console.log(items);

        {/* If items returns true then this happens */}

    if(items){                          
        content = 
        <div className={'structure'}>
            <div className={'frames'}>
                <img className={'images'} src={items.photos[0].img_src} alt={items.photos[0].id} />
                <h1 className={'testing'}>Rover: {items.photos[0].rover.name}</h1>
                <p className={'testing'}>{items.photos[0].camera.full_name}</p>
                <p className={'testing'}>Date: {items.photos[0].earth_date}</p>
            </div >
            <div className={'frames'}>
                <img className={'images'} src={items.photos[1].img_src} alt={items.photos[1].id} />
                <h1 className={'testing'}>Rover: {items.photos[1].rover.name}</h1>
                <p className={'testing'}>{items.photos[1].camera.full_name}</p>
                <p className={'testing'}>Date: {items.photos[1].earth_date}</p>
            </div>
            <div className={'frames'}>
                <img className={'images'} src={items.photos[2].img_src} alt={items.photos[2].id} />
                <h1 className={'testing'}>Rover: {items.photos[2].rover.name}</h1>
                <p className={'testing'}>{items.photos[2].camera.full_name}</p>
                <p className={'testing'}>Date: {items.photos[2].earth_date}</p>
            </div>
            <div className={'frames'}>
                <img className={'images'} src={items.photos[3].img_src} alt={items.photos[3].id} />
                <h1 className={'testing'}>Rover: {items.photos[3].rover.name}</h1>
                <p className={'testing'}>{items.photos[3].camera.full_name}</p>
                <p className={'testing'}>Date: {items.photos[3].earth_date}</p>
            </div>
            <div className={'frames'}>
                <img className={'images'} src={items.photos[4].img_src} alt={items.photos[4].id} />
                <h1 className={'testing'}>Rover: {items.photos[4].rover.name}</h1>
                <p className={'testing'}>{items.photos[4].camera.full_name}</p>
                <p className={'testing'}>Date: {items.photos[4].earth_date}</p>
            </div>
            <div className={'frames'}>
                <img className={'images'} src={items.photos[5].img_src} alt={items.photos[5].id} />
                <h1 className={'testing'}>Rover: {items.photos[5].rover.name}</h1>
                <p className={'testing'}>{items.photos[5].camera.full_name}</p>
                <p className={'testing'}>Date: {items.photos[5].earth_date}</p>
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )

}

export default MyFace;