import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />

      <main className="flex flex-1 flex-col md:flex-row">
        <Sidebar />

        <section className="flex-1 p-4">
          {children}
        </section>
      </main>

      <Footer />
    </div>
  );
}
