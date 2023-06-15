import { defineStore } from 'pinia'
import { getNotes } from '@/network/firebaseMethods.js'
export default defineStore('note store', {
  state: () => ({
    cardLists: [],
    listType: 'doing',
  }),
  getters: {
    getCardLists: (state) => {
      return state.cardLists.filter((item) => {
        return state.listType === 'all' ? item : item.data.status === state.listType
      })
    },
  },
  actions: {
    async getNotesHandler() {
      let temp = await getNotes();
      temp.forEach((item) => {
        this.cardLists.push({
          firebaseID: item.firebaseID,
          data: {
            id: item.id,
            title: item.title,
            message: item.message,
            status: item.status,
            createDate: item.createDate,
          }
        })
      })
      this.sortList();
    },
    sortList() {
      this.cardLists.sort((a, b) => {
        return b.data.id - a.data.id
      })
    },
    addNote(payload) {
      this.cardLists.push(payload)
      this.sortList();
    },
    getNote(firebaseID) {
      return this.cardLists.find((item) => {
        return item.firebaseID === firebaseID;
      })
    },
    changeListType(newValue){
      this.listType = newValue;
    },
    findNoteIndex(firebaseID){
      return this.cardLists.findIndex((item)=>{
        return item.firebaseID === firebaseID
      })
    },
    updateNote(id, payload){
      this.cardLists[id] = payload;
    },
    updateStatus(id, status){
      this.cardLists[id].data.status = status;
    },
    delNote(index){
      this.cardLists.splice(index, 1)
    } 
  }
})