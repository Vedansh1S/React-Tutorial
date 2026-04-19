import { useState, useRef, useEffect } from "react";

// ─── Nav items — swap these out for your own ────────────────────────────────
const NAV_ITEMS = [
  { type: "header", label: "Discover" },
  { type: "item", icon: "🏠", label: "Home", id: "home" },
  { type: "item", icon: "🔍", label: "Explore", id: "explore" },
  { type: "item", icon: "🔔", label: "Notifications", id: "notifications" },
  { type: "item", icon: "✉️", label: "Messages", id: "messages" },
  { type: "divider" },
  { type: "header", label: "Library" },
  { type: "item", icon: "🔖", label: "Bookmarks", id: "bookmarks" },
  { type: "item", icon: "📋", label: "Lists", id: "lists" },
  { type: "item", icon: "👤", label: "Profile", id: "profile" },
  { type: "divider" },
  { type: "header", label: "Settings" },
  { type: "item", icon: "⚙️", label: "Preferences", id: "prefs" },
  { type: "item", icon: "♿", label: "Accessibility", id: "access" },
  { type: "item", icon: "🔒", label: "Privacy", id: "privacy" },
  { type: "item", icon: "🛡️", label: "Security", id: "security" },
  { type: "divider" },
  { type: "header", label: "More" },
  { type: "item", icon: "❓", label: "Help Center", id: "help" },
  { type: "item", icon: "ℹ️", label: "About", id: "about" },
  { type: "item", icon: "🚪", label: "Logout", id: "logout" },
];

// ─── Main content — swap these out for your own ─────────────────────────────
const CONTENT_SECTIONS = [
  {
    title: "For you",
    body: "Your personalized feed based on interests and the accounts you follow.",
    cards: ["Trending in Technology: AI agents", "Trending in Design: Bento layouts", "New from someone you follow"],
  },
  {
    title: "Trending topics",
    body: "What's capturing attention across the platform today.",
    cards: ["#OpenSource — 42K posts", "#DesignSystems — 18K posts", "#TypeScript — 31K posts"],
  },
  {
    title: "People you may know",
    body: "Suggested accounts based on mutual connections.",
    cards: ["Ahmad K. · Designer · 3 mutuals", "Priya S. · Engineer · 7 mutuals", "Leo M. · Writer · 2 mutuals"],
  },
  {
    title: "Recent activity",
    body: "A summary of what happened while you were away.",
    cards: ["12 new likes on your post", "3 new followers today", "2 reposts from your thread"],
  },
  {
    title: "Saved for later",
    body: "Posts and threads you bookmarked to read when you have time.",
    cards: ["Thread: The future of local-first apps", "Article: Design tokens at scale", "Video: Building with LLMs"],
  },
];

// ─── The hook ────────────────────────────────────────────────────────────────
/**
 * useSyncedSidebar
 *
 * Returns:
 *   sidebarRef  — attach to the sidebar VIEWPORT element (overflow: hidden)
 *   innerRef    — attach to the sidebar CONTENT element (the thing that moves)
 *   mainRef     — attach to the main scrollable element
 *
 * Behaviour:
 *   • Sidebar content scrolls in sync with main content (1:1 delta)
 *   • Clamps at top (offset = 0) — sidebar stays at top while main scrolls up freely
 *   • Clamps at bottom (offset = maxOffset) — sidebar stays at bottom while main scrolls down freely
 *   • Always visible: sidebar viewport is position: sticky, top: 0, height: 100vh
 */
function useSyncedSidebar() {
  const sidebarRef = useRef(null);
  const innerRef = useRef(null);
  const mainRef = useRef(null);

  const lastScrollY = useRef(0);
  const currentOffset = useRef(0);

  useEffect(() => {
    const mainEl = mainRef.current;
    const sidebarEl = sidebarRef.current;
    const innerEl = innerRef.current;
    if (!mainEl || !sidebarEl || !innerEl) return;

    const getMax = () =>
      Math.max(0, innerEl.scrollHeight - sidebarEl.clientHeight);

    // Fires when main content scrolls — keeps sidebar in sync
    const onScroll = () => {
      const scrollY = mainEl.scrollTop;
      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      const max = getMax();
      const next = Math.max(0, Math.min(max, currentOffset.current + delta));
      currentOffset.current = next;

      innerEl.style.transform = `translateY(${-next}px)`;
    };

    // Fires when user wheels over the sidebar — forwards to main so both move
    const onSidebarWheel = (e) => {
      e.preventDefault();
      mainEl.scrollTop += e.deltaY;
    };

    mainEl.addEventListener("scroll", onScroll, { passive: true });
    // passive: false so we can preventDefault and prevent double-scroll
    sidebarEl.addEventListener("wheel", onSidebarWheel, { passive: false });

    return () => {
      mainEl.removeEventListener("scroll", onScroll);
      sidebarEl.removeEventListener("wheel", onSidebarWheel);
    };
  }, []);

  return { sidebarRef, innerRef, mainRef };
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function StickySidebar() {
  const { sidebarRef, innerRef, mainRef } = useSyncedSidebar();
  const [active, setActive] = useState("home");

  return (
    <div className="flex h-screen bg-white dark:bg-zinc-950">
      {/* ── Sidebar viewport ── always fills the screen, never scrolls itself */}
      <aside
        ref={sidebarRef}
        className="
          sticky top-0 h-screen
          w-56 shrink-0
          overflow-hidden
          border-r border-zinc-200 dark:border-zinc-800
        "
      >
        {/* ── Sidebar inner ── this is the part that gets translated */}
        <div ref={innerRef} className="will-change-transform">
          {NAV_ITEMS.map((item, i) => {
            if (item.type === "header")
              return (
                <p key={i} className="px-4 pt-5 pb-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  {item.label}
                </p>
              );
            if (item.type === "divider")
              return <hr key={i} className="my-2 border-zinc-100 dark:border-zinc-800 mx-4" />;
            return (
              <button
                key={i}
                onClick={() => setActive(item.id)}
                className={`
                  flex w-full items-center gap-3
                  mx-2 px-3 py-2 rounded-lg text-sm
                  transition-colors duration-100
                  ${
                    active === item.id
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  }
                `}
                style={{ width: "calc(100% - 1rem)" }}
              >
                <span className="text-base w-5 text-center">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </div>
      </aside>

      {/* ── Main content — this is the scroll container ── */}
      <main
        ref={mainRef}
        className="flex-1 overflow-y-auto px-8 py-6"
      >
        {CONTENT_SECTIONS.map((sec, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
              {sec.title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
              {sec.body}
            </p>
            <div className="space-y-2">
              {sec.cards.map((card, j) => (
                <div
                  key={j}
                  className="rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  {card}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}