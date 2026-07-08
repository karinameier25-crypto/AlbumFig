<template>

  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content
  class="ion-padding"
  color="light"
>

      <ion-input
        v-model="email"
        label="E-mail"
        type="email"
      ></ion-input>

      <br>

      <ion-input
        v-model="senha"
        label="Senha"
        type="password"
      ></ion-input>

      <br>

      <ion-button
        expand="block"
        @click="entrar"
      >
        Entrar
      </ion-button>

      <br>

      <ion-button
        fill="clear"
        router-link="/register"
      >
        Criar conta
      </ion-button>

      <ion-button
        fill="clear"
        router-link="/reset"
      >
        Esqueci minha senha
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

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { realizarLogin } from '@/service/database';

const router = useRouter();

const email = ref('');
const senha = ref('');

async function entrar() {

  const usuario = await realizarLogin(
    email.value,
    senha.value
  );

  if (usuario.length > 0) {
    router.push('/tabs/home');
  } else {
    alert('E-mail ou senha inválidos!');
  }

}

</script>