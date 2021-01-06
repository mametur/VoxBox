import React, {useState} from 'react'
import {useSelector} from "react-redux"
import {Redirect} from "react-router-dom"
import { Cards } from './Cards'
import CreatePost from './createPost'
import { NewsfeedHeader } from './NewsfeedHeader'
import { SearchBar } from './SearchBar'

export const Newsfeed = () => {

    const [searchedValue, setSearchedValue] = useState();
    const [postFormState, setPostFormState] = useState({
        status: false
    })

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const handlePostFormToggle = () =>{
        setPostFormState({
            ...postFormState,
            status: !postFormState.status
        })
    }

    if(!isLoggedIn) return <Redirect to="/" />

    return (
        <div>
            <NewsfeedHeader formToggle={handlePostFormToggle}/>
            <SearchBar searching={setSearchedValue}/>
            {postFormState.status? <CreatePost formToggle={handlePostFormToggle}/> : null}
            <Cards searchedValue={searchedValue}/>
        </div>
    )
}
