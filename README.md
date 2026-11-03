# StudioSpace - Frontend Application 🎨

StudioSpace is a full-stack workspace booking platform designed to connect visionary creators (photographers, filmmakers, podcasters) with local studio hosts. This repository contains the Next.js frontend, featuring a responsive, dual-sided marketplace interface that caters to both guests making reservations and hosts managing their creative real estate.

## 🚀 Detailed Features

### Creator Experience (Guests)
* **Workspace Discovery:** Browse top-rated and newly added studios through interactive, responsive grids and Shadcn UI carousels.
* **Studio Details & Booking:** View comprehensive studio pages with full amenities lists, host details, and a streamlined booking form that automatically calculates hourly rates and security deposits.
* **My Bookings Dashboard:** A private dashboard to track all reservations. Features dynamic status badges (Pending, Confirmed, Completed, Cancelled), the ability to cancel pending requests, and options to permanently remove cancelled trips from history.

### Host Experience (Owners)
* **Listing Creation:** A comprehensive multi-step form to upload studio details, set pricing, define max capacity, and select amenities.
* **My Listings Dashboard:** A dedicated management interface where hosts can view all their active properties.
* **Real-time Management:** Edit existing studio details or delete listings entirely, complete with confirmation modals and instant UI updates.

### UI/UX & Architecture
* **Authentication:** Secure user sessions and protected route handling managed by `better-auth`.
* **State & Feedback:** Integrated `react-toastify` for immediate success/error feedback on all CRUD operations.
* **Custom Routing States:** Branded global loading spinners for asynchronous data fetching and custom 404 error pages for broken routes.
* **Modern Design System:** Built utilizing a cohesive color palette (Coral and Blue), Tailwind CSS utility classes, and accessible Radix UI components.

## 💻 Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Library:** React 19
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Components:** Shadcn UI & Radix UI
* **Icons:** React Icons
* **Notifications:** React Toastify
* **Authentication:** Better Auth & `jose`

## 🛠️ Local Development Setup

### Prerequisites
* Node.js (v18 or higher)
* Git

### Installation

1. Clone the repository and navigate to the frontend directory:
   ```bash
   cd studio_space_client
