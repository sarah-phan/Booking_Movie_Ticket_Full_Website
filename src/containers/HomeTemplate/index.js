import React from 'react'
import { Route } from 'react-router-dom'
import FooterHome from './_components/Footer'
import Logo from './_components/Logo'
import NavbarHome from './_components/Navbar'

export default function HomeTemplate(props) {
    const {exact, path, component} = props
    return (
        <div>
            <Logo/>
            <NavbarHome/>
            <Route
                exact = {exact}
                path = {path}
                component = {component}
            />
            <FooterHome/>
        </div>
    )
}
