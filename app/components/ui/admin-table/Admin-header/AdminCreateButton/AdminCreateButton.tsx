import React, { FC } from 'react'
import Button from '@/components/ui/form-elements/Button'
const AdminCreateButton: FC<{onClick: () => void}> = ({onClick}) => {
  return (
    <Button onClick={onClick}>Create New</Button>
  )
}

export default AdminCreateButton