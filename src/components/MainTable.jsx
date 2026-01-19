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

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { useState } from "react"
import { careItems } from "../references"

function MainTable() {

  const [careItem, setCareItem] = useState(careItems)

  const handleStatusChange = (newStatus, targetId) => {
    setCareItem(prev => prev.map(item =>
      item.patient.id === targetId 
        ? { ...item, status: newStatus } 
        : item
    ))
  }

  return (
    <div>
      <h1 className="flex justify-center py-10 text-2xl">Care Coordination System</h1>

      <Table>
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
            <TableRow key={item.patient.id} className={`p-4 ${item.status === "Overdue" ? "bg-red-400 hover:bg-red-300" : "bg-primary-100"} `}>    
            <Tooltip>
                <TooltipTrigger asChild >
                  <TableCell tabIndex={0}>{item.patient.name}</TableCell>
                </TooltipTrigger>
                <TooltipContent side="left">
                  {"Age: " + item.patient.age}
                  {/* todo: find better solution for line breaks */}
                  <p></p>
                  {"Id: " + item.patient.id}
                  <p></p>
                  {"Last Visit: " + item.patient.lastVisit}
                </TooltipContent>
              </Tooltip>
        <TableCell>{item.category}</TableCell>
        <TableCell>
          <Select
            onValueChange={(value) => handleStatusChange(value, item.patient.id)}>
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
    </Table >
    </div >
  )
}

export default MainTable

