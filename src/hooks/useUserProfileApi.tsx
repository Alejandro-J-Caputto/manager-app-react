import React from 'react'
import { RegisterForm, UpdatedUserResponse, UpdatePass } from '../interface/app/managerapp'
import { useManagerApiHook } from './useManagerApiHook'
export const useUserProfileApi = () => {
  const { managerHTTP } = useManagerApiHook()

  const patchUserData = async (form: RegisterForm) => {
    const bodyRequest = form;
    const managerResponse: UpdatedUserResponse = await managerHTTP(bodyRequest, `users`, 'PATCH');
  }

  const updatePassword = async (form: UpdatePass) => {
    const bodyRequest = form;
    const managerResponse = await managerHTTP(bodyRequest, `users/resetPass`, 'PATCH');
    console.log(managerResponse)
  }

  const updateProfilePicture = async (file:File) => {
    const formData = new FormData();
    formData.append('file', file, file.name)
    const CONFIG = {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': localStorage.getItem('reactBearer')!
      }

    }
    try {
      const request = await fetch(`http://localhost:8000/api/todoApp/v1/upload/users`, CONFIG)
      const response = await request.json();
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return { patchUserData, updatePassword, updateProfilePicture };
}
