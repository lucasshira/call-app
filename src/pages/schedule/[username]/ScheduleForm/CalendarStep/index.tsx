import Calendar from '@/pages/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimePickerListItem,
} from './styles'

export default function CalendarStep() {
  const isDateSelected = false

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira, <span>20 de setembro</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerListItem>08:00h</TimePickerListItem>
            <TimePickerListItem>09:00h</TimePickerListItem>
            <TimePickerListItem>10:00h</TimePickerListItem>
            <TimePickerListItem>11:00h</TimePickerListItem>
            <TimePickerListItem>12:00h</TimePickerListItem>
            <TimePickerListItem>13:00h</TimePickerListItem>
            <TimePickerListItem>14:00h</TimePickerListItem>
            <TimePickerListItem>15:00h</TimePickerListItem>
            <TimePickerListItem>16:00h</TimePickerListItem>
            <TimePickerListItem>17:00h</TimePickerListItem>
            <TimePickerListItem>18:00h</TimePickerListItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
