import React, { Component } from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import styles from './style.css'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: null
}

export class BaseLayoutComponent extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Layout className={styles.wrap}>{children}</Layout>
      </>
    )
  }
}

BaseLayoutComponent.propTypes = propTypes
BaseLayoutComponent.defaultProps = defaultProps
export default BaseLayoutComponent
