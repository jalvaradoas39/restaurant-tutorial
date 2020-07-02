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

    const showActionBtns = () => (
        <div className='bg-light my-2'>
            <div className='container'>
                <div className='row pb-3'>
                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-info btn-block'>
                            <i className='fas fa-plus'> Add Category</i>
                        </button>
                    </div>

                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-warning btn-block'>
                            <i className='fas fa-plus'> Add Food</i>
                        </button>
                    </div>

                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-success btn-block'>
                            <i className='fas fa-money-check-alt'>
                                {' '}
                                View Orders
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    /****************************
     * RENDERER
     ***************************/
    return (
        <section>
            {showHeader()}
            {showActionBtns()}
        </section>
    );
};

export default AdminDashboard;
