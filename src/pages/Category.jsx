import { useParams } from 'react-router-dom';
import _ from 'lodash';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Projects from '../components/Projects';
import projects from "../json/project.json";

function Category() {
  const { categoryName } = useParams();
  const _projects = projects.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );
    
  const title = _.startCase(categoryName);

  return (
    <div className="container mainLayout">
      <Header 
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      <Projects projects={_projects} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
