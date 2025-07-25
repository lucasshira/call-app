import { useState } from 'react'

import CalendarStep from './CalendarStep'
import ConfirmStep from './ConfirmStep'

export default function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  function handleClearSelectedDate() {
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDate}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDateTime} />
}
