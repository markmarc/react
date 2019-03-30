import React from 'react'

const Spinner = (props) => {
    return (
        <div className = "ui acrtive dimmer">
        <div className = "ui big text loader">
        {props.message  }
        </div>
        </div>
    )
}

Spinner.defaultProps = {
    message: "ŁAdowanie dannnych ..."
}
export default Spinner 