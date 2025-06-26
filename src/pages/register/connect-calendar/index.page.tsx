import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'

import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const router = useRouter()
  const session = useSession()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  // function to connect to google
  const handleConnectCalendar = async () => {
    await signIn('google')
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Bem-vindo, {session.data.user?.name}
              <Check size={16} />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight size={16} />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google. Verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </AuthError>
        )}

        <Button
          disabled={!isSignedIn}
          onClick={router.push('/register/time-intervals')}
        >
          Próximo passo
          <ArrowRight size={16} />
        </Button>
      </ConnectBox>
    </Container>
  )
}
