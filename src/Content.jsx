import React from 'react';
import styled from 'styled-components'

const StyledContent = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 420px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center; 
  }

  img {
    max-width: 180px;
    padding: 10px;
  }
`

const Content = (props) => {

  console.log("GAME PROPS: ", props)

  const layout = props.images.map((image, i) => {
    return (
      <img alt="game" key={i} id={image.id} src={image.url} />
    )
  })

  return (
    <StyledContent>
      <div>
        { layout }
      </div>
    </StyledContent>
  )
}

export default Content; 
