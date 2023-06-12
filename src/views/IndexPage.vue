<script setup>
import NoteCards from '@/components/NoteCards.vue'
import NoteModal from '@/components/NoteModal.vue'
import { Modal } from 'bootstrap';
import { onMounted, ref } from 'vue';
import noteData from '@/stores/noteData.js'

const noteStore = noteData();
const noteModal = ref(null);

onMounted(() => {
  noteModal.value = new Modal('#noteModal', {})
})
function openNoteModal() {
  noteModal.value.show();
}
function hideNoteModal() {
  noteModal.value.hide();
}
function changeNoteStoreListType(value) {
  noteStore.changeListType(value)
}


</script>

<template>
  <div class="container">
    <div class="d-flex mt-2 top-buttons">
      <div class="me-auto btn-group">
        <div class="btn-group"
          role="group"
          aria-label="Basic example">
          <button type="button"
            @click="changeNoteStoreListType('all')"
            :class="[noteStore.listType === 'all' ? 'btn-dark' : 'btn-outline-dark']"
            class="btn">全部</button>
          <button type="button"
            @click="changeNoteStoreListType('doing')"
            :class="[noteStore.listType === 'doing' ? 'btn-dark' : 'btn-outline-dark']"
            class="btn">未完成</button>
          <button type="button"
            @click="changeNoteStoreListType('done')"
            :class="[noteStore.listType === 'done' ? 'btn-dark' : 'btn-outline-dark']"
            class="btn">已完成</button>
        </div>
      </div>
      <div class="p-2 btn btn-dark"
        @click="openNoteModal">新增備註</div>
    </div>

    <NoteCards @openNoteModalHandler="openNoteModal"></NoteCards>
    <NoteModal @hideNoteModalHandler="hideNoteModal"></NoteModal>
  </div>
</template>

<style lang="scss" scoped></style>