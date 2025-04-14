// Navbar Component
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div className="text-xl font-bold">Kurd Manhwa</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}