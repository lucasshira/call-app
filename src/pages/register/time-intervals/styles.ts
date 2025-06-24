import { styled, Box, Text } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$6',
})

export const IntervalsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalItem = styled('div', {
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(30%)',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
  textAlign: 'center',
})
