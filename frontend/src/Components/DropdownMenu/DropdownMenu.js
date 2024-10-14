import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownContainer from './DropdownMenu.element';

function DropdownMenu({DropdownName,option,}) {
  const placeholderOption = []
  const DropdownValue = option ?? placeholderOption;
  
  return (
<DropdownContainer>
    <Dropdown style={{margin: '1rem',}} >
      <Dropdown.Toggle id="dropdown-basic" className='dropdownMenu' style={{backgroundColor: '#aeaeae',border: 'none'}}>
        {DropdownName}
      </Dropdown.Toggle>

      <Dropdown.Menu >
      
        {DropdownValue.map((placeholderOption, index) => (
          <Dropdown.Item href="#/action-1" key={index} value={placeholderOption} style={{backgroundColor: '#aeaeae'}}>
            {placeholderOption}
            </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </DropdownContainer>
  )
}

export default DropdownMenu