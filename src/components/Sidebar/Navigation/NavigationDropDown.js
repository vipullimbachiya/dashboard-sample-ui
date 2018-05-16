import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';

import * as actions from '../../../Actions/sidebarActions';

const toggleDropDown = (props) => {
  if (props.openedNav === props.id) props.closeNav();
  else props.openNav(props.id);
};

const NavigationDropDown = props => (
  <li>
    <div
      role="presentation"
      onClick={() => {
        if (!props.unselectable) {
          toggleDropDown(props);
        }
        if (props.onClick) props.onClick();
      }}
      className={`${
        Array.isArray(props.children) ? 'main-item-label' : 'dashboard-label'
      } ${props.selectedNav === props.id ? 'main-item-label-selected' : ''} ${
        props.openedNav === props.id ? 'main-item-label-expanded' : ''
      }`}
      onKeyDown={() => {}}
    >
      <div className="item activevermenu">
        <i className={`item-icon ${props.icon}`} />
        <span>{props.label}</span>
      </div>
    </div>
    <Collapse in={props.openedNav === props.id}>
      <ul className="subcollink">{props.children}</ul>
    </Collapse>
  </li>
);

NavigationDropDown.propTypes = {
  id: PropTypes.string,
  openedNav: PropTypes.string,
  selectedNav: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
  unselectable: PropTypes.bool,
};

NavigationDropDown.defaultProps = {
  id: '',
  openedNav: '',
  selectedNav: '',
  icon: '',
  children: <div />,
  onClick: () => {},
  unselectable: false,
};

const mapStateToProps = state => ({
  openedNav: state.sidebar.openedNav,
  selectedNav: state.sidebar.selectedNav,
  isSelected: state.sidebar.selectedNavItem,
  selectedNavItem: state.sidebar.selectedNavItem,
});

const mapDispatchToProps = dispatch => ({
  openNav: id => dispatch(actions.openNav(id)),
  closeNav: id => dispatch(actions.closeNav(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDropDown);
