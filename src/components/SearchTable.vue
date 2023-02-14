<template>
  <div class="search-table-comp">
    <div class="type-tab-wrap">
        <button
          class="type-tab-button"
          :class="searchType == null ? 'type-tab-button-active' : ''"
          @click="changeType(null)"
        >
          All
        </button>
        <button
          v-for="(item, index) in tabList"
          :key="'type-button-' + index"
          class="type-tab-button"
          :class="item.type === searchType ? 'type-tab-button-active' : ''"
          @click="changeType(item.type)"
        >
          {{ item.type }}
        </button>
    </div>
    <div class="search-text-wrap">
      <div class="search-box">
        <input v-model="inputSearch" type="text"/>
        <button @click="changeSearchText">Seach</button>
      </div>
    </div>
    <div class="item-card-wrap">
      <div
        v-for="(item, index) of filteredList"
        :key="'item-card-' + index"
        class="item-card-space"
      >
        <div class="item-card-card">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-type">{{ item.type }}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      inputSearch: ""
    }
  },
  computed: {
    ...mapState(['fullLoading', 'products', 'searchType', 'searchText']),
    tabList() {
      return this.products.filter((v,i,a)=>a.findIndex(v2=>(v2.type===v.type))===i)
    },
    filteredList() {
      let items = this.products
      if (this.searchText) {
        items = items.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()))
      }
      if (this.searchType) {
        items = items.filter(item => item.type === this.searchType)
      }
      return items
    }
  },
  methods: {
    ...mapMutations({
      changeSearchText (commit) { return commit('changeSearchText', this.inputSearch) },
      changeType (commit, currentType) { return commit('changeType', currentType) }
    }),
  }
}
</script>

<style scoped>
.type-tab-wrap, .search-text-wrap {
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  text-align: center;
}

.type-tab-button {
  width: 100px;
  text-transform: capitalize;
  box-shadow: none;
  margin-left: 10px;
  padding: 10px;
  border: none;
  background: none;
  font-weight: bold;
  transition: ease-in-out 500ms;
  border-radius: 5px;
  cursor: pointer;
}

.type-tab-button-active {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  background: #2c3e50;
  color: white;
}

.search-text-wrap { display: flex; justify-content: center;}

.search-text-wrap .search-box {
  padding: 5px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.search-text-wrap input {
  border: none;
  min-width: 200px;
  font-weight: bold;
}

.search-text-wrap input:focus {
  outline: none;
}

.search-text-wrap button {
  width: 100px;
  text-transform: capitalize;
  box-shadow: none;
  margin-left: 10px;
  padding: 10px;
  border: none;
  background: #2980b9;
  color: white;
  font-weight: bold;
  transition: ease-in-out 500ms;
  border-radius: 5px;
  cursor: pointer;
}

.item-card-wrap {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 50px;
}

.item-card-space {
  width: calc(25% - 20px);
  padding: 10px;
}

.item-card-card {
  background: #ecf0f1;
  border-radius: 5px;
  min-height: 100px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.item-card-card .item-name {
  padding: 10px;
  font-size: 1.3rem;
  text-align: left;
  font-weight: bold;
  padding-bottom: 30px;
}

.item-card-card .item-type {
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
  text-align: right;
  padding: 10px;
}
</style>
