import Auth from '@/components/screens/auth/Auth'
import { useAuthRedirect } from '@/components/screens/auth/useAuthRedirect'
import { NextPage } from 'next'

const AuthPage: NextPage = () => {

  return (
    <Auth />
  )
}

export default AuthPage