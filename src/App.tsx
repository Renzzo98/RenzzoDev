import './App.css';

import { GlobalStateProvider } from './GlobalStateProvider';
import { useMediaQuery } from 'react-responsive';
import BlockyTemplate from './templates/BlockTemplate/BlockyTemplate';

function App() {

  const MobileView = useMediaQuery({ maxWidth: 1253 });

  return (
    <GlobalStateProvider>
      <BlockyTemplate isMobile={MobileView} />
    </GlobalStateProvider>
  );
}

export default App;
