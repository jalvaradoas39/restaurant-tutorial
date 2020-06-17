import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';

const Header = () => {
    // views
    const showNavigation = () => (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>
                Logo
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signup' className='nav-link'>
                                    Signup
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signin' className='nav-link'>
                                    Signin
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && isAuthenticated().role === 0 && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link to='/user/dashboard' className='nav-link'>
                                    Dashboard
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && isAuthenticated().role === 1 && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link
                                    to='/admin/dashboard'
                                    className='nav-link'
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link
                                    to='/admin/dashboard'
                                    className='nav-link'
                                >
                                    Logout
                                </Link>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );

    // render
    return <header id='header'>{showNavigation()}</header>;
};

export default withRouter(Header);
