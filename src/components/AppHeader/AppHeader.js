import React from 'react';
import PropTypes from 'prop-types';
import primeShareLogo from '../../assets/images/primeshareLogo.png';

const AppHeader = props => (
  <div className="topbar">
    <div className="row inline-row">
      <div className="col-sm-7">
        <div className="text-left">
          <ul className="list-inline ">
            <li className="list-inline-item">
              <div className="logo">
                <img src={primeShareLogo} alt="logo" />
              </div>
            </li>
            <li className="list-inline-item">
              <a
                href="#sidebar-menu-toggle"
                onClick={() => {
                  props.toggleSidebar();
                }}
                id="sidebar-menu-toggle"
              >
                <i className="fa fa-bars" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

AppHeader.propTypes = {
  toggleSidebar: PropTypes.func,
};

AppHeader.defaultProps = {
  toggleSidebar: () => {},
};

export default AppHeader;
