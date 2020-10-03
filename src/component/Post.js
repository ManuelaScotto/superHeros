// CREO COMPONENTE POST PER RECUPERARE I DATI DI QUELL'ELEMENTO CLICCATO
// UTILIZZO LE CLASSI E QUINDI IL COMPONENENTDIDMOUNT per inserire la chiamata
// UTILIZZO LA LIBRERIA AXIOS per effettuare la chiamata asincrona
// npm i axios
// HO IMPORTATO INOLTRE FONT-AWESOME per utilizzare una sua icona
//  npm install --save @fortawesome/react-fontawesome
// npm install--save @fortawesome/free-brands-svg-icons
// npm install--save @fortawesome/free-regular-svg-icons
// Poi ho recuperato l'icona che mi interessa {faArrowAltCircleLeft}
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

export class Post extends Component {

    //////////////////////////////////////////////////////////////////
    // creo lo state iniziale con tutti i valori che mi servono vuoti 
    //////////////////////////////////////////////////////////////////

    state = {
        title: '',
        testo: '',
        img: '',
        work: '',
        powerstats: ''
    }
    async componentDidMount() {

        //////////////////////////////////////////////////////////////////
        // recupero l'id del post selezionato al click tramite this.props.match.params.id per inserirlo nell'url della chiamata
        //////////////////////////////////////////////////////////////////

        const idPost = this.props.match.params.id;
        const res = await axios.get(`https://akabab.github.io/superhero-api/api/id/${idPost}.json`)

        //////////////////////////////////////////////////////////////////
        //inserisco nel setState i valori recuperati dalla chiamata (res)
        //////////////////////////////////////////////////////////////////

        this.setState({
            id: res.data.id,
            title: res.data.name,
            img: res.data.images.md,
            work: res.data.work.occupation,
            powerstats: res.data.powerstats
        })
    }
    render() {
        return (
            <div style={{ margin: 10 }}>
                <div className="containerSuper">
                    <div className="power">

                        {/*  ////////////////////////////////////////////////////////////////// 
                        creo un link con l'icona di font-awesome per poter tornare alla pagina precedente
                         //////////////////////////////////////////////////////////////////*/}

                        <Link to={`/blog`} ><FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon' /></Link>
                        <h1 className='titleSuper'>{this.state.title}</h1>
                        <h2>QUALITA'</h2>
                        <h4>intelligenza: {this.state.powerstats.intelligence}</h4>
                        <h4>velocità: {this.state.powerstats.speed}</h4>
                        <h4>energia: {this.state.powerstats.power}</h4>
                        <h4>forza: {this.state.powerstats.strength}</h4>
                        <h2>PROFESSIONE</h2>
                        <h4>{this.state.work}</h4>
                    </div>
                    <img src={this.state.img} alt="" />
                </div>
            </div>
        )
    }
}

export default Post

