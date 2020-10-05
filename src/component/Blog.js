// CREO COMPONENTE BLOG CHE FA UNA CHIAMATA APPENA SI ENTRA NELLA SUA PAGINA
// UTILIZZO GLI HOOKS (useState per il cambio di stato) (useEffect per la chiamata )
// CREO INOLTRE UN LINK PER SPOSTARMI ALLE CARATTERISTICHE DEL SUPEREROE CLICCATO 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    useEffect(() => {
        fetchData();
    }, []); //l'array vuoto indica che la chiamata si avvia non appena la pagina si monta (è vista dall'utente)

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // nello useState passo come valore iniziale un array vuoto che sarà poi riempito dagli oggetti presi dalla chiamata fetch
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const url = await fetch(`https://akabab.github.io/superhero-api/api/all.json`);
        const data = await url.json();
        const posts = data.slice(20, 500) //prende i valori da 20 a 500
        console.log(posts)
        setPosts(posts)
    }
    return (
        <div className='superheroes'>
            <h1 className='titleBlog'>SUPERHEROS</h1>
            <div className="wrapperSuperHeroes">
                {posts.map((post, index) => (
                    <div className="div">
                        <h5 key={index}> <Link to={`/blog/${post.id}`}> {post.name}</Link> </h5>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Blog
