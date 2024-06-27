import { useMainStore } from '@/store/index'

export const useTheme = () => {
  const mainStore = useMainStore();

  const themeSet = (value) => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(value);
    mainStore.theme = value
    localStorage.setItem('asg-theme', value)
  };

  return {
    themeSet,
  };
};
