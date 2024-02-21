import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'

const Container = styled(AppBar)`
background:#060606;
height:9vh;`

const Header = () => {
  return (
  <>
      <Container position='static'>
        <Toolbar >
            <h1>CodeDocs</h1>
        </Toolbar>
      </Container>
    </>
  )
}

export default Header
