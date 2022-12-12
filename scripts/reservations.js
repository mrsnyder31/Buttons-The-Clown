import { getClowns, getReservations, sendCompletions, deleteReservation } from "./dataAccess.js";


export const Reservations = () => {
    const reservations = getReservations();
    const clowns = getClowns()


    let html = `
        <ul>
            ${
            reservations.map(
                (requestObj) => {
                     return `
                    <li>
                        ${requestObj.parentName} made a reservation on ${requestObj.reservationDate}
                        <select class="clowns" id="clowns">
                        <option value="">Choose</option>
                        ${
                            clowns.map(
                               (clown) => {
                                    return `<option value="${requestObj.id}--${clown.id}">
                                                ${clown.name}
                                           </option>`
                                        }
                            ).join("")
                        }
                        </select>
                        <button class="request__delete"
                        id="request--${requestObj.id}">
                             Delete
                        </button> 
                    </li>
                        `
                    }

                ).join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. reservationId
                   2. clownId
                   3. date_created
            */
            const completion = { 
                reservationId: reservationId,
                clownId: clownId,
                date_completed: Date.now()
            }

            /*
                Invoke the function that performs the POST reservation
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            sendCompletions(completion)

        }
    }
)


