# Healthcare Wellness Preventive Care Portal — Frontend

React-based frontend application for the Healthcare Wellness Preventive Care Portal. Features patient and provider dashboards, authentication, patient management, and health tracking.

## Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool and dev server
- **React Router DOM** 7.12.0 - Client-side routing
- **ESLint** 9.39.1 - Code linting
- **CSS3** - Styling

## Features

### Patient Features
✅ User registration and login with email/password  
✅ Patient dashboard with health metrics  
✅ Health topics and educational resources  
✅ Progress tracking for health goals  
✅ Service access and appointment management  

### Provider Features
✅ Provider registration and login  
✅ Provider dashboard with patient statistics  
✅ **Patient Management System**:
  - View all available patients from database
  - Add patients to provider's care list
  - View assigned patients with full details
  - Remove patients from care list
  - Real-time sync with backend
✅ Patient search and filtering  
✅ Recent patient activity overview  

### General Features
✅ Cookie-based authentication  
✅ Role-based routing (Patient/Provider)  
✅ Protected routes with auth middleware  
✅ Responsive design  
✅ Real-time API integration  

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Backend server running on `http://localhost:3000`
- MongoDB database configured

### Installation

```bash
# Navigate to frontend directory
cd Frontend/Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will start on `http://localhost:5173` (or 5174 if 5173 is in use).

## Environment Setup

The frontend connects to the backend API at `http://localhost:3000` by default. This is configured in:
- `src/context/AuthContext.jsx`
- `src/pages/PatientManagement.jsx`
- `src/pages/DashboardProvider.jsx`

To change the API URL, update the `API_BASE` constant in these files.

## Project Structure

```
src/
├── App.jsx                      # Main app component with routing
├── main.jsx                     # Application entry point
├── index.css                    # Global styles
├── components/
│   ├── dashboard/
│   │   ├── HealthCard.jsx       # Health metric cards
│   │   ├── PatientServices.jsx  # Patient service cards
│   │   └── ProgressBar.jsx      # Progress visualization
│   ├── home/
│   │   └── HealthTopicsPreview.jsx  # Health topics preview
│   └── layout/
│       ├── MainLayout.jsx       # Main layout wrapper
│       ├── Navbar.jsx           # Top navigation bar
│       └── Sidebar.jsx          # Side navigation menu
├── context/
│   └── AuthContext.jsx          # Authentication context & API calls
├── pages/
│   ├── Dashboard.jsx            # Patient dashboard
│   ├── DashboardProvider.jsx    # Provider dashboard
│   ├── PatientManagement.jsx    # Patient management system
│   ├── Login.jsx                # Login/Signup page
│   ├── Home.jsx                 # Landing page
│   ├── HealthTopics.jsx         # Health education
│   └── Services.jsx             # Healthcare services
└── services/
    └── healthService.jsx        # Health data services
```

## Available Routes

### Public Routes
- `/` - Home/Landing page
- `/login` - Login and Signup page
- `/health-topics` - Health education resources

### Patient Routes (Protected)
- `/patient/dashboard` - Patient dashboard with health metrics

### Provider Routes (Protected)
- `/provider/dashboard` - Provider dashboard with statistics
- `/provider/patients` - Patient management system
- `/provider/services` - Provider services

## Authentication Flow

1. **Signup**: 
   - Select role (Patient/Provider)
   - Fill registration form
   - Backend creates account + JWT token
   - Token stored as HTTP-only cookie
   - User redirected to role-specific dashboard

2. **Login**:
   - Enter email/password
   - Select role
   - Backend validates credentials + issues JWT
   - Token stored as cookie
   - Fetch user profile
   - Store role in localStorage
   - Redirect to dashboard

3. **Auto-login**:
   - On app load, check localStorage for role
   - If role exists, fetch profile with cookie
   - If successful, set user state
   - If failed, clear localStorage

4. **Logout**:
   - Call logout endpoint
   - Backend blacklists token
   - Clear cookie
   - Clear localStorage
   - Redirect to login

## Patient Management System

The Patient Management page (`/provider/patients`) provides comprehensive patient care management:

### Features:
- **All Patients Tab**: Browse all users in the database
  - View patient name, email, age, gender
  - Add button to assign patients
  - Real-time status (already assigned vs available)

- **My Patients Tab**: View assigned patients
  - Full patient details including consent status
  - Remove patient functionality
  - Empty state with call-to-action

### API Integration:
```javascript
// Get all patients
GET /providers/patients/all

// Get provider's patients
GET /providers/patients/my-patients

// Add patient
POST /providers/patients/add
Body: { "patientId": "patient-uuid" }

// Remove patient
DELETE /providers/patients/remove/:patientId
```

## Components Overview

### AuthContext
Manages authentication state and API calls:
- `login(email, password, role)` - Login user
- `signup(userData, role)` - Register new user
- `logout()` - Logout and clear session
- `checkAuth()` - Verify existing session
- `user` - Current user object with role
- `loading` - Loading state

### MainLayout
Wraps all authenticated pages with:
- Navbar with user info and logout
- Sidebar with role-based navigation
- Content area

### PatientManagement
Full-featured patient management:
- Tab navigation (All/My Patients)
- Patient cards with actions
- Add/Remove functionality
- Loading and error states
- Success notifications

### DashboardProvider
Provider overview with:
- Real-time patient count
- Recent patient table
- Quick navigation to patient management
- Empty state handling

## Styling

Each component has its own CSS file:
- `*.css` files are component-scoped
- `index.css` contains global styles
- Responsive design with media queries
- Color scheme:
  - Primary: `#4a90e2` (blue)
  - Success: `#0a0` (green)
  - Error: `#c00` (red)
  - Background: `#f5f5f5` (light gray)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## API Integration

All API calls use `fetch` with:
- `credentials: "include"` - Send cookies
- `Content-Type: application/json` - JSON requests
- Error handling with try-catch
- Loading states
- User feedback (success/error messages)

## State Management

- **React Context**: Authentication state (`AuthContext`)
- **Local State**: Component-specific state with `useState`
- **LocalStorage**: User role persistence
- **Cookies**: JWT token (HTTP-only, set by backend)

## Security Features

✅ HTTP-only cookies prevent XSS attacks  
✅ Protected routes require authentication  
✅ Role-based access control  
✅ No sensitive data in localStorage  
✅ API credentials sent only with `credentials: include`  
✅ CORS configured for specific origins  

## Common Issues

### Port Already in Use
If port 5173 is busy, Vite automatically tries 5174. Ensure backend CORS allows both:
```javascript
// Backend app.js
cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
})
```

### Authentication Fails
1. Check backend is running on port 3000
2. Verify CORS configuration
3. Clear browser cookies and localStorage
4. Check browser console for errors

### API Calls Fail
1. Verify backend endpoints are correct
2. Check network tab in browser DevTools
3. Ensure JWT_SECRET matches between backend and frontend expectations
4. Verify MongoDB connection is active

## Future Enhancements

- [ ] Add appointment scheduling
- [ ] Implement real-time notifications
- [ ] Add patient chat feature
- [ ] Integrate health data visualization
- [ ] Add export patient data functionality
- [ ] Implement search and filter in patient list
- [ ] Add dark mode support
- [ ] Integrate medical records upload
- [ ] Add automated reminders

## Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Run linter: `npm run lint`
5. Build: `npm run build`
6. Submit pull request

## License

ISC

---

**Note**: This frontend requires the backend API to be running. See the main project README or Backend/README.md for backend setup instructions.
