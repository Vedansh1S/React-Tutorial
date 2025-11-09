// Tailwind CSS Grid Playground by Vedansh
// Each section demonstrates a different grid feature with improved styling and comments

function App() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-gray-800">
      <h1 className="text-4xl font-bold text-center py-10 text-slate-800">
        Tailwind CSS Grid Playground
      </h1>

      {/* ===================================================== */}
      {/* Simple Grid with Fixed Rows */}
      {/* ===================================================== */}
      <section
        className="
          m-8
          bg-gradient-to-r from-rose-200 to-rose-300
          p-6
          rounded-2xl
          shadow-lg
          grid grid-rows-3 gap-4
        "
      >
        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-slate-500 text-center font-medium">
          Dashed Border
        </div>
        <div className="bg-white p-4 rounded-xl border-4 border-dotted border-slate-500 text-center font-medium">
          Dotted Border
        </div>
        <div className="bg-white p-4 rounded-xl border-4 border-double border-slate-500 text-center font-medium">
          Double Border
        </div>
      </section>

      {/* ===================================================== */}
      {/* Grid with Custom Column Sizes */}
      {/* ===================================================== */}
      <section
        className="
          m-8
          bg-gradient-to-r from-indigo-200 to-indigo-400
          p-6
          rounded-2xl
          shadow-md
          grid grid-cols-[200px_1fr_2fr] gap-4
        "
      >
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold">
          Sidebar (200px)
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold">
          Main (1fr)
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold">
          Extra (2fr)
        </div>
      </section>

      {/* ===================================================== */}
      {/* Grid with Custom Row Heights */}
      {/* ===================================================== */}
      <section
        className="
          m-8
          bg-gradient-to-r from-teal-200 to-emerald-400
          p-6
          rounded-2xl
          shadow-md
          grid grid-rows-[150px_1fr_2fr] gap-4
        "
      >
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold">
          Row 1 (150px)
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold">
          Row 2 (1fr)
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold">
          Row 3 (2fr)
        </div>
      </section>

      {/* ===================================================== */}
      {/* Column Spanning */}
      {/* ===================================================== */}
      <section
        className="
          m-8
          bg-gradient-to-r from-fuchsia-200 to-purple-400
          p-6
          rounded-2xl
          shadow-md
          grid grid-cols-10 gap-4
        "
      >
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold col-span-3">
          Spans 3 Columns
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold col-span-3">
          Spans 3 Columns
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold col-span-4">
          Spans 4 Columns
        </div>
      </section>

      {/* ===================================================== */}
      {/* Responsive Grid with Breakpoints */}
      {/* ===================================================== */}
      <section
        className="
          m-8
          bg-gradient-to-r from-amber-200 to-orange-400
          p-6
          rounded-2xl
          shadow-md
          grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4
        "
      >
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold col-span-2">
          col-span-2
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold col-span-2">
          col-span-2
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-400 text-center font-semibold col-span-2">
          col-span-2
        </div>
      </section>

      {/* ===================================================== */}
      {/* Centering Content with place-items-center */}
      {/* ===================================================== */}
      <section
        className="
          m-8
          bg-gradient-to-r from-cyan-200 to-blue-400
          p-6
          rounded-2xl
          shadow-md
          grid place-items-center gap-4
        "
      >
        <div className="bg-white p-6 rounded-xl border border-slate-400 text-center font-semibold w-40 shadow-sm">
          Centered Box
        </div>
      </section>

      {/* ===================================================== */}
      {/* Responsive Grid using map() */}
      {/* ===================================================== */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-slate-700">
          Fruit Grid (Responsive)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((fruit, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white text-center font-semibold p-4 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              {fruit}
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================== */}
      {/*  Auto-Fitting Grid (repeat(auto-fit,minmax())) */}
      {/* ===================================================== */}
      <section className="m-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="bg-gradient-to-r from-violet-300 to-violet-500 text-white text-center font-semibold p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            Box {num}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-slate-600 text-sm">
        Built with ❤️ using React + Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
