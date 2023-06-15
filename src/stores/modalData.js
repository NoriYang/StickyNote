import { defineStore } from 'pinia'
import { 
  addNote, 
  updateNote, 
  updateNoteStatus,
  delNote
} from '@/network/firebaseMethods';
import noteData from '@/stores/noteData.js';
const noteStore = noteData();

export default defineStore('modal store', {
  state: () => ({
    firebaseID: '',
    modalData: {
      status: 'doing'
    },
    modalType: 'new',
  }),
  actions: {
    async addNoteHandler() {
      let tempID = await addNote(this.modalData);
      let payload = {
        firebaseID: tempID,
        data: JSON.parse(JSON.stringify(this.modalData))
      }
      noteStore.addNote(payload);
    },
    async delNoteHandler(){
      let tempIndex = noteStore.findNoteIndex(this.firebaseID);
      noteStore.delNote(tempIndex);
      await delNote(this.firebaseID);
    },
    async updateNoteHandler() {
      await updateNote(this.firebaseID, this.modalData)
      let tempIndex = noteStore.findNoteIndex(this.firebaseID);
      noteStore.updateNote(tempIndex, {
        firebaseID: this.firebaseID,
        data: JSON.parse(JSON.stringify(this.modalData))
      })
    },
    async updateNoteStatusHandler(status){
      await updateNoteStatus(this.firebaseID, status);
      let tempIndex = noteStore.findNoteIndex(this.firebaseID);
      noteStore.updateStatus(tempIndex, status);
    },
    getNote(id) {
      let temp = JSON.parse(JSON.stringify(noteStore.getNote(id)))
      this.firebaseID = temp.firebaseID;
      this.modalData = temp.data;
    },
  }
})