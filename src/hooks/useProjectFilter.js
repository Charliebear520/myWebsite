import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../json/project.json";

export function useProjectFilter() {
  const [projects, setProjects] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryName) {
      const filteredProjects = projectsData.filter(
        (project) =>
          project.category.toLowerCase() === categoryName.toLowerCase()
      );
      setProjects(filteredProjects);
    } else {
      setProjects(projectsData);
    }
  }, [categoryName]);

  const handleCategoryChange = (category) => {
    if (category === "all") {
      navigate("/");
    } else {
      navigate(`/category/${category.toLowerCase()}`);
    }
  };

  return { projects, handleCategoryChange };
}

