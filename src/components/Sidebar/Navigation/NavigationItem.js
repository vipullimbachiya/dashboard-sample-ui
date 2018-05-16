import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../../Actions/sidebarActions';

const selectItem = (props) => {
  props.selectNavItem(props.id);
};

const NavigationItem = props => (
  <li>
    <div
      role="presentation"
      onClick={() => selectItem(props)}
      onKeyDown={() => {}}
    >
      <div
        role="presentation"
        onClick={props.onClick}
        className="item-label"
        onKeyDown={() => {}}
      >
        {/* {props.icon && <div className="material-icons item-icon">{props.icon}</div>} */}
        {/* {!props.icon && <div className="material-icons item-icon">chevron_right</div>} */}
        <i className={`item-icon ${props.icon}`} />
        <div
          className={`item-label ${
            props.selectedNavItem === props.id ? 'item-label-selected' : ''
          }`}
        >
          {props.label}
        </div>
      </div>
    </div>
  </li>
);

NavigationItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  selectedNavItem: PropTypes.string,
};

NavigationItem.defaultProps = {
  onClick: () => {},
  id: '',
  selectedNavItem: '',
  icon: '',
  label: '',
};

const mapStateToProps = state => ({
  isSelected: state.sidebar.selectedNavItem,
  selectedNavItem: state.sidebar.selectedNavItem,
});

const mapDispatchToProps = dispatch => ({
  selectNavItem: id => dispatch(actions.selectNavItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);
