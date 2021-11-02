import { notification } from "ant-design-vue";

export default class Drawer {
  static DRAWER_KEY = "Drawer_Key";

  showDrawer() {
    notification.open({
      key: Drawer.DRAWER_KEY,
      message: "Notification Title",
      description: <iframe src="http://localhost:3000/index_frame.html" />,
      duration: null,
      style: {
        width: "300px",
        height: "500px",
      },
    });
  }

  closeDrawer() {
    notification.close(Drawer.DRAWER_KEY);
  }
}
