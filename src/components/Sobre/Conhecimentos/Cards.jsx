import React from 'react'
import Subtitulo from './Subtitulo/Subtitulo'
import Skill from './Skills/Skill'
import './conhecimentos.css'


function Cards() {
  return (
    <div className='cards'>
    <Subtitulo />
    <Skill />
    </div>
  )
}

export default Cards