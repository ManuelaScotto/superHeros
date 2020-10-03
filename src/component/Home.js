import React, { useState } from 'react';
import Modal from './Modal';

function Home() {
    const [modal, setModal] = useState({
        modal: false
    })

    const handleClick = (e) => {
        const newModal = { modal: true }
        console.log(newModal)
        setModal(newModal)
    }

    const closeModalHandle = () => {
        const newModal = { modal: false }
        setModal(newModal)
    }
    console.log(modal)
    return (

        <div>
            <button onClick={handleClick}>Apri MODAL</button>
            <Modal isOpen={modal} close={closeModalHandle}>
                <div className='titleHome'></div>
            </Modal>
        </div>
    )
}

export default Home
