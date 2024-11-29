'use client'
import React, { FC } from 'react'
import Header from './views/Header'

interface IMainLayout {
  children?: React.ReactNode
}

const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <div>
        {/* Header */}
        <Header showSidebar={false} handleToggleSidebar={() => {}}/>
        {/* Sidebar */}
      {children}
    </div>
  )
}

export default MainLayout
