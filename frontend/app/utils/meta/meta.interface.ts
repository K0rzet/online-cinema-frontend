import { PropsWithChildren } from "react"

export interface ISeo extends PropsWithChildren {
    title: string
    description?: string
    image?: string
}