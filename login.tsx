// Login page
import { useEffect } from 'react';
import { auth } from '../lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Navbar from '../components/Navbar';
import { auth } from '../lib/firebase'; 

export default function Login() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <button onClick={handleGoogleLogin} className="bg-blue-500 px-4 py-2 rounded">Sign in with Google</button>
      </div>
    </div>
  );
}
