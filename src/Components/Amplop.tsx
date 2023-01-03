import React, { useState}from 'react'
import BorderLine from './BorderLine'
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';




type AmplopProps = {
    onClickClose: () => void;
};
const Amplop = (props:AmplopProps) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <BorderLine />
            <button className="button-time" style={{width: 'auto'}} onClick={handleShow}>Kado Pernikahan</button>
            <button className="button-time" style={{width: 'auto'}} onClick={props.onClickClose}>Tutup Yah!</button>
            <div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Kado Pernikahan
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Doa restu anda merupakan karunia yang sangat berarti bagi kami, Jika memberi 
                        adalah ungkapan tanda selamat, anda dapat memberi kado secara online pada :
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="button-time" style={{width: 'auto'}} onClick={handleClose}>
                        Close
                    </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Amplop