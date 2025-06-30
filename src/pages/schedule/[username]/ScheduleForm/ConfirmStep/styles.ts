import { Box, styled, Text } from '@ignite-ui/react'

export const ConfirmForm = styled(Box, {
  maxWidth: 540,
  padding: '$6',
  margin: '$6 auto 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '$2',
    gap: '$1',
  },
})

export const FormHeader = styled('div', {
  display: 'flex',
  borderBottom: '1px solid $gray600',
  paddingBottom: '$6',
  gap: '$4',
  alignItems: 'center',

  [`> ${Text}`]: {
    display: 'flex',
    alignItems: 'center',
  },

  svg: {
    color: 'gray200',
    marginRight: '$2',
    width: '$5',
    height: '$5',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
})
