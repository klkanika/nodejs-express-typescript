require("dotenv").config();
import { configureApp, postRun } from "./app";
import { initWebsocket } from "./websocket"
const port = process.env.PORT || 9001;
initWebsocket(configureApp().listen(port, () => {
  postRun(port)
}))
console.log(`Listening on port ${port}`);