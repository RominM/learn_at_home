import React from 'react'
import { Link } from 'react-router-dom'
import AcountAccess from '../acountAccess/AcountAcces'
import './navbar.scss'

export default function Navbar() {
 return (
  <nav>npm i sass
   <AcountAccess />
   <div className="navigation">
    <Link to={'dashboard/'}>Accueil</Link>
    <Link to={'tasks'}>Mes tâches</Link>
    <Link to={'chat'}>Mes Messages</Link>
    <Link to={'caldenda'}>Mes évènements</Link>
    <Link to={'/'}>Déconnexion</Link>
   </div>
  </nav>
 )
}
