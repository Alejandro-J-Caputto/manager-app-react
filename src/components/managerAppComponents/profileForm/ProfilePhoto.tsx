import React from 'react'
import ProfilePic from '../../../assets/img/user-img-default.png'
export const ProfilePhoto = ({ classes }:{classes:string}) => {
  console.log(classes)

  const stylesPic = {
    backgroundImage: `url("${ProfilePic}")`,
    backgroundSize: 'cover',
    backgorundPosition : 'center',
    borderRadius: '50%'
  }
  return (
    <div className={classes}>
      <div style={stylesPic}/>
      <input type="file" className="profile-picture__file"/>
      <i className="fas fa-camera"></i>
    </div>
  )
}
