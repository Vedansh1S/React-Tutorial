// Import reusable components (Navbar, Sidebar, Dashboard)
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <button className="m-10 rounded-full p-3 bg-blue-500 hover:bg-blue-700 md:bg-green-500 md:hover:bg-green-700 dark:bg-gray-300 dark:hover:bg-gray-400 font-bold">
        Responsive + Dark Mode Button
      </button>

      <div className="m-5 rounded-xl bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
        <Navbar />

        <main className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
          <Sidebar />

          <Dashboard />
        </main>
      </div>

      {/* CONTAINER QUERY DEMO */}
      {/* '@container' makes this parent a container; @sm, @md inside child adjust based on container width */}
      <div className="m-5 @container bg-white dark:bg-gray-200 p-6 rounded-2xl shadow-md flex flex-col sm:flex-row gap-4">
        {/* Profile image with fixed size and rounded shape */}
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        {/* Profile details with container-based responsive text */}
        <div>
          {/* '@sm:' and '@md:' adjust font-size based on container width */}
          <h2 className="text-lg @sm:text-xl @md:text-2xl font-bold text-black">
            Vedansh Sharma
          </h2>
          <p className="text-gray-600 dark:text-gray-900 font-bold underline">
            @Developer | Full Stack | Learner
          </p>
        </div>
      </div>

      {/* FLEXBOX DEMO */}
      {/* flex-col on mobile, flex-row on medium screens and up */}
      <div className="flex flex-col md:flex-row gap-4 m-4 w-1/2">
        <div className="bg-blue-300 p-4 rounded-full border-4 border-double">
          Box 1
        </div>
        <div className="bg-green-300 p-4 rounded-full">Box 2</div>
      </div>

      {/* GRID LAYOUT DEMO */}
      {/* grid-cols-1 (mobile), grid-cols-2 (tablet), grid-cols-4 (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
        <div className="bg-teal-300 p-4 rounded-full text-center text-3xl">
          1
        </div>
        <div className="bg-teal-300 p-4 rounded-full text-center text-3xl">
          2
        </div>
        <div className="bg-teal-300 p-4 rounded-full text-center text-3xl">
          3
        </div>
        <div className="bg-teal-300 p-4 rounded-full text-center text-3xl">
          4
        </div>
      </div>

      {/* RESPONSIVE VISIBILITY DEMO */}
      {/* 'block md:hidden' = visible on mobile, hidden on medium+ */}
      <p className="block md:hidden text-center font-medium text-gray-600">
        Shown on mobile only
      </p>

      {/* 'hidden md:block' = hidden on mobile, visible on medium+ */}
      <p className="hidden md:block text-center font-medium text-gray-600">
        Shown on desktop only
      </p>

      {/* RESPONSIVE TYPOGRAPHY & PADDING DEMO */}
      <div className="m-5 text-center">
        {/* Font sizes grow with breakpoints */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
          Responsive Heading
        </h1>
        <br />
        {/* Padding changes responsively + underline styling */}
        <p className="px-2 sm:px-4 md:px-8 lg:px-16 font-bold underline decoration-emerald-500 underline-offset-4">
          Responsive padding adapts to screen size.
        </p>
      </div>

      {/* COLOR TRANSITION DEMO */}
      {/* Changes background color as screen widens */}
      <div className="bg-red-300 sm:bg-blue-300 md:bg-green-300 lg:bg-yellow-300 text-center p-4 font-medium rounded-lg m-4">
        Color changes with screen size
      </div>

      {/* CONTAINER EXAMPLE */}
      {/* Centers and limits width based on screen size */}
      <div className="container mx-auto p-4 text-center bg-gray-100 dark:bg-gray-700 rounded-lg my-4">
        Centered responsive container
      </div>

      {/* NDERLINE STYLE DEMO */}
      {/* font-bold + underline + underline-offset */}
      <p className="font-bold underline decoration-emerald-500 underline-offset-4 text-center my-6">
        Styled underline with color and spacing
      </p>
    </>
  );
}

export default App;
