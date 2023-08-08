import logo from './logo.svg';
import './App.css';
import Labs from './labs'
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter'
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";
import { Provider } from 'react-redux';
import AuthContext from './auth-context';
import whoReducer from './tuiter/who-to-follow-list/who-reducer';
import tuitsReducer from './tuiter/reducers/tuits-reducer';
import authReducer from './tuiter/reducers/auth-reducer';
import ProtectedRoute from './protected-route';
import ProfileScreen from './tuiter/user/profile-screen';
import { configureStore } from '@reduxjs/toolkit';

// useless comment to commit, need to revert a5 back to original a5, it has the a6 code
const store = configureStore(
  {
    reducer: {
    who: whoReducer, 
    tuits: tuitsReducer,
    user: authReducer}});

function App() {
  return (
    <Provider store={store}>
   <HashRouter>
    <AuthContext>
     <div className="container">
      <Routes>
         <Route path="/" element={<Navigate to="/labs"/>}/>
         <Route path="/labs/*" element={<Labs/>}/>
         <Route path="/hello" element={<HelloWorld/>}/>
         <Route path="/tuiter/*" element={<Tuiter/>}/>
         <Route path="/profile" element={<ProtectedRoute><ProfileScreen/></ProtectedRoute>}/>
      </Routes>
     </div>
     </AuthContext>
   </HashRouter>
   </Provider>
  );
}

export default App;
