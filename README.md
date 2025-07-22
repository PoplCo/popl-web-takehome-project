# 💻 Popl Web Take-Home Project

Welcome — and thanks for your time.

This take-home project is designed to simulate a **real-world lead management flow**, similar to patterns we use at Popl. We're using this to understand how you reason about **data flow**, **state**, **API integration**, and **UI behavior** in a modern React web application.

This isn't about perfection — it's about how you **think**.

## 🚧 What You're Starting With

This is a **skeleton project** with:
- ✅ **Project structure** already set up (React + Vite + TypeScript)
- ✅ **API layer** configured with helpful comments
- ✅ **Mock data** with realistic edge cases
- ✅ **Basic routing** and layout components
- ✅ **Placeholder pages** showing what you need to build

**You'll need to implement the actual functionality!**

## 🧠 What You'll Be Building

A lightweight web application (3 pages) for managing "leads":

### 1. **Lead List Page** (`src/pages/LeadListPage.tsx`)

**You'll build:**
- Fetch and display leads from the mock API
- Search functionality (by name, email, company)
- Sort functionality (by name or creation date)
- Clickable leads that navigate to detail view
- Floating action button to create new leads
- Proper loading and error states

### 2. **Lead Detail Page** (`src/pages/LeadDetailPage.tsx`)

**You'll build:**
- Fetch individual lead data using URL parameter
- Display all lead information in organized sections
- Handle messy data gracefully (empty fields, null values)
- Format dates nicely for humans
- Clean tag display (filter empty/null tags)
- Appropriate error handling for missing leads

### 3. **Create Lead Page** (`src/pages/CreateLeadPage.tsx`)

**You'll build:**
- Complete form with all lead fields
- Form validation (name and email required)
- Handle comma-separated tags input
- Submit data via API with React Query (or axios, fetch) mutation
- Loading states during submission
- Navigate to new lead's detail page on success
- Error handling and display

## 🛠 Stack (already configured)

- **React 18** with **TypeScript**
- **Vite** for fast development and building
- **React Router** for navigation
- **React Query** for data fetching/caching (recommended)
- **Redux Toolkit** for user preferences state management
- **Axios** for API calls

The foundation is ready — focus on the logic and UX!

**📡 Data Fetching Approach:**
You can choose between two approaches:
- **Recommended**: Use React Query for caching, loading states, and mutations
- **Alternative**: Use `useState` + `useEffect` with fetch/axios if you prefer vanilla React patterns

Both approaches are valid — pick what showcases your skills best!

**🏪 Redux Requirement:**
Implement Redux Toolkit to manage:
- **Search term persistence** - Keep search input when navigating between pages
- **Sort preference** - Remember user's preferred sort order (name/date)
- **Bonus**: View mode toggle (list/grid) for the leads display

*The Redux store structure is already set up in `src/store/` - you'll implement the logic!*

**💻 Platform Requirements:**

- **Modern web browsers** (Chrome, Firefox, Safari, Edge)
- **Responsive design** that works on desktop and mobile
- **No mobile app frameworks** — this is a web-only project

## 🧪 Mock API Instructions

We use `json-server` to simulate a backend.

### Start the mock API:

```bash
npm run api
```

This will serve from:
[http://localhost:3001/leads](http://localhost:3001/leads)

### Available endpoints (already configured in `src/api/`):

- `GET /leads` – fetch all
- `GET /leads/:id` – fetch one
- `POST /leads` – create
- `PUT /leads/:id` – full replace
- `PATCH /leads/:id` – partial update
- `DELETE /leads/:id` – delete

🕗 Note: a small artificial delay is applied to all responses (via interceptor) to simulate real-world async behavior.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **In another terminal, start the mock API:**
   ```bash
   npm run api
   ```

4. **Open your browser:**
   - Web app: [http://localhost:3000](http://localhost:3000)
   - API: [http://localhost:3001/leads](http://localhost:3001/leads)

5. **Start coding!** 
   - Check out the skeleton pages to understand what to build
   - Use the API endpoints documented in `src/api/`

## 📊 Mock Data Notes

The `db.json` file includes realistic test data with edge cases:

- **Normal leads** with complete information
- **Leads with missing optional fields** (company, title, phone)
- **"Dr. Messy Data"** - A lead with intentionally messy/invalid data to test data cleaning
- **"Long Entry Person"** - A lead with very long content to test UI overflow
- **Empty and null values** to test fallback handling

**Make sure your implementation handles these gracefully!**

## 📬 How to Submit

Send us either:

- A GitHub repo link (public or invite us)
- A zip file of the completed project

Optional: add a short note if you left anything out intentionally, or want to clarify something about your implementation.

We're looking forward to reviewing your work! Thanks again — and have fun with it. 🙏

## 📋 Project Structure

```
src/
├── api/           # API client and endpoints (✅ ready to use)
├── components/    # Layout component (✅ ready to use)
├── pages/         # Page components (🚧 skeleton - implement these!)
├── store/         # Redux store and slices (🚧 structure ready - implement logic!)
├── types/         # TypeScript type definitions (✅ ready to use)
├── App.tsx        # Main app component (✅ ready to use)
├── main.tsx       # App entry point (✅ ready to use)
└── index.css      # Global styles (✅ ready to use)
```

## 🎯 Success Criteria

Your implementation is successful when:

- ✅ All three pages are fully functional
- ✅ Search and sort work properly on the list page
- ✅ Redux manages user preferences (search term, sort order)
- ✅ Preferences persist when navigating between pages
- ✅ Navigation between pages works smoothly
- ✅ Forms submit and create leads successfully
- ✅ Loading states are handled gracefully
- ✅ Error states are handled appropriately
- ✅ Messy data is displayed cleanly
- ✅ The app works on both desktop and mobile
- ✅ Code is clean, well-structured, and follows existing patterns

**Good luck! 🚀**