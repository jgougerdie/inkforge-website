import { Route, Routes } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Analytics from "@/components/Analytics";
import { AuthProvider } from "@/context/AuthContext";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Article from "@/pages/Article";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Analytics />
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
