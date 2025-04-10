import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import PostivitusContextAPI from './store/usePositivusContext.tsx';

createRoot(document.getElementById('root')!).render(
  <PostivitusContextAPI>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostivitusContextAPI>,
);
