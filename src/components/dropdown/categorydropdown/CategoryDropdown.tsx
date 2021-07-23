import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Categorydropdown.css';
const CategoryDropdown = () => {
    return <Dropdown className={'dropdowncategorybutton'}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">All Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

export default CategoryDropdown