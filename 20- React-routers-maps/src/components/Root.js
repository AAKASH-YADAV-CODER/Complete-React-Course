import React from 'react'
import { Outlet } from 'react-router-dom';
import MainNavigation from '../Secondcomponents/MainNavigation';

const Root = () => {
    return (
        <div>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Root;