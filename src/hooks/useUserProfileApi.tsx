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

  return { patchUserData, updatePassword };
}
