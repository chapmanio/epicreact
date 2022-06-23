// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

function setup({initialProps} = {}) {
  const result = {}
  function TestComponent() {
    result.current = useCounter(initialProps)
    return null
  }

  render(<TestComponent />)

  return result
}

test('exposes the count and increment/decrement functions', async () => {
  const result = setup()

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('allows customisation of the initial count', async () => {
  const result = setup({initialProps: {initialCount: 3}})

  expect(result.current.count).toBe(3)
})

test('allows customisation of the step', async () => {
  const result = setup({initialProps: {step: 2}})

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(2)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

/* eslint no-unused-vars:0 */
