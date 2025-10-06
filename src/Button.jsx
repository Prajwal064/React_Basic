import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {
  console.log(props)
  return (
    <div>
      <button>{props.textInsideButton}</button>
    </div>
  )
}


// Button.defaultprops{
//   bgColor: 'pink'
// }

export default Button
