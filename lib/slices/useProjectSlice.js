import { create } from 'zustand';

const useProjectStore = create((set) => ({
  projectDetails: [
    {
      projectName: 'Personal Portfolio',
      path: 'portfolio',
      description: 'This is the portfolio project',
      category: 'react',
    },
    {
      projectName: 'Covid Project',
      path: 'covidproject',
      description: 'This is the covid project.',
      category: 'vanilla',
    },
    {
      projectName: 'Wordle Game Version: 2.0',
      path: 'wordleproject',
      description: 'This is the wordle game project',
      category: 'react',
    },
    {
      projectName: 'University Project',
      path: 'ihproject',
      description: 'This is the university project',
      category: 'react',
    },
    {
      projectName: 'Todo App',
      path: 'todoapp',
      description: 'Proper todo app build in angular js',
      category: 'angular',
    },
    {
      projectName: 'University Project',
      path: 'ihproject',
      description: 'This is the university project',
      category: 'react',
    },
    {
      projectName: 'Todo App',
      path: 'todoapp',
      description: 'Proper todo app build in angular js',
      category: 'angular',
    },
    {
      projectName: 'University Project',
      path: 'ihproject',
      description: 'This is the university project',
      category: 'react',
    },
    {
      projectName: 'Todo App',
      path: 'todoapp',
      description: 'Proper todo app build in angular js',
      category: 'angular',
    },
  ],
}));

export default useProjectStore;
