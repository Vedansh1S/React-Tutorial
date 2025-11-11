export default function Sidebar() {
    return (
      <aside className="bg-emerald-100 dark:bg-emerald-800 p-4 rounded-2xl">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-300">
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-300">
              Settings
            </a>
          </li>
        </ul>
      </aside>
    );
  }
  