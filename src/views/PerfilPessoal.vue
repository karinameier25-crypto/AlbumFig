<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h2>Karina Meier</h2>

      <p>karina@email.com</p>

      <ion-button
        color="danger"
        @click="sair"
      >
        Sair
      </ion-button>

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
  IonButton
} from '@ionic/vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function sair() {
  router.push('/login');
}
</script>