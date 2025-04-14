// Home page
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Kurd Manhwa</h1>
        <p>Read your favorite Manga and Manhwa in Kurdish and English!</p>
      </main>
    </div>
  );
}