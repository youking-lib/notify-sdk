import { createApp } from "vue";
import { Button, message, notification } from "ant-design-vue";
import Message from "./message";
import Drawer from "./drawer";

import "./sdk.less";

// 按需引入样式
import "ant-design-vue/es/button/style";
import "ant-design-vue/es/notification/style";

class NotifySdk {
  constructor() {
    this.message = new Message();
    this.drawer = new Drawer();

    this._buildVue();
  }

  async init() {
    await this.message.fetchMessage();

    this.showImporantMessage();
    this.drawer.showDrawer();

    // setTimeout(() => {
    //   this.drawer.closeDrawer();
    // }, 3000);
  }

  _buildVue() {
    // https://next.antdv.com/docs/vue/getting-started-cn/ 局部导入组件
    const app = createApp();
    const el = document.createElement("div");

    document.body.appendChild(el);

    app.config.productionTip = false;
    app.config.globalProperties.$message = message;

    app.use(Button);
    app.use(notification);
  }

  showImporantMessage() {
    this.message.showImportantMessage();
  }

  showDrawer() {}
}

export default new NotifySdk();
