import ProfileCard from "./ProfileCard.jsx";
export default function Dashboard() {
  const cards = [
    { title: "Projects", count: 12 },
    { title: "Tasks", count: 45 },
    { title: "Followers", count: 320 },
    { title: "Messages", count: 18 },
  ];

  return (
    <section className="space-y-6">
      <ProfileCard />


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center justify-center hover:scale-110 transition-transform"
          >
            <h3 className="text-lg sm:text-xl font-semibold">{c.title}</h3>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-500">
              {c.count}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
