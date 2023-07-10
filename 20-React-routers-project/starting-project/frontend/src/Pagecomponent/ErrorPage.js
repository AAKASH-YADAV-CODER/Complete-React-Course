import React from 'react';
import { useRouteError } from 'react-router';
import MainNavigation from '../components/MainNavigation'
import PageContent from '../components/PageContent'

const ErrorPage = () => {
    const error = useRouteError();
    let title = 'An error occurred';
    let message = 'Something went wrong';
    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = 'NOT FOUND!';
        message = 'Could Not Found resource or page';
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default ErrorPage