<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-input
        label="Nome"
      ></ion-input>

      <br>

      <ion-input
        label="Email"
        type="email"
      ></ion-input>

      <br>

      <ion-input
        label="Senha"
        type="password"
      ></ion-input>

      <br>

      <ion-button
        expand="block"
        @click="cadastrar"
      >
        Cadastrar
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

function cadastrar() {
  alert('Cadastro realizado com sucesso!');
  router.push('/login');
}
</script>