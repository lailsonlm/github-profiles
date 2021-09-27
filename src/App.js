import { Header } from './components/Header';
import { ProfilesList } from './components/ProfilesList';
import './styles/global.scss'
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <Header />
      <ProfilesList />
      <ToastContainer />
    </>
  );
}
