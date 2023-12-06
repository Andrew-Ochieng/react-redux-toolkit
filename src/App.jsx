import { useState } from 'react'
import './App.css'
import { Button, Flex, Spacer } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementAmountBy, increment, incrementAmountBy } from './redux/counter'

function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <Flex flexDirection='column' justifyItems='center' alignItems='center' marginTop='20'>
        <p>
          The count is {count}
        </p>
        <Flex  gap={6} marginTop='10'>
          <Button
              size='lg'
              variant='outline'
              colorScheme='blue' 
              onClick={() => dispatch(increment())}>
              Increment
            </Button>
            <Spacer />
            <Button
              size='lg'
              variant='solid'
              colorScheme='blue' 
              onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
            <Button
              size='lg'
              variant='outline'
              colorScheme='blue' 
              onClick={() => dispatch(incrementAmountBy(20))}>
              Increment Amount By 20
            </Button>
            <Button
              size='lg'
              variant='solid'
              colorScheme='blue' 
              onClick={() => dispatch(decrementAmountBy(20))}>
              Decrement Amount By 20
            </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default App
