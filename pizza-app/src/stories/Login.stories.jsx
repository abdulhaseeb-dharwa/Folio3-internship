import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/Auth-slice';
import Login from '../pages/Login';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default {
  title: 'Components/Login',
  component: Login,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
};

const Template = (args) => <Login {...args} />;

export const DefaultLogin = Template.bind({});
DefaultLogin.args = {};