import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import CategoryListContainer from '../components/CategoryListContainer/CategoryListContainer'

export default function Categories() {
    return (
        <div className="App">
            <NavBar />
            <CategoryListContainer />
        </div>
    )
}
