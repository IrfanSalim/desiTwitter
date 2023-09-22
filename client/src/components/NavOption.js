import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../static/images/navigationImages/logo.png'
const NavOption = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Button
        sx={{ width: '80%', height: '100%' }}
        component={Link}
        to={props.url}
      >
        <Box
          sx={{
            width: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            sx={{ height: '2.5em' }}
            src={require(`../static/images/navigationImages/${props.imgURL}`)}
          />
        </Box>
        <Typography
          sx={{
            width: '50%',
            textAlign: 'left',
            color: 'primary.contrastText',
          }}
        >
          {props.title}
        </Typography>
      </Button>
    </Box>
  )
}

export default NavOption
