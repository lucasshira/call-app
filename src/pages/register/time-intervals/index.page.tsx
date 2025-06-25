import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalsContainer,
  IntervalItem,
  IntervalDay,
  IntervalInputs,
  FormError,
} from './styles'
import { ArrowRight } from 'phosphor-react'
import { useFieldArray, useForm, Controller } from 'react-hook-form'
import { getWeekDays } from '@/utils/get-week-days'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ConvertTimeStringToMinutes } from '@/utils/convert-time-string-to-minutes'

const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: 'É necessário selecionar pelo menos um dia da semana.',
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: ConvertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: ConvertTimeStringToMinutes(interval.endTime),
        }
      })
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 30 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'O horário de término deve ser pelo menos 30 minutos do início.',
      },
    ),
})

type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: [
        // week days
        { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const weekDays = getWeekDays()
  const intervals = watch('intervals')

  async function handleSetTimeInterval(data: TimeIntervalsFormOutput) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários em que você está disponível em cada dia
          da semana.
        </Text>

        <MultiStep size={4} currentStep={3} />

        <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeInterval)}>
          <IntervalsContainer>
            {fields.map((field, i) => {
              return (
                <IntervalItem key={field.id}>
                  <IntervalDay>
                    <Controller
                      name={`intervals.${i}.enabled`}
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          onCheckedChange={(checked: boolean) => {
                            field.onChange(checked === true)
                          }}
                          checked={field.value}
                        />
                      )}
                    />
                    <Text>{weekDays[field.weekDay]}</Text>
                  </IntervalDay>

                  <IntervalInputs>
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      {...register(`intervals.${i}.startTime`)}
                      disabled={intervals[i].enabled === false}
                    />
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      disabled={intervals[i].enabled === false}
                      {...register(`intervals.${i}.endTime`)}
                    />
                  </IntervalInputs>
                </IntervalItem>
              )
            })}
          </IntervalsContainer>

          {errors.intervals && (
            <FormError size="sm">{errors.intervals?.root?.message}</FormError>
          )}

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </IntervalBox>
      </Header>
    </Container>
  )
}
