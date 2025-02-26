import "./styles.css"
import { animateOnLoad } from "./modules/ui"
import { observer } from "./modules/ui";

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

animateOnLoad(".letter");