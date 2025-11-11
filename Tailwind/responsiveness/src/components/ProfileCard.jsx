export default function ProfileCard() {
    return (
      <div className="@container bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="@sm:text-2xl text-xl font-bold">Vedansh Sharma</h2>
          <p className="text-gray-600 dark:text-gray-300">
            @Developer | Full Stack | Learner
          </p>
          <button className="mt-3 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition">
            Follow
          </button>
        </div>
      </div>
    );
  }
  