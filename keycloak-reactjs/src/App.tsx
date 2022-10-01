import './App.css';
import AppRoutes from './router/AppRoutes';
import {ReactKeycloakProvider} from '@react-keycloak/web'
import { keycloak } from './config/auth';

function App() {
  return (

    <ReactKeycloakProvider authClient={keycloak} initOptions={{
      onLoad: "login-required"
    }}>
      <AppRoutes/>
    </ReactKeycloakProvider>
  );
}

export default App;
