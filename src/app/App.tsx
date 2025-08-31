import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import CoursesPage from "@/pages/courses";
import AuthPage from "@/pages/auth";

import { VideoPlayer } from "@/widgets/courses/ui/VideoPlayer";
import { Layout } from "@/shared/ui/Layout";

 const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="*" element={<CoursesPage />} />
        </Routes>
      </Layout>
      <VideoPlayer /> 
      <Toaster position="bottom-right" reverseOrder={false} />
    </Router>
  );
};

export default App;
