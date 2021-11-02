import NotifySdk from "./sdk/sdk";

if (process.env.NODE_ENV === "development") {
  NotifySdk.init();
}

export default NotifySdk;
