import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/order/BookingPage";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/auth/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import PatientProgressPage from "./pages/patient/PatientProgressPage";

function App() {
  return (
    <>
      {/* <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/order"
            element={
              <PrivateRoute>
                <BookingPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider> */}

      <PatientProgressPage />
    </>
  );
}

export default App;
