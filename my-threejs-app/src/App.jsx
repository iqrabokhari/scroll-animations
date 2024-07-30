import Experience from './components/Experience';
import { Canvas } from '@react-three/fiber';

import './App.css';

function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <Experience />
    </Canvas>
  );
}

export default App;
