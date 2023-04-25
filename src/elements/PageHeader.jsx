import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: #012e4a;
    margin-bottom: 1rem;
`
export default function PageHeader({title}) {
  return (
    <Title className='title is-3'>
        {title}
    </Title>
  )
}
