import React, { useEffect, useState } from 'react'
import { Workspace } from '../../../interface/app/managerapp'
import { WorkspaceCard } from '../../shared/workspaceCard/WorkspaceCard'

export const SearchWorkspace = ({ workspaces }: { workspaces: Workspace[] }) => {

  const [search, setSearch] = useState<string>('')
  const [noFound, setNoFound] = useState(false);
  const [filteredSpaces, setFilteredSpaces] = useState([...workspaces])
  const [searching, setSearching] = useState(false)
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoFound(false)
    setSearching(true)
    setSearch(event.target.value)
  }
  useEffect(() => {
    const timeSearch = setTimeout(()=> {
      setSearching(false);
    }, 1000)
    setFilteredSpaces((filteredPrev) => {
      return [...workspaces].filter(workspace => {
        setSearching(false)
        if(!filteredSpaces.length) {
          setNoFound(true)
        }
        return workspace.title.toLowerCase().includes(search!.trim())
      })
    })
    return () => {
      clearInterval(timeSearch)
    }
  }, [search, workspaces, filteredSpaces.length])

  return (
    <>
      <div className="grid__search">
        <div className="search-group">
          <input
            type="text"
            onChange={searchHandler}
            value={search}
            name='search'
            autoComplete="off"
            placeholder="Search..."
            id="search"
            autoFocus={true}
            className="workspace-form__title-input" />
          <label className="workspace-form__title-label" htmlFor="search">Search...</label>
          {noFound && <p className="search__fail">ERROR PLACEHOLDER</p>}
          {!workspaces.length && <p className="message-empty" style={{ textAlign: 'center' }}>
            YOU DON'T HAVE A CREATED A WORKSPACE YET
          </p>}
        </div>
        {searching && <div className="grid__workspace">
          <div className="loading">
            <i className="fas fa-sync fa-spin"></i>
          </div>
        </div>}
        <div className="grid__workspace">
          {
            filteredSpaces.map(workCard => {
              return <WorkspaceCard key={workCard._id} id={workCard._id} title={workCard.title} img={workCard.img} />
            })
          }

        </div>
      </div>

    </>
  )
}
