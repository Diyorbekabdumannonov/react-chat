import React from 'react'
import { Link } from '@material-ui/core'
import { useState } from 'react'
import Node from '../nodes/Node'
import './SubCategory.css'
import { useRef } from 'react'
import firebase from '../../firebase'

export default function SubCategory() {
    const showChat = e => {
        return (
            <div>
                <Link href={`/Home/${e.name}`} className="border text-decoration-none border-1 border-dark card2 d-flex py-1">{e.name}</Link>
            </div>
        )
    }

    return (
        <>
            <div className='overflow-auto scroll' style={{ height: '100vh' }}>
                <div>
                    {firebase.firestore().collection('chats').get().then(chats => {
                        chats.docs.map(chat => {
                            showChat(chat.data())
                        })
                    })}
                </div>
            </div>
        </>
    )
}
