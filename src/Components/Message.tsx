import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import {Fade} from 'react-awesome-reveal'

import { Database, onValue, push, ref, set } from 'firebase/database'

type MessageProps = {
    database: Database
}

const Message = (props: MessageProps) => {
    const {database} = props
    const referenceDb = ref(database, 'messages')
    const [messages, setMessages] = useState<Array<any>>([])
    const [nama, setNama] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        return onValue(referenceDb, (snapshot) => {
            const data = snapshot.val();

            console.log({data})

            if (snapshot.exists()) {
                setMessages(Object.values(data).reverse())
            }
        });
    }, []);

    const sendMessage = async () => {
        if (nama.trim() === '' || message.trim() === '') {
            return
        }

        const newMessage = await push(referenceDb)
        await set(newMessage, {
            name: nama.trim(),
            message: message.trim(),
        })

        setNama('')
        setMessage('')
    }

    return (
        <>  
            <Fade>
                <div className='wrapper-title-container' >
                    {/* <h1 > ----------</h1> */}
                    <h1 className='title-text title-container'>Message For Us</h1>
                    {/* <h1 > ----------</h1> */}
                </div>
                <div className='mt-4'>
                    <h3 className='fill-text'>
                        Kirim ucapan dan do'a terbaik untuk kami
                    </h3>
                </div>
                <div className='mt-4'>
                    <div className='mt-4 message-list-container'>
                        {messages?.map((r: any, index: number) => (
                            <div key={index.toString()} className='message-item-list'>
                                <span className='item-name'>{r.name}</span>
                                <span className='item-message'>{r.message}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Form className="message-container">
                    <Form.Group>
                        <h3 className='title-text'>Your Name</h3>
                        <Form.Control className='f16' value={nama} onChange={(event) => setNama(event.target.value)} type="text" placeholder="Please enter your name" />
                    </Form.Group>

                    <Form.Group className='mt-4'>
                        <h3 className='title-text'>Your Message</h3>
                        <Form.Control className='f16' value={message} onChange={(event) => setMessage(event.target.value)} as="textarea" rows={3} placeholder="Your message here..." />
                    </Form.Group>
                </Form>
                <button disabled={nama.trim() === '' || message.trim() === ''} onClick={sendMessage} className='button-time width-flexible'>Send</button>
            </Fade>
        </>
    )
}

export default React.memo(Message)