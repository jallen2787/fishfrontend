import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink className = "nav" to="/">Home</NavLink>
      <NavLink to="/fishes">Fishes</NavLink>
    </nav>
  )
}
