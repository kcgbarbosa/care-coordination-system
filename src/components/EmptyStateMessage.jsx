import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function EmptyStateMessage() {
  return (
      <TableRow >
        <TableCell colSpan={6} className="text-center py-6"> 
          There are no available care items to be reviewed.
        </TableCell>
      </TableRow>

  )
}

export default EmptyStateMessage