// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux'
import store from './ReduxTask/Store/store';
import StudentState from './ReduxTask/State/StudentState';
import './ReduxTask/heading.css'
 function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
     <h1 className="c3">Redux App</h1>
     <Provider store={store}>
        <StudentState/>
     </Provider>
    </div>
  );
}

export default App;
