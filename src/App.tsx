import './App.css';

import { GlobalStateProvider } from './GlobalStateProvider';
import { useMediaQuery } from 'react-responsive';
import BlockyTemplate from './templates/BlockTemplate/BlockyTemplate';
import ModernTemplate from './templates/ModernTemplate/ModernTemplate';

function App() {

  const MobileView = useMediaQuery({ maxWidth: 1253 });

  const currTemplate: number = 1;

  const SwitchTemplate = () => {
    switch (currTemplate) {
      case 1: return (
        <ModernTemplate />
      );
      default: return (
        <BlockyTemplate isMobile={MobileView} />
      );
    }
      
  }

  return (
    <GlobalStateProvider>
      <SwitchTemplate />
    </GlobalStateProvider>
  );
}

export default App;
