import { Header } from './components/Header';
import { ProfilesList } from './components/ProfilesList';
import './styles/global.scss'
import { ToastContainer } from 'react-toastify';

import { useEffect, useState } from 'react';


export default function App() {
  const [theme, setTheme] = useState('light');
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setChecked(true)
      setTheme('dark')
    };
  }, [])

  useEffect(() => {
    if(checked) {
      localStorage.setItem('Theme', 'dark');
      setTheme('dark')
    } else {
      localStorage.setItem('Theme', 'light');
      setTheme('light')
    }
  }, [checked])
  
  return (
    <div className={`App ${theme}`}>
      <Header checked={checked} setChecked={setChecked}/>
      <ProfilesList />
      <ToastContainer />
    </div>
  );
}
