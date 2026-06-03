<template>

<ion-page>

  <ion-header>
    <ion-toolbar>
      <ion-title>Coletadas</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">

    <ion-card
      v-for="item in coletadas"
      :key="item.id"
    >

      <ion-card-header>
        <ion-card-title>
          {{ item.nome }}
        </ion-card-title>
      </ion-card-header>

      <ion-card-content>
        {{ item.selecao }}
      </ion-card-content>

    </ion-card>

  </ion-content>

</ion-page>

</template>

<script setup lang="ts">

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/vue";

import { computed } from "vue";
import { useAlbum } from "@/composables/useAlbum";

const { lista } = useAlbum();

const coletadas = computed(() =>
  lista.value.filter(item => item.coletada)
);

</script>