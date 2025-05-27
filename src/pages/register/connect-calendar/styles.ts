import { styled, Box } from '@ignite-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
  padding: '$4 $6',

  border: '1px solid $gray600',
  borderRadius: '$md',
})
