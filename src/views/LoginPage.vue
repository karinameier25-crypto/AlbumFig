<template>

<ion-page>

  <ion-header>
    <ion-toolbar>
      <ion-title>Login</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">

    <ion-input
      label="E-mail"
      type="email"
    />

    <br>

    <ion-input
      label="Senha"
      type="password"
    />

    <br>
    <ion-button
  expand="block"
  @click="entrar"
>
  Entrar
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
IonInput,
IonButton
} from '@ionic/vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function entrar() {
  router.push('/tabs/home')
}
</script>