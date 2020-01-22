import React from 'react'
export const requiredField = (value) => {
    if (value) return undefined
    return <span>'Field is required'</span>
}
export const minLengthCreatot = (minLength) => (value) => {
    if (value.length < minLength) return `minxLength is ${minLength}`
    return undefined
}