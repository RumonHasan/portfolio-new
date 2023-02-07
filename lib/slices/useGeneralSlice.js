import { create } from 'zustand';
const useGeneralStore = create((set) => ({
  menuItems: [
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Skills',
      path: '/skills',
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
