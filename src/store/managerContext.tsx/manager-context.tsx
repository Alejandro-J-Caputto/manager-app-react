import React, { createContext, ReactChildren, useCallback, useState } from 'react'
import { useManagerApiHook, WorspaceBodyHTTP } from '../../hooks/useManagerApiHook';
import { Workspace, WorkspaceResponse } from '../../interface/app/managerapp';

export const ManagerContextHook = createContext<{
  workspaces: Workspace[];
  onGetWorkspaces: () => void;
  onCreateWorkspaces: (body: {title: string, img: string}) => void;
  onSetTheme: () => void;
  onCheckTokenManager: () => void;
}>({
  workspaces: [],
  onGetWorkspaces: ()=> {},
  onCreateWorkspaces: (body: {title: string, img: string})=>{},
  onSetTheme:()=>{},
  onCheckTokenManager:()=> {}
})




export const ManagerAppContextProvider = ({children}: {children: ReactChildren | any}) => {

  const {managerHTTP} = useManagerApiHook();

  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  const getWorkspaces = useCallback(async () => {

    const responseManager:WorkspaceResponse = await managerHTTP(null, 'workspace', 'GET');
    setWorkspaces(responseManager.workspace)
  }, [managerHTTP])
  
  const createWorkspace = async (body: {title: string, img: string}) => {
    const bodyRequest:WorspaceBodyHTTP = {
      title: body.title,
      img: body.img
    }
    const managerResponse = await managerHTTP (bodyRequest, 'workspace', 'POST');
    setWorkspaces(managerResponse.workspace)
  }

  const setTheme = async () => {

  }

  const checkTokenOnRefresh = async () => {

  }

  return (
    <ManagerContextHook.Provider value={{
      workspaces: workspaces,
      onGetWorkspaces: getWorkspaces,
      onCreateWorkspaces: createWorkspace,
      onSetTheme: setTheme,
      onCheckTokenManager:checkTokenOnRefresh
    }}>
      {children}
    </ManagerContextHook.Provider>
  )
}
