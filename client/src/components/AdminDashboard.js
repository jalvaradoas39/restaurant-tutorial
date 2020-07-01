import React from 'react';

const AdminDashboard = () => {
    /****************************
     * VIEWS
     ***************************/
    const showHeader = () => (
        <div className='bg-dark text-white py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>
                            <i className='fas fa-home'> Dashboard</i>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );

    /****************************
     * RENDERER
     ***************************/
    return <section>{showHeader()}</section>;
};

export default AdminDashboard;
