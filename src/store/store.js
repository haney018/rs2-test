import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fullLoading: false,
    searchText: "",
    searchType: null,
    products: [
        { name: "Don Quixote",  type: "books" },
        { name: "Lord of the Rings",  type: "books" },
        { name: "Harry Potter and the Sorcerer's Stone",  type: "books" },
        { name: "And Then There Were None",  type: "books" },
        { name: "Alice's Adventures in Wonderland",  type: "books" },
        { name: "The Lion, the Witch, and the Wardrobe",  type: "books" },
        { name: "Pinocchio",  type: "books" },
        { name: "Catcher in the Rye",  type: "books" },
        { name: "Twenty Thousand Leagues Under the Sea",  type: "books" },
        { name: "Anne of Green Gables",  type: "books" },
        { name: "Sos",  type: "music" },
        { name: "Midnights",  type: "music" },
        { name: "Heroes & Villains",  type: "music" },
        { name: "Her Loss",  type: "music" },
        { name: "Dangerous: The Double Album",  type: "music" },
        { name: "New",  type: "music" },
        { name: "Un Verano Sin Ti",  type: "music" },
        { name: "Let's Start Here",  type: "music" },
        { name: "American Heartbreak",  type: "music" },
        { name: "It's Only Me",  type: "music" },
        { name: "Elden Ring",  type: "games" },
        { name: "Stray",  type: "games" },
        { name: "Vampire Survivors",  type: "games" },
        { name: "God of War Ragnarök",  type: "games" },
        { name: "Grand Theft Auto V",  type: "games" },
        { name: "Red Dead Redemption 2",  type: "games" },
        { name: "Horizon Forbidden West",  type: "games" },
        { name: "Pokémon Legends: Arceus",  type: "games" },
        { name: "Hades",  type: "games" },
        { name: "Forza Horizon 5",  type: "games" }
    ]
  },
  mutations: {
    changeSearchText (state, value) {
        state.searchText = value
    },
    changeType (state, type) {
        state.searchType = type
    }
  }
})
