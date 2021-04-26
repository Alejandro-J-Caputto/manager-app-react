import React, { createContext, ReactChildren, useCallback, useState } from 'react'
import { useManagerApiHook } from '../../hooks/useManagerApiHook';
import { Workspace, WorkspaceResponse } from '../../interface/app/managerapp';

export const ManagerContextHook = createContext<{
  workspaces: Workspace[];
  onGetWorkspaces: () => void;
  onCreateWorkspaces: () => void;
  onSetTheme: () => void;
  onCheckTokenManager: () => void;
}>({
  workspaces: [],
  onGetWorkspaces: ()=> {},
  onCreateWorkspaces: ()=>{},
  onSetTheme:()=>{},
  onCheckTokenManager:()=> {}
})




export const ManagerAppContextProvider = ({children}: {children: ReactChildren | any}) => {

  const {managerHTTP} = useManagerApiHook();

  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  const getWorkspaces = useCallback(async () => {
    console.log('me dispare _(')
    const responseManager:WorkspaceResponse = await managerHTTP(null, 'workspace', 'GET');
    setWorkspaces(responseManager.workspace)
  }, [managerHTTP])

  const createWorkspace = async () => {

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
