import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DistributionList from '../../presentation/pages/distribution-list/distribution-list'
import UserList from '../../presentation/pages/user-list/user-list'
import ResearchList from '../../presentation/pages/research-list/research-list'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ResearchList />}></Route>
                <Route path='/userList' element={<UserList />}></Route>
                <Route path='/distributionList' element={<DistributionList />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router