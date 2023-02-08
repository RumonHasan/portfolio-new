import CardComponent from '@/components/CardComponent';
import useProjectStore from '@/lib/slices/useProjectSlice';
import style from '../../styles/Projects.module.css';
import {
  Row,
  Layout,
  Typography,
  Tooltip,
  Button,
  Dropdown,
  Affix,
} from 'antd';
import { useEffect, useState } from 'react';
import useGeneralStore from '@/lib/slices/useGeneralSlice';

const Projects = () => {
  const projectDetails = useProjectStore((state) => state.projectDetails);
  const items = useGeneralStore((state) => state.filterDropDown);
  const [projects, setProjects] = useState(projectDetails);
  console.log(projects);
  const { Header } = Layout;
  const { Title } = Typography;
  const [projectCount, setProjectCount] = useState(0);
  const [displayProjectHeader, setDisplayProjectHeader] =
    useState('All Projects');
  // offset value
  const [top, setTop] = useState(0);

  // updating project count;
  useEffect(() => {
    setProjectCount(projects.length);
  }, [projects.length]);

  // sort projects locally
  const sortProjects = ({ key }) => {
    // for all projects
    if (key) {
      if (key.toLowerCase() === 'all') {
        setDisplayProjectHeader('All');
      } else {
        const projectTitle =
          key[0].toUpperCase() + key.slice(1, key.length) + 'JS';
        setDisplayProjectHeader(projectTitle);
      }
    }
    if (key.toLowerCase() === 'all') {
      setProjects(projectDetails);
      return;
    }
    // filtered
    let newProjects = [...projectDetails];
    const selectedCategory = key.toLowerCase();
    if (selectedCategory) {
      let filteredProjects = newProjects.filter(
        (project) => project.category.toLowerCase() === selectedCategory
      );
      setProjects(filteredProjects);
    }
  };

  return (
    <div className={style.projects}>
      <Header className={style.projectHeader}>
        <Title disabled level={5}>
          Displaying {projectCount} projects: {displayProjectHeader}
        </Title>

        <Dropdown
          menu={{ items, onClick: sortProjects }}
          placement="bottomLeft"
        >
          <Button>Filter Projects</Button>
        </Dropdown>
      </Header>
      <div className={style.projectContainer}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {projects.length > 0 ? (
            projects?.map((project, index) => {
              const { projectName, description } = project;
              return (
                <div className={style.projectCard} key={index}>
                  <CardComponent
                    key={index}
                    cardTitle={projectName}
                    description={description}
                  />
                </div>
              );
            })
          ) : (
            <div className={style.projectCard} key={0}>
              <CardComponent
                key={0}
                cardTitle={'Coming Soon'}
                description={undefined}
              />
            </div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
