import React from 'react'
import PropTypes from 'prop-types'

function InputField(props) {

    const onFocus = () => {
        console.log('onFocus')
    }

    const onBlur = () => {
        console.log('onBlur')
    }

    const titleClass = false ? "input-field-title" : "input-field-title-focused"

  return (
    <div className='input-field-container'>
        <input type={props.type} className='input-field p-0' onFocus={onFocus} onBlur={onBlur} ></input>
        <span className={titleClass}>{props.title}</span>
    </div>
  )
}

InputField.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'hidden']),
    title: PropTypes.string,
    errorText: PropTypes.string
}

export default InputField
