import React from "react";

import { Layout } from "@/shared/ui/Layout";
import { CoursesList } from "@/widgets/courses/ui/CoursesList";
import { VideoPlayer } from "@/widgets/courses/ui/VideoPlayer";

 const App: React.FC = () => {


  return (
      <Layout>
        <CoursesList />
        <VideoPlayer /> 
      </Layout>
  );
};

export default App;
