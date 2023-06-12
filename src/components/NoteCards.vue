<script setup>
import noteData from '@/stores/noteData.js';
import useModalData from '@/stores/modalData.js';

import { defineEmits } from 'vue';

const emit = defineEmits(['openNoteModalHandler'])

const noteStore = noteData();
const modalStore = useModalData();

function updateNote(firebaseID) {
  modalStore.modalType = 'update'
  modalStore.getNote(firebaseID)
  emit('openNoteModalHandler')
}

</script>

<template>
  <div class="row">
    <div v-for="card of noteStore.getCardLists" :key="card.firebaseID"
      class="col-12 col-sm-6 col-md-4 g-4">
      <div class="card"
        @click="updateNote(card.firebaseID)">
        <div class="card-body">
          <div class="card-titles">
            <h6 class="card-subtitle text-muted">
              {{ $filters.date(card.data.createDate) }}
            </h6>
            <h5 class="card-title">
              {{ card.data.title }}
            </h5>
          </div>
          <p class="card-text"
            style="white-space: pre-line">
            {{ card.data.message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #eef079;
  border-radius: 5px;
  min-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.card-titles {
  padding: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  padding-bottom: 5px;
}

.card-subtitle {
  font-size: 10px;
  padding: 0;
}

.card-title {
  margin-top: 5px;
  margin-bottom: 2px;
}

.card-text {
  margin-top: 5px;
}
</style>