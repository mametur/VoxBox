import React, {useState} from 'react'
import {useSelector} from "react-redux"
import {Redirect} from "react-router-dom"
import { Cards } from './Cards'
import { NewsfeedHeader } from './NewsfeedHeader'
import { SearchBar } from './SearchBar'

export const Newsfeed = () => {

    const [searchedValue, setSearchedValue] = useState();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    if(!isLoggedIn) return <Redirect to="/" />

    return (
        <div>
            <NewsfeedHeader />
            <SearchBar searching={setSearchedValue}/>
            <Cards searchedValue={searchedValue}/>
        </div>
    )
}
