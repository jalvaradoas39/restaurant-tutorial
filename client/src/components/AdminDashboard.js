import React, { useState } from 'react';
import { createCategory } from '../api/category';

const AdminDashboard = () => {
    const [category, setCategory] = useState('');

    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleCategoryChange = (evt) => {
        setCategory(evt.target.value);
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();
        const data = { category };

        createCategory(data);
    };

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
                        <button
                            className='btn btn-outline-info btn-block'
                            data-toggle='modal'
                            data-target='#addCategoryModal'
                        >
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

    const showCategoryModal = () => (
        <div id='addCategoryModal' className='modal'>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                    <form onSubmit={handleCategorySubmit}>
                        <div className='modal-header bg-info text-white'>
                            <h5 className='modal-title'>Add Category</h5>
                            <button className='close' data-dismiss='modal'>
                                <span>
                                    <i className='fas fa-times'></i>
                                </span>
                            </button>
                        </div>
                        <div className='modal-body my-2'>
                            <label className='text-secondary'>Category</label>
                            <input
                                type='text'
                                className='form-control'
                                name='category'
                                value={category}
                                onChange={handleCategoryChange}
                            />
                        </div>
                        <div className='modal-footer'>
                            <button
                                className='btn btn-secondary'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                            <button type='submit' className='btn btn-info'>
                                Submit
                            </button>
                        </div>
                    </form>
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
            {showCategoryModal()}
        </section>
    );
};

export default AdminDashboard;
