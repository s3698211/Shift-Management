import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  CalendarOutlined,
  HomeOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CreateShift from './components/pages/CreateShift';
import Register from './components/pages/Register';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Menu
          mode='horizontal'
          style={{
            fontSize: 20,
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <Menu.Item
            key='home'
            icon={<HomeOutlined style={{ fontSize: '100%' }} />}
          >
            Shift Management
            <Link to='/'></Link>
          </Menu.Item>
          <Menu.Item
            key='add-shift'
            icon={<CalendarOutlined style={{ fontSize: '100%' }} />}
          >
            Add a Shift
            <Link to='/add-shift'></Link>
          </Menu.Item>
          <Menu.Item
            style={{ float: 'right' }}
            key='login'
            icon={<LoginOutlined style={{ fontSize: '100%' }} />}
          >
            Login
            <Link to='/login'></Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/add-shift' component={CreateShift} />
          <Route path='/register' component={Register} />
          <Route extact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
