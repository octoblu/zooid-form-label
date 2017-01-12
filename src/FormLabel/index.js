import React, { PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
}

const defaultProps = {
  name: '',
}

const FormLabel = ({ className, children, name, required }) => {
  if (!children) return null

  let requiredIndicator = null
  if (required) requiredIndicator = <span className={styles.requiredIndicator}> *</span>

  return (
    <label
      htmlFor={name}
      className={classNames(styles.root, className)}
    >
      {children}{requiredIndicator}
    </label>
 )
}

FormLabel.propTypes    = propTypes
FormLabel.defaultProps = defaultProps

export default FormLabel
