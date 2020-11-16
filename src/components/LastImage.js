import { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

function LastImage() {
    const unsplash = new Unsplash({ accessKey: 'h3-KmFAKZWBzTMTS_QOgsOyBPv-GTvnrIJ3IH1Q0ViA' });
    const [lastphoto, setLastPhoto] = useState([]);

    useEffect(() => {
        unsplash.search.photos("latest")
            .then(toJson)
            .then(json => {   
                setLastPhoto(json.results);
            })
    }, [])

    return (
        <>
            <h2>Ultime Immagini Caricate</h2>
            {
                lastphoto.map((data, index) => {
                    return (
                        <>
                        {console.log(data)}
                        <div className="conteiner">
                            <img className="card-image" src={data.urls.regular}></img>
                        </div>
                        </>
                    );
                })
            }
        </>
    );
}

export default LastImage;