import {} from "vue";
import { notification } from "ant-design-vue";
import DrawerContent from "./DrawerContent.vue";

export default class Drawer {
  static DRAWER_KEY = "Drawer_Key";

  showDrawer() {
    notification.open({
      key: Drawer.DRAWER_KEY,
      message: "Notification Title",
      description: <DrawerContent onClose={() => console.log(123)} />,
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
