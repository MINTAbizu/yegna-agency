import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './Context/Authcontext';

ReactDOM.createRoot(document.getElementById('root')).render(
     
    // <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">


<AuthProvider>  
                <App />
                </AuthProvider>
    // </GoogleOAuthProvider>
    
);
