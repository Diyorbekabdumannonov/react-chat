import { Box } from '@material-ui/core'
import { Link } from '@mui/material'
import React from 'react'
import './Categories.css'

export default function Categories() {
    // const showCard = e => {
    //     return (
    //         <div key={e} className='d-flex mx-4 flex-column align-items-center w-25'>
    //             <Link className="h6 h1-lg text-white text-decoration-none" href={`/${e.name}`}>{e.name}</Link>
    //         </div>
    //     )
    // }
    return (
        <Box display="flex" width="100%" overflow='auto' fontWeight='700'>
            {/* {
                firebase.collection('category').get().then(res => {
                    console.log(res)
                    res.docs.map(response => {
                        return showCard(response)
                    })
                })} */}
            <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>
            <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>  <Box padding="5px 10px">
                <Link color="#000" underline='hover' href={`/Home`}>Home</Link>
            </Box>
        </Box>
    )
}
