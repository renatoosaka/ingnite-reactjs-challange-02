import { GenresProvider } from './context/GenresContext';
import { MoviesProvider } from './context/MoviesContext';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>      
      <GenresProvider>
        <MoviesProvider>
          <SideBar />
          <Content />
        </MoviesProvider>
      </GenresProvider>
    </div>
  )
}