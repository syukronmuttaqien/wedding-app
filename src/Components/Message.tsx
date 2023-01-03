import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {Fade} from 'react-awesome-reveal'

const Message = () => {
    const [messages, setMessages] = useState<Array<any>>([])
    const [nama, setNama] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        const newMessages: Array<any> = messages.slice()

        newMessages.unshift({
            nama,
            message
        })

        setMessages(newMessages)
        setMessage('')
        setNama('')
    }

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
                        <Form.Control value={nama} onChange={(event) => setNama(event.target.value)} type="text" placeholder="Please enter your name" />
                    </Form.Group>

                    <Form.Group className='mt-4'>
                        <h3 className='title-text'>Your Message</h3>
                        <Form.Control value={message} onChange={(event) => setMessage(event.target.value)} as="textarea" rows={3} placeholder="Your message here..." />
                    </Form.Group>
                </Form>
                <button onClick={sendMessage} style={{width: 'fit-content'}} className='button-time'>Send</button>
                <div className='mb-4'>
                    <div className='mt-4 message-list-container'>
                        {messages.map((r) => (
                            <div className='message-item-list'>
                                <span className='item-name'>{r.nama}</span>
                                <span className='item-message'>{r.message}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Message