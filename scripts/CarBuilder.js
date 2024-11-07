import { addCustomOrder } from "./database.js";
import { Interiors } from "./Interiors.js";
import { Orders } from "./Orders.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";

document.addEventListener(
    "click",
    async (event) => {
        if (event.target.id === "orderButton") {
            await addCustomOrder();
        }
    }
);

export const CarBuilder = async () => {
    const paintsComponent = await Paints();
    const interiorsComponent = await Interiors();
    const wheelsComponent = await Wheels();
    const technologiesComponent = await Technologies();
    const ordersComponent = await Orders();

    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${paintsComponent}
            </section>
            <section class="choices__interiors options">
                ${interiorsComponent}
            </section>
            <section class="choices__wheels options">
                ${wheelsComponent}
            </section>
            <section class="choices__technologies options">
                ${technologiesComponent}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersComponent}
        </article>
    `;
};

