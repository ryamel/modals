import React from 'react'

const Modal = (props) => {

  return (
    <div className='modal' style={{top: props.top.toString() + 'px', left: props.left.toString() + 'px'}}>
      <button className='createModal-btn' onClick={() => props.addModal()}>
        Create modal
      </button>
      <button className='deleteModal-btn' onClick={() => props.deleteThisModal(props.id)}>
        Close modal
      </button>
    </div>
  )
}

export default Modal;
