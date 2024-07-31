import React from 'react'

export default function Sidebar(props) {
  const {handleToggleModal, data} = props

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div className="descriptionContainer"> 
          <p className="descriptionTitle">{data?.date}</p> 
          <p className="descriptionContent">{data?.explanation}</p>
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
