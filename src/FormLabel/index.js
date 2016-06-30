import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  required: PropTypes.bool,
}

const defaultProps = {
  name: '',
}

const FormLabel = ({ children, name, required }) => {
  if (!children) return null

  let requiredIndicator = null
  if (required) requiredIndicator = <span className={styles.requiredIndicator}> *</span>

  return (
    <label
      htmlFor={name}
      className={styles.root}
    >
      {children}{requiredIndicator}
    </label>
 )
}

FormLabel.propTypes    = propTypes
FormLabel.defaultProps = defaultProps

export default FormLabel
