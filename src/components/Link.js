import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) =>{
    if (active) {
        return <span>{children}</span>
    }
    return (
        <button  
            onClick = {onClick}
            disabled = {active}
        >
            {children}
        </button>
    )
}

Link.propTypes = {
    active:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired, // what the hell is a node?
    onClick:PropTypes.func.isRequired
}

export default Link