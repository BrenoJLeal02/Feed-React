import React from 'react'
import styles from './Sidebar.module.css'
import avatarP from '../../assets/perfil.jpeg'

import {PencilLine} from '@phosphor-icons/react'
import { Avatar } from '../Avatar/Avatar'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.profile}>
            <Avatar 
            src={avatarP}/>
            <strong>Breno J. Leal</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}
