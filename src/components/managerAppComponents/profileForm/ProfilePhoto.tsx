
import React, { useContext, useRef } from 'react'
import ProfilePic from '../../../assets/img/user-img-default.png'
import { useUserProfileApi } from '../../../hooks/useUserProfileApi'
import { AuthContextHook } from '../../../store/authContext/auth-context'
export const ProfilePhoto = ({ classes, onShow, onHide, onContent }:{classes:string, onShow:()=>void, onHide:()=>void, onContent:(notificationOPT: { text: string, icon: string })=>void}) => {
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
      const content = {text: 'Picture sucessfully updated', icon:'far fa-check-circle' }
      try {
        const response = await updateProfilePicture(event.target.files[0]);
        user.img = response.url;
        onShow()
        onContent(content)
        setTimeout(()=> {
          onHide()
        },1000)
      } catch (error) {
        content.text = 'Wuops something went wrong';
        content.icon = 'fas fa-exclamation-circle'
        onShow()
        onContent(content)
        setTimeout(()=> {
          onHide()
        },1000)
      }
    }
  }

  return (
    <div className={classes}>
      <div ref={image}  style={stylesPic}/>
      <input type="file" onChange={loadImageHandler} className="profile-picture__file"/>
      <i className="fas fa-camera"></i>
    </div>
  )
}
