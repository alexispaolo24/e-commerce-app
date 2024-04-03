import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, emphasize } from '@mui/material'
import React from 'react'

const Cart = ({cartItems}) => {
    const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.count),0)
    const displayCost = Number(totalCost.toFixed(2))
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth:650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={2}>Details</TableCell>
                    <TableCell align="center" colSpan={2}>Price</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align='center'>Quantity</TableCell>
                    <TableCell align='center'>Unit</TableCell>
                    <TableCell align='center'>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cartItems.map((item) => (
                    <TableRow key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">{item.title}</TableCell>
                        <TableCell align="center">{item.count}</TableCell>
                        <TableCell align="center">{item.price}</TableCell>
                        <TableCell align="center">{item.count * item.price}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Subtotal</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="center"><Typography variant='h6'>{displayCost}</Typography></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Cart