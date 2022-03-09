import React from 'react'

function Menu(props) {
  return (
    <nav className="nav-menu" id={props.hidden ? "hidden" : null}>
      <a href="" onClick={props.clickHandler}>Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </nav>
  )
}

export default Menu