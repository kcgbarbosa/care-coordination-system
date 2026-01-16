# Care Coordination System

This repository contains a frontend web application developed for internal use at a medical facility, providing staff with a reliable and efficient way to track and manage care coordination items following patient interactions. The application emphasizes clarity and usability, ensuring non-technical users can navigate, input, and update information quickly and accurately. Development is structured through a ticket-based workflow, simulating real-world iterative processes and allowing each change to be purposeful, traceable, and aligned with practical deliverables.

## Ticket CCS-101 — Table of Care Items (UI)

**Objective:** Provide a clear and organized view of care coordination items for internal staff.

**Implementation:**

* Create project structure
* Integrated `shadcn` Table components to display the 6 required columns.
* Populated the UI with 5 mock care coordination items.
* Applied Tailwind utility classes to create a scrollable container with a `sticky` header for the table.

**Decisions & Rationale:**

* **Layout:** Columns are ordered by priority
* **Mock Items:** Used temporary data to quickly begin testing functionality

---

## Ticket CCS-102 — Add Inline Status Selector

**Goal:** Update project to have inline editable Status field with stateful data

**Implementation:**

* Replaced static Status text with a `shadcn` Select component.
* Updated careItem data to hook with `useState`, enabling stateful data updates.
* Created an update handler that identifies items by a unique ID and modifies the status property.

**Decisions & Rationale:**

* **State Management:** Used local `useState` as it was the most predictable and straightforward approach.
* **User Experience:** Inline selectors were chosen to allow quick updates and changes without needs designated submit buttons or having to navigate away from the table.

---

