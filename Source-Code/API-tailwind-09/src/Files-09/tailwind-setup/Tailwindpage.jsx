 function Tailwindcss() {
  return (
    <div className="max-h-screen bg-gray-100 mb-20">
      {/* Navbar */}
      <header className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-bold text-gray-800">Welcome 🎉</h2>
        <p className="text-gray-600 mt-4">This is styled using Tailwind CSS.</p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 p-4 text-center">
        © 2025 My App. All rights reserved.
      </footer>
    </div>
  );
}
export default Tailwindcss;