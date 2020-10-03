import React from 'react'

function Modal(props) {
    return (
        <div className='modal-wrapper' style={{ transform: props.isOpen ? 'translateY(0vh)' : 'translateY(-100vh)' }}>
            <h2>TITOLO </h2>
            {props.children}
        </div>

    )
}

export default Modal
