AFRAME.registerComponent("tour", {    
    schema:{
        state:{
            type: "string",
            default: "places-list"
        },
        selectedCard:{
            type: "string",
            default: "#card1"
        }
    },

    init:function(){
        this.placesContainer = this.el
        this.createCards()
    },

    tick: function(){
        const{state} = this.el.getAttribute("tour")

        if(state == "view") {
            this.hideEl([this.placesContainer])
            this.showView()
        }
    },

    hideEl: function(eList){
        eList.map(el => {
            el.setAttribute("visible", false)
        })
    },

    showView: function(){
        const {selectedCard} = this.data

        const skyEl = document.querySelector("#main-container")
        skyEl.setAttribute("material", {src: `./Scenes/${selectedCard}/place-3.jpg`, color: "white"})
    },

    createCards:function(){
        const thumbnailRef = [
            {  
                id: "green-arrow",
                title: "Green Arrow",
                url: "../Thumbnails/greenArrow.jpg"
            },

            {
                id: "mandalorian",
                title: "The Mandolorian",
                url: "../Thumbnails/mandolorian.jpg"
            },

            {
                id: "she-hulk",
                title: "She Hulk",
                url: "../Thumbnails/sheHulk.jpg"
            },

            {
                id: "spider-man",
                title: "Spider Man",
                url: "../Thumbnails/spiderMan.jpg"
            },
        ]
       
        let preX = -60;
        for (var item of thumbnailRef){
            var posX = preX +25;
            var posY = 10;
            var posZ = -40;
            
            const position = {x: posX, y: posY, z: posZ}
            preX = posX
            console.log(item.url)
            const thumbNail = this.createThumbnail(item, position)
            this.placesContainer.appendChild(thumbNail)

            const titleEl = this.createTitle(item, position)
            thumbNail.appendChild(titleEl)
        }
    },

    createThumbnail:function(item, pos){
        const entityEl = document.createElement("a-entity")

        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {primitive: "plane", width: 10, height: 16})
        entityEl.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
        entityEl.setAttribute("material", {src: item.url})

        return entityEl
    }, 

    createTitle:function(item, position){
        const entityEl = document.createElement("a-entity")
        const elPos = position;
        elPos.y = -15

        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("text", {value: item.title, align: 'center', width: 70, color: "black"})
        entityEl.setAttribute("position", elPos)

        return entityEl
    }
})