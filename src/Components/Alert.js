import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toUpperCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
    props.alert && <div className={`alert alert-${props.alert.type} warning alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>
  )
}

export default Alert
