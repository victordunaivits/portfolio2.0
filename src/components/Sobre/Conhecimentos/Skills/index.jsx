import React from 'react'
import Subtitulo from '../../../Titulo/Subtitulo'
import Skill from './Skill'
import './index.css'


function Cards() {
  return (
    <div className='cards'>
    <Subtitulo subtitulo="Conhecimentos" />
    <Skill />
    </div>
  )
}

export default Cards