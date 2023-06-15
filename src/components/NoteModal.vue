<script setup>
import useModalData from '@/stores/modalData.js';
import { defineEmits } from 'vue';

const emit = defineEmits(['hideNoteModalHandler'])
const modalStore = useModalData();

function resetModal() {
  modalStore.$reset();
}
function hideModal() {
  emit('hideNoteModalHandler')
}

async function updateNote() {
  if (modalStore.modalType === 'new') {
    modalStore.modalData.id = Date.now();
    modalStore.modalData.createDate = Date.now();
    await modalStore.addNoteHandler();
  }
  if (modalStore.modalType === 'update') {
    await modalStore.updateNoteHandler();
  }
  hideModal();
  resetModal();
}
async function doneHandler() {
  await modalStore.updateNoteStatusHandler('done')
  hideModal();
  resetModal();
}
async function removeDoneHandler() {
  await modalStore.updateNoteStatusHandler('doing')
  hideModal();
  resetModal();
}
async function delHandler(){
  await modalStore.delNoteHandler()
  hideModal();
  resetModal();
}
</script>

<template>
  <div class="modal fade"
    id="noteModal"
    tabindex="-1"
    aria-labelledby="noteModal"
    aria-hidden="true"
    data-bs-keyboard="false"
    data-bs-backdrop="static">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"
            id="noteModal">StickyNote</h5>
        </div>
        <div class="modal-body">

          <div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                id="basic-addon1">主題</span>
              <input type="text"
                class="form-control"
                v-model="modalStore.modalData.title"
                aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                id="basic-addon2">建立時間</span>
              <input type="text"
                disabled
                class="form-control"
                :value="$filters.date(modalStore.modalData.createDate || Date.now())"
                aria-describedby="basic-addon2">
            </div>
            <div class="mb-3">
              <textarea class="form-control"
                placeholder="請輸入備註"
                id="inputMessage"
                rows="5"
                v-model="modalStore.modalData.message"></textarea>
            </div>
            <div class="d-grid gap-2"
              v-if="modalStore.modalType === 'update'">
              <button v-if="modalStore.modalData.status === 'doing'"
                class="btn btn-success"
                type="button"
                @click="doneHandler">完成</button>
              <button v-if="modalStore.modalData.status === 'done'"
                class="btn btn-warning"
                type="button"
                @click="removeDoneHandler">取消完成</button>
              <button 
                type="button"
                class="btn btn-danger"
                @click="delHandler"
              >
                刪除備註
              </button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="resetModal">關閉</button>
          <button type="button"
            class="btn btn-primary"
            @click="updateNote">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>