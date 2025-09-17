import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {CommentContextProvider} from './context/commentContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <CommentContextProvider>
          <Header />
          <Main />
        </CommentContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
