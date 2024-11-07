import { getOrders, getPaints, getInteriors, getTechnologies, getWheels, completeOrder } from "./database.js";

document.addEventListener("click", (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
        completeOrder(id);
    }
});

export const Orders = async () => {
    const orders = await getOrders();
    const paints = await getPaints();
    const interiors = await getInteriors();
    const technologies = await getTechnologies();
    const wheels = await getWheels();

    return orders.map(order => {
        return `<section class="order">
            ${order.paintColor.color} car with
            ${order.wheels.style} wheels,
            ${order.interior.material} interior,
            and the ${order.technology.package}
            for a total cost of
            ${
                (order.paintColor.price + order.technology.price + order.interior.price + order.wheels.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })
            }
            <input type="button" name="complete" id="${order.id}" value="Complete">
        </section>`;
    }).join("");
};
