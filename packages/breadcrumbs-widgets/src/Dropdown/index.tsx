'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Icon } from 'breadcrumbs-icons'
import { Button, Flex, Text } from 'breadcrumbs-ui'
import classNames from 'classnames'
import { DropdownProps, OptionType } from './types'

const Dropdown = ({
  options,
  onSelect,
  backgroundColor = 'backgroundBright',
  placeholder = 'Select an option',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        dropdownRef.current &&
        //@ts-ignore
        !dropdownRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  const handleSelect = (option: OptionType) => {
    if (onSelect) {
      onSelect(option)
    }
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Flex align="center">
          {placeholder}
          <Icon icon="caret" size={12} className="ml-2.5" color="white" />
        </Flex>
      </Button>
      {isOpen && (
        <ul
          className={classNames(
            'absolute mt-2 w-fit py-1 border rounded-lg shadow-lg',
            `border-border bg-${backgroundColor} shadow-${backgroundColor}`,
          )}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={classNames(
                'cursor-pointer hover:brightness-105 px-3 py-2',
                `bg-${backgroundColor}`,
              )}
            >
              {typeof option === 'string' ? (
                <button onClick={() => handleSelect(option)}>
                  <Text size="small">{option}</Text>
                </button>
              ) : (
                <div onClick={() => handleSelect(option)}>{option}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
