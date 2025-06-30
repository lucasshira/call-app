import { styled, Box, Text } from '@ignite-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: '$6',
  display: 'grid',
  maxWidth: '100%',
  position: 'relative',
  backgroundColor: '$gray800',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        width: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6 $6 0',
  overflowY: 'scroll',

  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  width: 280,
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  marginTop: '$3',
  gap: '$2',

  '@media(max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
})

export const TimePickerListItem = styled('button', {
  border: 0,
  width: '100%',
  background: '$gray600',
  padding: '$2 0',
  textAlign: 'center',
  borderRadius: '$sm',
  cursor: 'pointer',
  color: '$gray100',
  fontSize: '$sm',
  lineHeight: '$base',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $color$gray100',
  },
})
