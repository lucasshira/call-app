import Calendar from '@/pages/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimePickerListItem,
} from './styles'
import { useState } from 'react'
import dayjs from 'dayjs'

export default function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{describedDate}</span>
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
