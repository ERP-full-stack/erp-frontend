import Vue from 'vue';

import {
  Input,
  Form,
  FormItem,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Message,
} from 'element-ui';

Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

Vue.prototype.$message = Message;
