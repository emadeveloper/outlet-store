import React, { useContext } from 'react';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext'
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
  return (
    <header className='bg-pink-200'>
      <div>Header</div>
      <div className='cursor-pointer flex relative' onClick={()=>setSidebarOpen(!sidebarOpen)}>
        <BsBag className='text-2xl'/>
      </div>
    </header>
  )
}

export default Header