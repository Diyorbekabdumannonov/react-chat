import { Close, Person } from '@material-ui/icons'
import { Box, Button, Typography, TextField, Modal } from '@mui/material'
import { height } from '@mui/system'
import { useRef, useState } from 'react'

export default function Sign() {
    const [modalHide, modalShow] = useState('none')
    const form = useRef()
    const modalToggle = () => {
        (modalHide == 'none') ? modalShow('block') : modalShow('none')
    }
    const formSubmit = () => {
        modalToggle()
    }
    return (
        <Box style={{ background: 'linear-gradient(187deg, #062e42, #000)', height: '100vh' }}>
            <Box display='flex' justifyContent="space-around" alignItems='center' paddingY="10px">
                <Typography variant="h3" color="white">Welcome to Note App 💬</Typography>
                <Button onClick={() => modalToggle()} type="button" color="primary" variant="outlined" data-bs-toggle="modal" data-bs-target="#modelId">Sign In</Button>
            </Box>
            <Box borderRadius="10px" display={modalHide} maxWidth="500px" marginX="auto" padding="16px" bgcolor="white">
                <Close onClick={() => modalToggle()} style={{ float: "right", cursor: 'pointer' }} />
                <Typography variant="h6" color="black" marginBottom="10px" justifyContent="center" display="flex" alignItems="center">
                    <p>Create Account</p>
                    <Person /></Typography>
                <form ref={form} onSubmit={(e) => {
                    e.preventDefault()
                    formSubmit()
                }} noValidate autoComplete='off'>
                    <Typography marginBottom="10px">Username: </Typography>
                    <TextField name="userName" label="Username" paddingY="0px" variant="outlined" fullWidth />
                    <Typography marginY="10px">Password: </Typography>
                    <TextField type="password" name="password" label="Password" paddingY="0px" variant="outlined" fullWidth />
                    <Typography marginY="10px">Profile image: </Typography>
                    <TextField name="photoUrl" label="Profile image" paddingY="0px" variant="outlined" fullWidth />
                    <Button type="submit" variant="contained" fullWidth style={{ marginTop: '20px' }} color="success">Submit</Button>
                </form>
            </Box>
            <Modal />
        </Box>
    )
}