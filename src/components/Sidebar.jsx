import React from 'react'

export default function Sidebar(props) {
  const {handleToggleModal} = props

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec sagittis elementum ligula, vitae gravida ex euismod in. 
            Mauris pharetra dignissim mattis. 
            Nunc non tellus commodo, ullamcorper leo in, hendrerit lectus</p>
        </div>
        <button onClick={() => {
          handleToggleModal()
        }}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  )
}
