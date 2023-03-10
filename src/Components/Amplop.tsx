import React, { useState}from 'react'
import BorderLine from './BorderLine'
import Modal from 'react-bootstrap/Modal';
import { Container, Table } from 'react-bootstrap';
import dana1 from '../images/danafani.png'
import dana2 from '../images/danas.png'
import gift from '../images/gift.png'




type AmplopProps = {
    onClickClose: () => void;
};
const Amplop = (props:AmplopProps) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <section>
            <button className="button-time" style={{width:"auto"}} onClick={handleShow}>
                <img className='icon32' src={gift} />
            </button>
            <BorderLine />            
            <h1 className='title-text mt-4'>We expect you to come to our wedding, Thank You!</h1>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Kado Pernikahan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Doa restu anda merupakan karunia yang sangat berarti bagi kami. Jika memberi 
                    adalah ungkapan tanda selamat, anda dapat memberi kado ke alamat : <b>Kp. Curug deng-deng No 12 RT 003 RW 004 Kec. Caringin Kab Bogor</b> atau secara online pada :
                    <div className='modal-content-container'>
                        <div className='modal-content'>
                            <img className='modal-content-image' src={dana1}></img>
                            Dana a/n Fani Maharani
                        </div>
                        <div className='modal-content'>
                            <img className='modal-content-image' src={dana2}></img>
                            Dana a/n Syukron Muttaqien
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <button className="button-time" style={{width: 'auto'}} onClick={handleClose}>
                    Close
                </button>
                </Modal.Footer>
            </Modal>-
            <button className="button-time mt-4 mb-4" style={{width: 'auto'}}  onClick={props.onClickClose}>Tutup Undangan</button>
        </section>
    )
}

export default React.memo(Amplop)