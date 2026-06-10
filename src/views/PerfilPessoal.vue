<template>

  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h2>Karina Meier</h2>

      <p>karina@gmail.com</p>

      <ion-button
      expand="block"
      router-link="/sobre"
    >
      Sobre o Aplicativo
</ion-button>

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