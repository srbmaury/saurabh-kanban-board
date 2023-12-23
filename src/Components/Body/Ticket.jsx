import React from 'react';
import Status from './Status';
import Priority from './Priority';
import UserIcon from './UserIcon.jsx';

const Ticket = ({ title, description, name, online }) => {
    return (
        <div className="bg-white p-5 rounded-md shadow-md m-4 w-72 relative">
            <div className="flex items-center justify-between mb-2 overflow-visible">
                <h3 className="text-md font-semibold text-gray-400">{title}</h3>
                <UserIcon name={name} online={online} />
            </div>

            <div className="flex items-center mb-2">
                <Status type="In progress" />
                <p className="font-semibold ml-2">{description}</p>
            </div>

            <div className="bottom-line max-w-md inline-block">
                <div className="flex tag-wrapper inline-block">
                    <Priority type="Low" />
                    <div className="tag flex border border-gray-300 rounded-md px-1 text-sm text-gray-500">
                        <div className="pt-1 pr-1">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 256 256"
                                className="icon"
                                height="0.75em"
                                width="0.75em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: 'gray', marginTop: 0 }}
                            >
                                <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                            </svg>
                        </div>
                        <span style={{ marginTop: 0 }}>Feature Request</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
