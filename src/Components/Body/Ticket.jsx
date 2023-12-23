import React from "react";
import Status from "./Status";
import Priority from "./Priority";
import UserIcon from "./UserIcon.jsx";
import { useAppContext } from "../../AppContext.jsx";

const Ticket = ({ id, title, tag, priority, name, available }) => {
    const { grouping, darkMode } = useAppContext();

    return (
        <div
            className={`
                p-3 
                rounded-md 
                shadow-md 
                border 
                my-2 
                sm: w-96 md:w-72
                relative 
                ${
                    darkMode
                        ? "border-gray-600 bg-gray-800 text-white"
                        : "border-gray-200 bg-white text-black"
                }`}
        >
            <div
                className={`
                    flex 
                    items-center 
                    justify-between 
                    mb-2 
                    overflow-visible 
                    ${darkMode ? "text-white" : "text-gray-400"}`}
            >
                <h3 className="text-md font-semibold">{id}</h3>

                {/* User icon */}
                {grouping !== "user" && (
                    <UserIcon name={name} available={available} />
                )}
            </div>

            <div className="flex items-center mb-2 items-baseline">
                {/* Status */}
                {grouping !== "status" && <Status type="In progress" />}
                <p
                    className={`font-semibold ml-2 ${
                        darkMode ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </p>
            </div>

            <div
                className={`
                bottom-line 
                max-w-md 
                inline-block 
                ${darkMode ? "border-gray-700" : "border-gray-300"}`}
            >
                <div className="flex tag-wrapper inline-block">
                    {/* Priority */}
                    {grouping !== "priority" && (
                        <div
                            className={`
                            mr-2 border 
                            ${darkMode ? "border-gray-700" : "border-gray-300"} 
                            rounded p-1`}
                        >
                            <Priority type={priority} />
                        </div>
                    )}
                    <div
                        className={`
                        tag 
                        flex 
                        border 
                        ${darkMode ? "border-gray-700" : "border-gray-300"} 
                        rounded-md 
                        px-1 
                        text-sm 
                        ${darkMode ? "text-white" : "text-gray-500"}`}
                    >
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
                                style={{ color: "gray", marginTop: 0 }}
                            >
                                <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                            </svg>
                        </div>
                        {tag.map((t, index) => (
                            <span key={index} style={{ marginTop: 0 }}>{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
