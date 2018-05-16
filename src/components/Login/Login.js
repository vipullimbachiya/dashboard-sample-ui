import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import primeShareLogo from '../../assets/images/primeshareLogo.png';

const Login = props => (
  <div className="login-layout">
    <div className="main-container">
      <div className="main-content">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="login-container">
              <div className="center">
                <h1>
                  <img src={primeShareLogo} alt="" />
                </h1>
              </div>
              <div className="space-6" />
              <div className="position-relative">
                <div
                  id="login-box"
                  className="login-box visible widget-box no-border"
                >
                  <div className="widget-body">
                    <div className="widget-main">
                      <h4 className="header blue lighter bigger">
                        <i className="ace-icon fa fa-coffee green" />
                        Please Enter Your Information
                      </h4>

                      <div className="space-6" />

                      <form>
                        <fieldset>
                          <label className="block clearfix" htmlFor="username">
                            <span className="block input-icon input-icon-right">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                              />
                              <i className="ace-icon fa fa-user" />
                            </span>
                          </label>

                          <label className="block clearfix" htmlFor="password">
                            <span className="block input-icon input-icon-right">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                              />
                              <i className="ace-icon fa fa-lock" />
                            </span>
                          </label>

                          <div className="space" />

                          <div className="clearfix">
                            <label className="inline" htmlFor="remember">
                              <input type="checkbox" className="ace" />
                              <span className="lbl"> Remember Me</span>
                            </label>

                            <button
                              type="button"
                              className="width-35 pull-right btn btn-sm btn-primary"
                              onClick={() => props.history.push('/dashboard')}
                            >
                              <i className="ace-icon fa fa-key" />
                              <span className="bigger-110">Login</span>
                            </button>
                          </div>

                          <div className="space-4" />
                        </fieldset>
                      </form>

                      <div className="social-or-login center">
                        <span className="bigger-110">Or Login Using</span>
                      </div>

                      <div className="space-6" />

                      <div className="social-login center">
                        <a className="btn btn-primary" href="#facebook">
                          <i className="ace-icon fa fa-facebook" />
                        </a>

                        <a className="btn btn-info" href="#twitter">
                          <i className="ace-icon fa fa-twitter" />
                        </a>

                        <a className="btn btn-danger" href="#google">
                          <i className="ace-icon fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                    {/* .widget-main */}

                    <div className="toolbar clearfix">
                      <div>
                        <a
                          href="#forgotPassword"
                          data-target="#forgot-box"
                          className="forgot-password-link"
                        >
                          <i className="ace-icon fa fa-arrow-left" />
                          I forgot my password
                        </a>
                      </div>

                      <div>
                        <a
                          href="#signup"
                          data-target="#signup-box"
                          className="user-signup-link"
                        >
                          I want to register
                          <i className="ace-icon fa fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .widget-body */}
                </div>
                {/* .login-box */}
              </div>
              {/* .position-relative */}
            </div>
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      {/* .main-content */}
    </div>
    {/* .main-container */}
  </div>
);

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Login);
