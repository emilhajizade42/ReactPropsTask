import React from 'react'

function Main(props) {
    return (
        <div>
            {/* <!-- Page content --> */}
            <div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>
                {props.children}
            </div>
        </div>
    )
}

export default Main