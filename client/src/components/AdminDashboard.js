import React, { useState, useEffect, Fragment } from 'react';
import { createCategory, getCategories } from '../api/category';
import { createProduct } from '../api/product';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const AdminDashboard = () => {
    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState({
        productImage: null,
        productName: '',
        productDesc: '',
        productPrice: '',
        productCategory: '',
        productQty: '',
    });

    const {
        productImage,
        productName,
        productDesc,
        productPrice,
        productCategory,
        productQty,
    } = productData;

    /****************************
     * LIFECYCLE METHODS
     ***************************/
    useEffect(() => {
        loadCategories();
    }, [loading]);

    const loadCategories = async () => {
        await getCategories()
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleMessages = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleCategoryChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory(evt.target.value);
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(category)) {
            setErrorMsg('Please enter a category');
        } else {
            const data = { category };

            setLoading(true);
            createCategory(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setCategory('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
    };

    const handleProductChange = (evt) => {
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleProductImage = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        if (productImage === null) {
            setErrorMsg('Please select an image');
        } else if (
            isEmpty(productName) ||
            isEmpty(productDesc) ||
            isEmpty(productPrice)
        ) {
            setErrorMsg('Please enter all fields');
        } else if (isEmpty(productCategory)) {
            setErrorMsg('Please select a category');
        } else if (isEmpty(productQty)) {
            setErrorMsg('Please select a quantity');
        } else {
            let formData = new FormData();

            formData.append('productImage', productImage);
            formData.append('productName', productName);
            formData.append('productDesc', productDesc);
            formData.append('productPrice', productPrice);
            formData.append('productCategory', productCategory);
            formData.append('productQty', productQty);

            createProduct(formData)
                .then((response) => {
                    console.log('server response: ', response);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
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
                        <button
                            className='btn btn-outline-warning btn-block'
                            data-toggle='modal'
                            data-target='#addFoodModal'
                        >
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
        <div id='addCategoryModal' className='modal' onClick={handleMessages}>
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
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}

                            {loading ? (
                                <div className='text-center'>
                                    {showLoading()}
                                </div>
                            ) : (
                                <Fragment>
                                    <label className='text-secondary'>
                                        Category
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='category'
                                        value={category}
                                        onChange={handleCategoryChange}
                                    />
                                </Fragment>
                            )}
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

    const showFoodModal = () => (
        <div id='addFoodModal' className='modal' onClick={handleMessages}>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                    <form onSubmit={handleProductSubmit}>
                        <div className='modal-header bg-warning text-white'>
                            <h5 className='modal-title'>Add Food</h5>
                            <button className='close' data-dismiss='modal'>
                                <span>
                                    <i className='fas fa-times'></i>
                                </span>
                            </button>
                        </div>
                        <div className='modal-body my-2'>
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}

                            {loading ? (
                                <div className='text-center'>
                                    {showLoading()}
                                </div>
                            ) : (
                                <Fragment>
                                    <div className='custom-file mb-2'>
                                        <input
                                            type='file'
                                            className='custom-file-input'
                                            name='productImage'
                                            onChange={handleProductImage}
                                        />
                                        <label className='custom-file-label'>
                                            Choose File
                                        </label>
                                    </div>

                                    <div className='form-group'>
                                        <label className='text-secondary'>
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='productName'
                                            value={productName}
                                            onChange={handleProductChange}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label className='text-secondary'>
                                            Description
                                        </label>
                                        <textarea
                                            className='form-control'
                                            rows='3'
                                            name='productDesc'
                                            value={productDesc}
                                            onChange={handleProductChange}
                                        ></textarea>
                                    </div>

                                    <div className='form-group'>
                                        <label className='text-secondary'>
                                            Price
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='productPrice'
                                            value={productPrice}
                                            onChange={handleProductChange}
                                        />
                                    </div>

                                    <div className='form-row'>
                                        <div className='form-group col-md-6'>
                                            <label className='text-secondary'>
                                                Category
                                            </label>
                                            <select
                                                className='custom-select mr-sm-2'
                                                name='productCategory'
                                                onChange={handleProductChange}
                                            >
                                                <option value=''>
                                                    Choose one...
                                                </option>
                                                {categories &&
                                                    categories.map((c) => (
                                                        <option
                                                            key={c._id}
                                                            value={c._id}
                                                        >
                                                            {c.category}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>

                                        <div className='form-group col-md-6'>
                                            <label className='text-secondary'>
                                                Quantity
                                            </label>
                                            <input
                                                type='number'
                                                className='form-control'
                                                min='0'
                                                max='1000'
                                                name='productQty'
                                                value={productQty}
                                                onChange={handleProductChange}
                                            />
                                        </div>
                                    </div>
                                </Fragment>
                            )}
                        </div>
                        <div className='modal-footer'>
                            <button
                                className='btn btn-secondary'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                            <button
                                type='submit'
                                className='btn btn-warning text-white'
                            >
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
            {showFoodModal()}
        </section>
    );
};

export default AdminDashboard;
