import React from 'react'
import { Link } from 'react-router-dom'
export const WorkspaceCard = ({title, id, img}:{title:string,id:string, img:string}) => {
  return (
    <Link to={'/manager-app/workspace/' + id} id={id} className="workspace-card">
      <span className="workspace-card__title">{title}</span>
      <img src={img} className="workspace-card__img" alt="back"/>
    </Link>
  )
}
