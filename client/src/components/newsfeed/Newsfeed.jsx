import React, {useState} from 'react'
import { Col, Container } from 'react-bootstrap'
import {useSelector} from "react-redux"
import {Redirect} from "react-router-dom"
import { Cards } from './Cards'
import CreatePost from './createPost'
import { NewsfeedHeader } from './NewsfeedHeader'
import { ProfileAlert } from './ProfileAlert.jsx'
import { SearchBar } from './SearchBar'


export const Newsfeed = () => {

    const [searchedValue, setSearchedValue] = useState();
    const [postFormState, setPostFormState] = useState({
        status: false
    })

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const isProfileComplete = useSelector(state => state.user.isProfileComplete)

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
         <Col>  {postFormState.status? isProfileComplete ? <CreatePost formToggle={handlePostFormToggle}/> : <ProfileAlert formToggle={handlePostFormToggle}/> : null}</Col> 
         <Col> <SearchBar searching={setSearchedValue}/></Col>
           <Container fluid > <Cards searchedValue={searchedValue} postFormState={postFormState} /></Container>
        </div>
    )
}
