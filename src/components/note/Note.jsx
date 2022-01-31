import { useRef, useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box, Input, Link } from '@mui/material';
import firebase from '../../firebase-config';
import { MoreVert } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

export default function Node() {
    const [hasValue, setHasValue] = useState(false);
    const message = useRef()
    const showMessage = (note) => {
        return (
            <Box display='flex' alignItems='center'>
                <img />
                <Box color="#fff" style={{ background: "#424242" }} display="flex" justifyContent='space-between' alignItems="start" padding="15px" borderRadius="16px 0 16px 16px">
                    <Box>
                        <h3>{note.text}</h3>
                        <span className={classes.date}>{note.date}</span>
                    </Box>
                    <Button className={classes.dropdown}>
                        <MoreVert />
                    </Button>
                    <Box display="none">
                        <p>Delete</p>
                        <p>Update</p>
                    </Box>
                </Box>
            </Box>
        )
    }
    const styles = makeStyles({
        submitBtn: {
            position: 'fixed', zIndex: 50, right: 0, bottom: 0
        },
        sendInput: {
            background: "#424242", paddingLeft: '10px', color: "white", zIndex: "1"
        },
        form: {
            position: 'fixed', bottom: 0, width: '100%', display: 'flex', height: '36px'
        },
        noteSite: {
            display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'end', padding: '20px'
        },
        dropdown: {
            width: '20px !important', height: '30px !important', borderRadius: '50px !important'
        },
        date: {
            fontSize: '10px', color: 'black'
        }
    })
    const classes = styles()

    return (
        <Box width="100%">
            <Box display="flex" padding="10px 20px" width="100%" alignItems="center" bgcolor="#424242" color="white">
                <Link href='/Home' color="#fff" display="flex" justifyContent="center" alignItems="center" marginRight="15px">
                    <ArrowBackIcon />
                </Link>
                <h3>{window.location.href.slice(27, 35)}</h3>
            </Box>
            <Box className={classes.noteSite}>
            </Box>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    const date = new Date().toLocaleTimeString();
                    const fullMessage = {
                        text: message,
                        date: date,
                    }
                    setHasValue(false)
                    if (message !== '') {
                        showMessage(fullMessage)
                        // firebase.firestore().collection('note').add(fullMessage)
                    }
                }
            } className={classes.form}>
                <Input ref={message} className={classes.sendInput} type="text" onKeyUp={(e) => {
                    if (e.target.value != '') {
                        setHasValue(true)
                    } else { setHasValue(false) }
                }} placeholder='Enter Message...' fullWidth variant="outlined" padding="5px 20px" />
                {hasValue ?
                    <Button color="default" className={classes.submitBtn} type='submit'>
                        <SendIcon className='text-primary' />
                    </Button> : ''
                }
            </form>
        </Box >
    )
}