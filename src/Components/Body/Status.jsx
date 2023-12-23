import React from 'react'

const Status = ({ type }) => {

    const commonStyle = {
        stroke:"currentColor",
        viewBox:"0 0 24 24",
        className:"icon",
        height:"1.5em",
        width:"1em",
        xmlns:"http://www.w3.org/2000/svg",
    }

    return (
        <div>
            {/* Backlog */}
            {type === "Backlog" && <svg {...commonStyle} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "gray" }}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7.5 4.21l0 .01"></path><path d="M4.21 7.5l0 .01"></path><path d="M3 12l0 .01"></path><path d="M4.21 16.5l0 .01"></path><path d="M7.5 19.79l0 .01"></path><path d="M12 21l0 .01"></path><path d="M16.5 19.79l0 .01"></path><path d="M19.79 16.5l0 .01"></path><path d="M21 12l0 .01"></path><path d="M19.79 7.5l0 .01"></path><path d="M16.5 4.21l0 .01"></path><path d="M12 3l0 .01"></path>
            </svg>}

            {/* Todo */}
            {type === "Todo" && <svg {...commonStyle} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "gray" }}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            </svg>}

            {/* In Progress */}
            {type === "In progress" && <svg {...commonStyle} fill="currentColor" strokeWidth="0" style={{ color: "rgb(245, 200, 66)" }}>
                <path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path>
            </svg>}

            {/* Done */}
            {type === "Done" && <svg {...commonStyle} fill="currentColor" strokeWidth="0" style={{ color: "rgb(56, 75, 181)" }} >
                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
            </svg>}

            {/* Cancelled */}
            {type === "Cancelled" && <svg {...commonStyle} fill="currentColor" strokeWidth="0" style={{ color: "gray" }} >
                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L12 10.939Z"></path>
            </svg>}
        </div>
    )
}

export default Status
