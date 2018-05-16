import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import NavigationBlock from './Navigation/NavigationBlock';
import NavigationDropDown from './Navigation/NavigationDropDown';
import NavigationItem from './Navigation/NavigationItem';

const Sidebar = props => (
  <div className="sidebar-wrapper">
    <div className="verticl-menu">
      <ul>
        <NavigationBlock>
          <NavigationDropDown
            label="Dashboard"
            icon="fa fa-tachometer"
            id="dashboard"
            onClick={() => props.history.push('/dashboard')}
          />
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown
            label="UI & Elements"
            icon="fa fa-desktop"
            id="ui-elements"
          >
            <NavigationItem
              label="Layouts"
              id="layouts"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Typography"
              id="typography"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Elements"
              id="elements"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Buttons & Icons"
              id="buttons-and-icons"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Content Sliders"
              id="content-sliders"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Treeview"
              id="treeview"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="jQuery UI"
              id="jquery-ui"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Nestable Lists"
              id="nestable-lists"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Three Level Menu"
              id="three-level-menu"
              onClick={() => props.history.push('/under-construction')}
            />
          </NavigationDropDown>
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown label="Tables" icon="fa fa-list" id="tables">
            <NavigationItem
              label="Simple & Dynamic"
              id="simple-and-dynamic"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="jqGrid plugin"
              id="jqgrid-plugin"
              onClick={() => props.history.push('/under-construction')}
            />
          </NavigationDropDown>
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown
            label="Forms"
            icon="fa fa-pencil-square-o"
            id="forms"
          >
            <NavigationItem
              label="Form Elements"
              id="form-elements"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Form Elements 2"
              id="form-elements-2"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Wizard & Validation"
              id="wizard-and-validation"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Wysiwyg & Markdown"
              id="wysiwyg-and-markdown"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Dropzone File Upload"
              id="dropzone-file-upload"
              onClick={() => props.history.push('/under-construction')}
            />
          </NavigationDropDown>
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown
            label="Widgets"
            icon="fa fa-list-alt"
            id="widgets"
            onClick={() => props.history.push('/under-construction')}
          />
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown
            label="Calendar"
            icon="fa fa-calendar"
            id="calendar"
            onClick={() => props.history.push('/under-construction')}
          />
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown
            label="Gallery"
            icon="fa fa-picture-o"
            id="gallery"
            onClick={() => props.history.push('/under-construction')}
          />
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown
            label="More Pages"
            icon="fa fa-tag"
            id="more-pages"
          >
            <NavigationItem
              label="User Profile"
              id="user-profile"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Inbox"
              id="inbox"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Pricing Tables"
              id="pricing-tables"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Invoice"
              id="invoice"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Timeline"
              id="timeline"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Email Templates"
              id="email-templates"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Login & Register"
              id="login-and-register"
              onClick={() => props.history.push('/under-construction')}
            />
          </NavigationDropDown>
        </NavigationBlock>
        <NavigationBlock>
          <NavigationDropDown
            label="Other Pages"
            icon="fa fa-file-o"
            id="other-pages"
          >
            <NavigationItem
              label="FAQ"
              id="faq"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Error 404"
              id="error-404"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Error 500"
              id="error-500"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Grid"
              id="grid"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Blank Page"
              id="blank-page"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Email Templates"
              id="email-templates"
              onClick={() => props.history.push('/under-construction')}
            />
            <NavigationItem
              label="Login & Register"
              id="login-and-register"
              onClick={() => props.history.push('/under-construction')}
            />
          </NavigationDropDown>
        </NavigationBlock>
      </ul>
    </div>
  </div>
);

Sidebar.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Sidebar);
