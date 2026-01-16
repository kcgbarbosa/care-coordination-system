# Care Coordination System

This repository contains a frontend web application developed for internal use at a medical facility, providing staff with a reliable and efficient way to track and manage care coordination items following patient interactions. The application emphasizes clarity and usability, ensuring non-technical users can navigate, input, and update information quickly and accurately. Development is structured through a ticket-based workflow, simulating real-world iterative processes and allowing each change to be purposeful, traceable, and aligned with practical deliverables.

## Ticket CCS-101 — Table of Care Items (UI)

### Objective:

Provide a clear and organized view of care coordination items for internal staff.

### Acceptance Criteria

- Render at least **5 mock items**, each of which including: 
1. Patient Name
2. Category
3. Status
4. Assigned Staff
5. Due Date
6. Optional notes

- Use **shadcn Table** component
- Add minimal Tailwind styling (consistent spacing, readable fonts)
- Table should be **scrollable** if content overflows
- Table header should remain **fixed** when scrolling the list

### Implementation:

* Created project structure
* Integrated `shadcn` Table components to display the 6 required columns.
* Populated the UI with 5 mock care coordination items.

### Decisions & Rationale:

* Layout: Columns are ordered by priority
* Mock Items: Used temporary data to quickly begin testing functionality

---

## Ticket CCS-102 — Add Inline Status Selector

### Objective: 

Update project to have inline editable Status field with stateful data

### Acceptance Criteria

- Use a dropdown/select component
- Status options:
  - Pending
  - In Progress
  - Completed
  - Overdue
- Changing the value updates local state
- Table updates immediately to reflect the selected status

### Implementation:

* Replaced static Status text with a `shadcn` Select component.
* Updated careItem data to hook with `useState`, enabling stateful data updates.
* Created an update handler that identifies items by a unique ID and modifies the status property.

### Decisions & Rationale:

* State Management: Used local `useState` as it was the most predictable and straightforward approach.
* User Experience: Inline selectors were chosen to allow quick updates and changes without needs designated submit buttons or having to navigate away from the table.

---

## Ticket CCS-103 — Patient Summary Tooltip

### Objective

Maintain a compact table view while providing on-demand access to secondary patient data.

### Acceptance Criteria

- Implement a hover-triggered tooltip on the **Patient Name** field
- Tooltip displays **Age, Unique ID, and Last Visit Date**
- Tooltip displays without affecting table layout and UX
- Tooltip remains visible and aligned during vertical table scrolling

### Implementation

* Added a hover tooltip to the **Patient Name** table cell using a `shadcn` Tooltip component
* Displayed secondary patient attributes (age, ID, last visit date) within the tooltip 
* Structured tooltip content with labeled fields to improve readability while keeping the table layout unchanged.
* Configured the tooltip to display to the immediate left the table content rather than covering key table information.

---

### Decisions & Rationale

* HTML Semantics: Used the `asChild` prop on `TooltipTrigger` to preserve valid HTML table semantics and prevent invalid DOM nesting within `<table>` elements.
* Accessibility: Since `asChild` removes default button semantics, I added `tabIndex={0}` to restore keyboard navigation ability and general accessibility.

---


