import { sendReservation } from "./dataAccess.js"



export const ReservationForm = () => {
    let html = `
    
    <div class="field">
    <label class="label" for="parentName">Parent Name</label>
    <input type="text" name="parentName" class="input" />
    </div>
    
    <div class="field">
    <label class="label" for="childName">Child Name</label>
    <input type="text" name="childName" class="input" />
    </div>
    
    <div class="field">
    <label class="label" for="childCount">Number of Children</label>
    <input type="number" name="childCount" class="input" />
    </div>
    
    <div class="field">
    <label class="label" for="partyAddress">Party Address</label>
    <input type="text" name="partyAddress" class="input" />
    </div>
    
    <div class="field">
        <label class="label" for="reservationDate">Reservation Date</label>
        <input type="date" name="reservationDate" class="input" />
    </div>

    <div class="field">
        <label class="label" for="reservationLength">Reservation Length</label>
        <input type="text" name="reservationLength" class="input" />
    </div>


        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userCount = document.querySelector("input[name='childCount']").value
        const userParent = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userResDate = document.querySelector("input[name='reservationDate']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userResLength = document.querySelector("input[name='reservationLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            childCount: userCount,
            parentName: userParent,
            childName: userChild,
            reservationDate: userResDate,
            partyAddress: userAddress,
            reservationLength: userResLength,
            date_created: Date.now()
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})