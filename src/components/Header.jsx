import React, {useState, useEffect} from 'react'
import 'boxicons'
import Menu from './Menu'

function Header() {
  const [hidden, setHidden] = useState(true)
  const clickHandler = () => setHidden(!hidden)

  useEffect(() => {
    window.addEventListener("scroll", () => setHidden(true))
  },[])

  return (
    <header>
      <h3>NavBar</h3>
      <box-icon name={hidden ? "menu" : "x"} size="lg" color="#fff" onClick={clickHandler}></box-icon>
      <Menu hidden={hidden} clickHandler={clickHandler}/>
    </header>
  )
}

export default Header