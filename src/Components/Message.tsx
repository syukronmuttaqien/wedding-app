import React from 'react'
import { Form } from 'react-bootstrap'
import {Fade} from 'react-awesome-reveal'

const Message = () => {
    return (
        <>  
            <Fade>
                <div className='wrapper-title-container' >
                    <h1 > ----------</h1>
                    <h1 className='title-text title-container'>Message For Us</h1>
                    <h1 > ----------</h1>
                </div>
                <div className='mt-4'>
                    <h3 className='fill-text'>
                    Berikan ucapan dan do'a terbaik anda untuk kami
                    </h3>
                </div>
                <Form className="message-container">
                    <Form.Group>
                        <h3 className='title-text'>Your Name</h3>
                        <Form.Control type="text" placeholder="Please enter your name" />
                    </Form.Group>

                    <Form.Group className='mt-4'>
                        <h3 className='title-text'>Your Message</h3>
                        <Form.Control as="textarea" rows={3} placeholder="Your message here..." />
                    </Form.Group>
                </Form>
                <div className='mb-4'>
                    <div className='mt-4 message-list-container'>
                        <div className='message-item-list'>
                            <p className='item-name'>Syukron Yang Ganteng Tea</p>
                            <p className='item-separator'>:</p>
                            <p className='item-message'>Selamat Menempuh hidup baru, semoga langgeng sampe surga, aaaminnn</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Message