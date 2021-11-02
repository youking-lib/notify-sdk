import debounce from "lodash/debounce";
import { notification } from "ant-design-vue";

export default class Message {
  messages = [];

  getImportant() {
    return this.messages;
  }

  async showImportantMessage() {
    const messages = this.getImportant();

    for (let i = 0; i < messages.length; i++) {
      debounce(() => {
        notification.open({
          duration: null,
          message: "Notification Title",
          description: "description.",
        });
      }, 300 * i)();
    }
  }

  async fetchMessage() {
    this.messages = await getMessage();
  }
}

function getMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          message: "123",
          id: "2",
        },
        {
          message: "123",
          id: "1",
        },
      ]);
    }, 1000);
  });
}
