import Home from './pages/Home';

const App = () => {
  return (
      <div className="d-flex vh-100">
        <div className="flex-grow-1">
          <div className="p-3">
            <Home />          
          </div>
        </div>
      </div>
  );
};

export default App;
