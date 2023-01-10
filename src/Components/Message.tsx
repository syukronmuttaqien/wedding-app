import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'

import { Database, onValue, push, ref, set } from 'firebase/database'
import 'dayjs/locale/id'
import dayjs from 'dayjs'

type MessageProps = {
    database: Database
}

const Message = (props: MessageProps) => {
    const { database } = props
    const referenceDb = ref(database, 'messages')
    const [messages, setMessages] = useState<Array<any>>([])
    const [nama, setNama] = useState('')
    const [message, setMessage] = useState('')
    const containermessageHeight = (document.getElementById('message-list-container')?.offsetTop || 0) + 200

    useEffect(() => {
        return onValue(referenceDb, (snapshot) => {
            const data = snapshot.val();

            console.log({ data })

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
            date: new Date().getTime()
        })

        setNama('')
        setMessage('')

        setTimeout(() => {
            window.scrollTo({behavior: 'smooth', top: containermessageHeight})
        }, 1000)
    }

    return (
        <section>
            <Fade cascade>
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
                <div className='wrapper-title-container bulk-space'>
                    {/* <h1 > ----------</h1> */}
                    <h1 className='title-text title-container'>Recent Wishes</h1>
                    {/* <h1 > ----------</h1> */}
                </div>
            </Fade>
            <div className='mt-4'>
                <div id='message-list-container' className='mt-4 message-list-container'>
                    <Row>
                        {messages?.map((r: any, index: number) => (
                            <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index.toString()}>
                                <Fade direction='up' cascade>
                                    <div className='message-item-list mt-3'>
                                        <div className='tape-fix'></div>
                                        <span className='item-name script-text fs-3 fw-bold'>{r.name}</span>
                                        <span className='item-message script-text fs-4'>{r.message}</span>
                                        <div className='item-date script-text fs-5'>
                                            <span>{r.date ? dayjs(r.date).locale('id').format('dddd, DD MMM YYYY HH:mm') : '-'}</span>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Message)