const applicationState = {
    reservations: [],
    clowns: [],
    completions: []

}

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
    .then(response => response.json())
    .then(
        (serviceReservations) => {
            // Store the external state in application state
            applicationState.reservations = serviceReservations
        }
        )
}
    
    
    export const getReservations = () => {
        return applicationState.reservations.map(r => ({...r}))
    }



    export const sendReservation = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/reservations`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }


    export const deleteReservation = (id) => {
        return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }
    
    
    export const fetchClowns = () => {
        return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
                }
                )
            }
    
    export const getClowns = () => {
        return applicationState.clowns.map(p => ({...p}))
    }

    export const sendClowns = (userServiceclowns) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceclowns)
        }
    
    
        return fetch(`${API}/requests`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }





    export const fetchCompletions = () => {
        return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
            )
    }
    export const getCompletions = () => {
        return applicationState.completions.map(c => ({...c}))
    }

    export const sendCompletions = (userServiceCompletions) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceCompletions)
        }
    
    
        return fetch(`${API}/completions`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }