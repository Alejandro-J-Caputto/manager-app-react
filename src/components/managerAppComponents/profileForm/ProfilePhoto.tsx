import { render } from '@testing-library/react'
import React, { useContext, useRef } from 'react'
import ProfilePic from '../../../assets/img/user-img-default.png'
import { useManagerApiHook } from '../../../hooks/useManagerApiHook'
import { useUserProfileApi } from '../../../hooks/useUserProfileApi'
import { AuthContextHook } from '../../../store/authContext/auth-context'
export const ProfilePhoto = ({ classes }:{classes:string}) => {
  console.log(classes)
  const AuthContext = useContext(AuthContextHook);
  const {user} = AuthContext;
  const {updateProfilePicture} = useUserProfileApi();
  const image = useRef<HTMLImageElement>(null)
  const stylesPic = {
    backgroundImage: `url("${user.img ? user.img : ProfilePic}")`,
    backgroundSize: 'cover',
    backgorundPosition : 'center',
    borderRadius: '50%'
  }

  const loadImageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event) => {
        image.current!.src = `${event.target!.result}`;
      }
      await updateProfilePicture(event.target.files[0]);
    }
  }

  return (
    <div className={classes}>
      <img ref={image} style={stylesPic}/>
      <input type="file" onChange={loadImageHandler} className="profile-picture__file"/>
      <i className="fas fa-camera"></i>
    </div>
  )
}
