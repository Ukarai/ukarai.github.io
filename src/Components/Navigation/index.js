import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

export const Nav = () => {
    return (
        <AppBar style={{ backgroundColor: "#363538" }}>
            <Toolbar>
                <Link to="/" className="nav-links">
                    Home
                    </Link>
                <Link to="/tariffcalculator" className="nav-links">
                    Tariff Calculator
                    </Link>
                <Link to="skillstable" className="nav-links">
                    Skills Table
                    </Link>
            </Toolbar>
        </AppBar>
    )
}