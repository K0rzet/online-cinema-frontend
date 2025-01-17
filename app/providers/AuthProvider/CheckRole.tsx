import { useAuth } from "@/hooks/useAuth"
import { TypeComponentAuthFields } from "@/shared/types/auth.types"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

const CheckRole: FC<TypeComponentAuthFields & PropsWithChildren> = ({children, Component: {isOnlyAdmin, isOnlyUser}}) => {
    const {user} = useAuth()

    const router = useRouter()

    const Children = () => <>{children}</>


    if (user?.isAdmin) return <Children />

    if(isOnlyAdmin){
        router.pathname !== '/404' && router.replace('/404')
        return null
    }

    const isUser = user && !user.isAdmin

    if (isUser && isOnlyUser) return <Children />

    else {
        router.pathname !== '/auth' && router.replace('/auth')
        return null
    }

  return (
    <div>CheckRole</div>
  )
}

export default CheckRole