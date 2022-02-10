AFRAME.registerComponent('cursor-listener', {
    schema: {
        selectedItemId: {default: "", type: "string"}
    },

    init: function(){
        this.handleClickEvents()
        this.MouseEnterEvent()
        this.MouseLeaveEvent()
    },

    handleViewState: function(){
        const el = this.el
        const id = el.getAttribute("id")
        const placesContainer = document.querySelector("#places-container")
        const {selectedItemId}  = placesContainer.getAttribute("cursor-listener")
        const sideViewPlaceId = ["place-1", "place-2", "place-3", "place-4"]

        if(sideViewPlacesId.includes(id)){
            placesContainer.setAttribute("tour", {state: "change-view"})
            const skyEl = document.querySelector("#main-container")
            skyEl.setAttribute("material", {src: `../Scenes/${selectedItemId}/${id}.jpg`, color:'#ffffff'})
        }
    },

    handlePlacesList: function(){
        const id = this.el.getAttribute("id")
        const placesId = ["green-arrow", "mandolorian", "she-hulk", "spider-man"]

        if(placesId.includes(id)) {
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-listener", {selectedItemId: id})

            this.el.setAttribute("material", {color: "orange"})
        }
    },

    MouseEnterEvent: function(){
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesList()
        })
    },

    MouseLeaveEvent: function(){
        this.el.addEventListener("mouseleave", () => {
            const {selectedItemId} = this.data
            
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")

                if(id == selectedItemId){
                    el.setAttribute("material", {color: "black", opacity: 1})
                }
            }
        })
    },

    handleClickEvents: function(){
        this.el.addEventListener("click", evt => {
            const placesContainer = document.querySelector("#places-container")
            const{state} = placesContainer.getAttribute("tour")

            if(state == "places-list"){
                const id = this.el.getAttribute("id")
                const placesId = ["green-arrow", "mandolorian", "she-hulk", "spider-man"]

                if(placesId.includes(id)){
                    placesContainer.setAttribute("tour", {state: "view", selectedCard: id})
                }

              
            }
            if(state == "view" || state == "change-view"){
                this.handleViewState()
            }
        })
    }
})