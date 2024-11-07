import { getTechnologies, setTechnology } from "./database.js";

document.addEventListener("change", (clickEvent) => {
    if (clickEvent.target.id === "tech") {
        setTechnology(parseInt(clickEvent.target.value));
    }
});

// Async Technologies component
export const Technologies = async () => {
    const techs = await getTechnologies();

    return `<h2>Technologies</h2>
    <select id="tech">
        <option value="0">Select a technology package</option>
        ${
            techs.map(
                (tech) => {
                    return `<option value="${tech.id}">${tech.package}</option>`;
                }
            ).join("")
        }
    </select>`;
};
