
import React, { useState } from 'react'


const VideoModal = () => {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };


  return (
    <div className="v-modal-area">
      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={openModal}><i className="fi flaticon-play"></i></button>
          </li>
        </ul>
      </div>
      <div className="v-modal-wrap">
        {modal ? (
          <section className="modal__bg">
            <button onClick={openModal} className="close">
              <i className='fa fa-close'></i>
            </button>
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <div className="modal__video-align">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/GFkcwjHdgLA?si=2hA19Qd_W1Er0C6S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}

export default VideoModal;