import SideBar from "./SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <div className={`min-h-screen bg-neutral_50`}>
      <SideBar />
      <main className="h-full w-full overflow-y-auto md:pl-[340px]">
        {children}
      </main>
    </div>
  );
}
