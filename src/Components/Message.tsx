import React from 'react'
import { Form } from 'react-bootstrap'
import {Fade} from 'react-awesome-reveal'
import BorderLine from './BorderLine'

const Message = () => {
    return (
        <>  
            <Fade>
                <BorderLine />
                <h1 className='title-text'>Message For Us</h1>
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