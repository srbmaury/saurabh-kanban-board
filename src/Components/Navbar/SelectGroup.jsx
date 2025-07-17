import { useEffect } from 'react';

const SelectGroup = ({ label, id, options, value, onChange, darkMode }) => {
    useEffect(() => {
        const storedValue = localStorage.getItem(id);
        if (storedValue !== null) {
            onChange(storedValue);
        }
    }, [id, onChange]);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        onChange(selectedValue);
        localStorage.setItem(id, selectedValue);
    };

    return (
        <div className="py-1 flex justify-between gap-16">
            <label htmlFor={id} className="text-gray-500 block py-1 text-md">
                {label}
            </label>
            <select
                id={id}
                name={id}
                className={`w-32 rounded-md border shadow-sm px-4 py-1 text-md focus:outline-none  ${darkMode ? 'border-gray-500 bg-gray-800 text-white' : 'border-gray-300 bg-white text-black'
                    }`}
                value={value}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectGroup;