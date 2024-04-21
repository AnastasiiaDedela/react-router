import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, sapiente?</p>

      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contacts</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
