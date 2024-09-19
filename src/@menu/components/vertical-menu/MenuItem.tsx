'use client'

// React Imports
import { forwardRef, useEffect, useState } from 'react'
import type { AnchorHTMLAttributes, ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import classnames from 'classnames'
import { useUpdateEffect } from 'react-use'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { ChildrenType, MenuItemElement, MenuItemExactMatchUrlProps, RootStylesType } from '../../types'

// Component Imports
import MenuButton from './MenuButton'

// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'
import useVerticalMenu from '../../hooks/useVerticalMenu'

// Util Imports
import { renderMenuIcon } from '../../utils/menuUtils'
import { menuClasses } from '../../utils/menuClasses'

// Styled Component Imports
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledVerticalMenuItem from '../../styles/vertical/StyledVerticalMenuItem'

export type MenuItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  RootStylesType &
  Partial<ChildrenType> &
  MenuItemExactMatchUrlProps & {
    icon?: ReactElement
    prefix?: ReactNode
    suffix?: ReactNode
    disabled?: boolean
    target?: string
    rel?: string
    component?: string | ReactElement
    onActiveChange?: (active: boolean) => void

    /**
     * @ignore
     */
    level?: number
  }

const MenuItem: ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (props, ref) => {
  
  const {
    children,
    icon,
    className,
    prefix,
    suffix,
    level = 0,
    disabled = false,
    exactMatch = true,
    activeUrl,
    component,
    onActiveChange,
    rootStyles,
    ...rest
  } = props

  
  const [active, setActive] = useState(false)

  
  const pathname = usePathname()
  const { menuItemStyles, renderExpandedMenuItemIcon, textTruncate } = useVerticalMenu()

  const { isCollapsed, isHovered, isPopoutWhenCollapsed, toggleVerticalNav, isToggled, isBreakpointReached } =
    useVerticalNav()

  const getMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    if (menuItemStyles) {
      const params = { level, disabled, active, isSubmenu: false }

      const styleFunction = menuItemStyles[element]

      if (styleFunction) {
        return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction
      }
    }
  }

  const handleClick = () => {
    if (isToggled) {
      toggleVerticalNav()
    }
  }

  useEffect(() => {
    const href = rest.href || (component && typeof component !== 'string' && component.props.href)

    if (href) {
      if (exactMatch ? pathname === href : activeUrl && pathname.includes(activeUrl)) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
  }, [pathname])

  useUpdateEffect(() => {
    onActiveChange?.(active)
  }, [active])

  return (
    <StyledVerticalMenuItem
      ref={ref}
      className={classnames(
        menuClasses.menuItemRoot,
        { [menuClasses.disabled]: disabled },
        { [menuClasses.active]: active },
        className
      )}
      level={level}
      isCollapsed={isCollapsed}
      isPopoutWhenCollapsed={isPopoutWhenCollapsed}
      disabled={disabled}
      buttonStyles={getMenuItemStyles('button')}
      menuItemStyles={getMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <MenuButton
        className={classnames(menuClasses.button, { [menuClasses.active]: active })}
        component={component}
        tabIndex={disabled ? -1 : 0}
        {...rest}
        onClick={e => {
          handleClick()
          rest.onClick && rest.onClick(e)
        }}
      >
       
        {renderMenuIcon({
          icon,
          level,
          active,
          disabled,
          renderExpandedMenuItemIcon,
          styles: getMenuItemStyles('icon'),
          isBreakpointReached
        })}

        
        {prefix && (
          <StyledMenuPrefix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rootStyles={getMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        
        <StyledMenuLabel
          className={menuClasses.label}
          rootStyles={getMenuItemStyles('label')}
          textTruncate={textTruncate}
        >
          {children}
        </StyledMenuLabel>

        
        {suffix && (
          <StyledMenuSuffix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledVerticalMenuItem>
  )
}

export default forwardRef(MenuItem)
