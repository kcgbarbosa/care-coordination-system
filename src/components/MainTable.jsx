import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { careItems } from "../references"

function MainTable() {

  return (
    <div> 
      <h1 className="flex justify-center py-10 text-2xl">Care Coordination System</h1>
      
      <Table className="">
        <TableCaption> Manage patient care items</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned Staff Member</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {careItems.map(items => (
            <TableRow key={items.items}>
              <TableCell>{items.patient.name}</TableCell>
              <TableCell>{items.category}</TableCell>
              <TableCell>{items.status}</TableCell>
              <TableCell>{items.assignedStaff}</TableCell>
              <TableCell>{items.dueDate}</TableCell>
              <TableCell>{items.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
  )
}

export default MainTable

