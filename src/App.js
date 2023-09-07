import { Header } from './components/Header/Header';
import { PreviewArea } from './components/PreviewArea/PreviewArea';

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--blue)',
        }}
      >
        <div className="container">
          <Header />
          <PreviewArea />
        </div>
      </div>
    </>
  );
}

export default App;
