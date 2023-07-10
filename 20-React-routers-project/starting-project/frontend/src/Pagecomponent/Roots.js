import React from 'react'
import { Outlet } from 'react-router'
// import { Outlet, useNavigation } from 'react-router'
import MainNavigation from '../components/MainNavigation';
const Roots = () => {
    // const navigation = useNavigation();
    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    )
}

export default Roots