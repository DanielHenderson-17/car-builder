import { CarBuilder } from "./CarBuilder.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
    mainContainer.innerHTML = await CarBuilder();
};

renderAllHTML();

document.addEventListener("stateChanged", async () => {
    await renderAllHTML();
});
