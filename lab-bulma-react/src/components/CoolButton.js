import React, { Component } from 'react'
import classNames from 'class-name'

class CoolButton extends Component {
  render() {
    const bulmaClasses = {
      isActive: 'is-active',
      isBlack: 'is-black',
      isCentered: 'is-centered',
      isDanger: 'is-danger',
      isDark: 'is-dark',
      isFocused: 'is-focused',
      isGrouped: 'is-grouped',
      isHovered: 'is-hovered',
      isInfo: 'is-info',
      isInverted: 'is-inverted',
      isLarge: 'is-large',
      isLight: 'is-light',
      isLink: 'is-link',
      isLoading: 'is-loading',
      isMedium: 'is-medium',
      isOutlined: 'is-outlined',
      isPrimary: 'is-primary',
      isRight: 'is-right',
      isRounded: 'is-rounded',
      isSelected: 'is-selected',
      isSmall: 'is-small',
      isStatic: 'is-static',
      isSuccess: 'is-success',
      isText: 'is-text',
      isWarning: 'is-warning',
      isWhite: 'is-white',
    }
    const classNamesFromProps = {}
    const { className, children, ...rest } = this.props
    for (const key in rest) {
      classNamesFromProps[bulmaClasses[key]] = this.props[key]
    }
    return (
      <button className={classNames('button ', this.props.className, classNamesFromProps)}>{this.props.children}</button>
    )
  }
}

export default CoolButton