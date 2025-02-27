import "./styles.css"
import { animateOnLoad } from "./modules/ui"
import { observer } from "./modules/ui";
import { projectObserver } from "./modules/ui";

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenProject = document.querySelectorAll(".hide");
hiddenProject.forEach((el) => projectObserver.observe(el));

animateOnLoad(".letter");