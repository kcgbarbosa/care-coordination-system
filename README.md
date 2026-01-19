<div> 

# Care Coordination System

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Shadcn/ui](https://img.shields.io/badge/shadcn/ui-%23000000?style=for-the-badge&logo=shadcnui&logoColor=white)

[💻 View Code](https://github.com/kcgbarbosa/care-coordination-system)

</div>

## What is this?

This repository contains a mock frontend web application that simulates an internal care coordination system for a medical facility It is designed to model how internal staff might track and manage care coordination items following patient interactions.

The application focuses on clarity and usability for non‑technical users, providing a centralized view of tasks, ownership, status, and urgency to demonstrate realistic clinical workflow scenarios.

## 🤝 Connect With Me 

**Kevin-Christian Giraldo-Barbosa**

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kcgbarbosa/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kcgbarbosa@gmail.com)

---

##  ✅ Completed Development Tickets

## Ticket CCS-101 — Table of Care Items (UI)

### Objective:

Provide a clear and organized view of care coordination items for internal staff.

### Acceptance Criteria

* Render at least **5 mock items**, each of which including: 
1. Patient Name
2. Category
3. Status
4. Assigned Staff
5. Due Date
6. Optional notes

* Use **shadcn Table** component
* Add minimal Tailwind styling (consistent spacing, readable fonts)
* Table should be **scrollable** if content overflows
* Table header should remain **fixed** when scrolling the list

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

* Use a dropdown/select component
* Status options:
  * Pending
  * In Progress
  * Completed
  * Overdue
* Changing the value updates local state
* Table updates immediately to reflect the selected status

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

* Implement a hover-triggered tooltip on the **Patient Name** field
* Tooltip displays **Age, Unique ID, and Last Visit Date**
* Tooltip displays without affecting table layout and UX
* Tooltip remains visible and aligned during vertical table scrolling

### Implementation

* Added a hover tooltip to the **Patient Name** table cell using a `shadcn` Tooltip component
* Displayed secondary patient attributes (age, ID, last visit date) within the tooltip 
* Structured tooltip content with labeled fields to improve readability while keeping the table layout unchanged.
* Configured the tooltip to display to the immediate left the table content rather than covering key table information.

### Decisions & Rationale

* HTML Semantics: Used the `asChild` prop on `TooltipTrigger` to preserve valid HTML table semantics and prevent invalid DOM nesting within `<table>` elements.
* Accessibility: Since `asChild` removes default button semantics, I added `tabIndex={0}` to restore keyboard navigation ability and general accessibility.

---

## Ticket CCS-104 — Highlight Overdue Items

**Objective:** Provide visual cues for tasks requiring immediate attention based on status and due date.

### Acceptance Criteria

* Implement conditional styling for rows where:
1. `Status` is strictly equal to **"Overdue"**.
2. The `DueDate` is prior to the current system date.

* Apply a distinct visual indicator to identified rows.
* Ensure styling is reactive; removing the "Overdue" status must immediately revert the row to standard styling.

### Implementation

* Implemented conditional row styling for item status and due date cells
* Compared each item’s dueDate against the current system date to determine overdue state
* Applied styling declaratively within the table row, ensuring immediate UI updates when status or date values change

### Decisions & Rationale

* Date Handling: Normalized dates at the point of comparison instead of preprocessing data globally, reducing unnecessary complexity
* Simplicity: Avoided introducing additional state or side‑effects since overdue status can be fully derived from current data and runtime context

---


