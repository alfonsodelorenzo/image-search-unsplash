import { useState } from 'react'
import Unsplash, { toJson } from 'unsplash-js';

function SearchImage() {

    const unsplash = new Unsplash({ accessKey: 'h3-KmFAKZWBzTMTS_QOgsOyBPv-GTvnrIJ3IH1Q0ViA' });
    const [photo, setPhoto] = useState([]);

    function getTitle(value) {

        unsplash.search.photos(value)
            .then(toJson)
            .then(json => {
                setPhoto(json.results);
               
            });

    }



    return (
        <>
            <div className="App">
                <h1>React Search Image From UNSPLASH</h1>
                <input onChange={event => getTitle(event.target.value)} type="text" placeholder='Search...' />
            </div>
            {
                photo.map((data, index) => {
                   
                    let urlImg = data.urls.regular
                    return (
                        <div className="conteiner">
                            <img className="card-image" src={urlImg}></img>
                        </div>
                    );
                    
                }
                )
            }

        </>
    )


}

export default SearchImage;
