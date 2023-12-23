import React, { useState } from 'react';
import SelectButton from './SelectButton';
import DropDown from './DropDown';

const Display = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <SelectButton isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} />
            <DropDown isDropdownOpen={isDropdownOpen} />
        </div>
    );
};

export default Display;
