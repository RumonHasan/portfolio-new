import { create } from 'zustand';
import { FcAbout } from 'react-icons/fc';
import { GrProjects } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';
const useGeneralStore = create((set) => ({
  menuItems: [
    {
      label: 'About',
      path: '/about',
      icon: <FcAbout style={{ fontSize: 20, marginRight: 10 }} />,
    },
    {
      label: 'Projects',
      path: '/projects',
      icon: <GrProjects style={{ fontSize: 20, marginRight: 10 }} />,
    },
    {
      label: 'Skills',
      path: '/skills',
      icon: <GiSkills style={{ fontSize: 20, marginRight: 10 }} />,
    },
  ],
  // header items
  headerItems: [
    {
      label: 'Blogs',
      path: '/blog',
    },
  ],
  // project filter drop down list
  filterDropDown: [
    {
      key: 'all',
      label: <a target="_blank">All Projects</a>,
    },
    {
      key: 'react',
      label: <a target="_blank">React JS</a>,
    },
    {
      key: 'angular',
      label: <a target="_blank">Angular JS</a>,
    },
    {
      key: 'svelte',
      label: <a target="_blank">Svelte JS</a>,
    },
    {
      key: 'next',
      label: <a target="_blank">Next JS</a>,
    },
    {
      key: 'vanilla',
      label: <a target="_blank">Vanilla JS</a>,
    },
  ],
}));
export default useGeneralStore;
