import React from 'react'
import { AboutUs } from './AboutUs'
import { Cta } from './Cta'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


export const Home = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    if(isLoggedIn) return <Redirect to="newsfeed" />

 
    return (
        <div>
           <Cta />
           <AboutUs /> 
        </div>
    )
}
