import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react"
import { careItems } from "../references"

function MainTable() {

  const [careItem, setCareItem] = useState(careItems)

  const handleStatusChange = (newStatus, targetId) => {
    setCareItem(prevItems => prevItems.map(item => {
      if(item.patient.id === targetId) {
        return { ...item, status: newStatus};
      }
      return item;
    }))
  }

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
          {careItem.map((item) => (
            <TableRow key={item.patient.id}>
              <TableCell>{item.patient.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                <Select value={item.status} onValueChange={(value) => handleStatusChange(value, item.patient.id)} >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{item.assignedStaff}</TableCell>
              <TableCell>{item.dueDate}</TableCell>
              <TableCell>{item.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default MainTable

