import { styled, Box } from '@ignite-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: '$6',
  display: 'grid',
  maxWidth: '100%',
  position: 'relative',
  backgroundColor: '$gray800',

  width: 540,
  gridTemplateColumns: '1fr',
})
