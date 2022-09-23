import React from 'react'
import styled from 'styled-components'

const Header = styled.header`

width: 100vw;
height: 40vh;
background-color:red;
display: flex;
justify-content: center;
align-items: center;
border:dashed 3px red;
`

export default function App() {
  return (
    <Header>

      <h1>Oi Turma, Boa noite</h1>

    </Header>
  )
}
