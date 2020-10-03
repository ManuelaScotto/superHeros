import React from 'react'

function Modal(props) {
    return (
        <div className='modal-wrapper' style={{ transform: props.isOpen ? 'translateY(0vh)' : 'translateY(-200vh)', opacity: props.isOpen ? 1 : 0 }}>
            {props.children}
        </div>

    )
}

export default Modal
