import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/auth/LoginPage";
import PatientProgressPage from './pages/patient/PatientProgressPage';

function App() {
  return <>
  {/* <AuthProvider>
    <LoginPage/>
    </AuthProvider> */}
    <PatientProgressPage/>
  </>;
}

export default App;
