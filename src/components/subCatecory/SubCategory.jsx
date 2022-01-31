import React from 'react'
import './SubCategory.css'
// import { useHistory } from 'react-router-dom'
// import firebase from '../../firebase-config'
import { Box, List, ListItem } from '@mui/material'
import { makeStyles } from '@mui/styles'

export default function SubCategory() {
    // const showChat = e => {
    //     return (
    //         <div>
    //             <Link href={`/Home/${e.name}`} className="border text-decoration-none border-1 border-dark card2 d-flex py-1">{e.name}</Link>
    //         </div>
    //     )
    // }

    // const history = useHistory()
    const styles = makeStyles({
        list: {
            padding: '8px 16px !important',
            justifyContent: 'start !important'
        }
    })
    const classes = styles()
    return (
            <>
            <Box overflow="auto" height="95%" fontWeight="600" width="100%">
                {/* {firebase.firestore().collection('chats').get().then(chats => {
                        chats.docs.map(chat => {
                            showChat(chat.data())
                        })
                    })} */}
                <List style={{ width: '100%' }} display="flex" flexdirection="column" alignitems="start">
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                    <ListItem className={classes.list} height="20px" width="100%" button>Home</ListItem>
                </List>
            </Box>
        </>
    )
}
