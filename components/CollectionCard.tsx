import { Collection } from '@prisma/client'
import React from 'react'

interface Props {
  collection: Collection;
}

function CollectionCard({ collection }: Props) {
  return (
    <div>{collection.name}</div>
  )
}

export default CollectionCard