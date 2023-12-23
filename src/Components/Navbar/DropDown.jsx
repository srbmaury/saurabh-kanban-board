import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../AppContext';
import SelectGroup from './SelectGroup';

const DropDown = ({ isDropdownOpen }) => {
    const { grouping, setGrouping, ordering, setOrdering, darkMode } = useAppContext();
    const dropdownRef = useRef();

    return (
        <>
            {/* Dropdown panel, show/hide based on dropdown state */}
            {isDropdownOpen && (
                <section
                    className={`absolute flex-col mt-3 px-5 py-3 z-50 rounded-md transition-max-height duration-300 ease-in-out border border-gray-200 shadow-lg rounded-lg  ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-200 bg-white text-black'}`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    {/* Grouping select */}
                    <SelectGroup
                        label="Grouping"
                        id="grouping"
                        options={[
                            { label: 'Status', value: 'status' },
                            { label: 'User', value: 'user' },
                            { label: 'Priority', value: 'priority' },
                        ]}
                        value={grouping}
                        onChange={setGrouping}
                        darkMode={darkMode}
                    />

                    {/* Ordering select */}
                    <SelectGroup
                        label="Ordering"
                        id="ordering"
                        options={[
                            { label: 'Title', value: 'title' },
                            { label: 'Priority', value: 'priority' },
                        ]}
                        value={ordering}
                        onChange={setOrdering}
                        darkMode={darkMode}
                    />
                </section>
            )}
        </>
    );
};

export default DropDown;