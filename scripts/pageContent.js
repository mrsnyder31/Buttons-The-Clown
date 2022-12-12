import { ReservationForm } from "./reservationForm.js"
import { Reservations } from "./reservations.js"


export const PageContent = () => {
    return `
        <h1>Leslie and Mike's Clown Emporium</h1>
        <section class="serviceForm">
           ${ReservationForm()}
        </section>

        <section class="serviceRequests">
            <h2>Current Reservations</h2>
            ${Reservations()}
        </section>
    `
}