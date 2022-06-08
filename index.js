import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App/>
)

AppRegistry.registerComponent(appName, () => App);
