import { createApp } from "vue";

import store from "./store";

import "./css/style.css";
import "./input.css";
import App from "./App.vue";

createApp(App).use("store").use("router").mount("#app");
