import { fetchReservations, fetchClowns } from "./dataAccess.js"
import { PageContent } from "./pageContent.js"




const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
    .then(() => fetchClowns())
    .then(
        () => {
            mainContainer.innerHTML = PageContent()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)