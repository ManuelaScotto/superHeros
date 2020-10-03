import React, { useState } from 'react';
import Modal from './Modal';

function Home() {
    const [modal, setModal] = useState(false)

    const handleClick = () => setModal(!modal)

    return (

        <div className='container-modal'>
            <button onClick={handleClick}>{modal ? 'Chiudi' : 'Apri'} MODAL</button>
            <Modal isOpen={modal} >
                <div className='titleHome'></div>
            </Modal>
        </div>
    )
}

export default Home
