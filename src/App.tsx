import {Toaster} from 'sonner';
import MyRouter from './router';
function App() {
  return (
    <>
      <MyRouter />
      <Toaster richColors position='top-center' />
    </>
  );
}

export default App;
