<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Álbum da Copa</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <StickerCard
        v-for="item in lista"
        :key="item.id"
        :figurinha="item"
        @toggle="alternarFigurinha(item.id)"
      />

    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from "@ionic/vue";

import StickerCard from "@/components/StickerCard.vue";

import { useAlbum } from "@/composables/useAlbum";

const {
  lista,
  alternarFigurinha
} = useAlbum();

</script>