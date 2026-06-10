<template>

  <ion-page>

    <ion-header>
     <ion-toolbar color="primary"> 
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content
  class="ion-padding"
  color="light"
>

      <ion-input
        v-model="nome"
        label="Nome"
      ></ion-input>

      <br>

      <ion-input
        v-model="email"
        label="Email"
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
        @click="realizarCadastro"
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

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const router = useRouter();

const nome = ref('');
const email = ref('');
const senha = ref('');

const { cadastrar } = useAuth();

function realizarCadastro() {

  cadastrar(
    nome.value,
    email.value,
    senha.value
  );

  alert('Cadastro realizado com sucesso!');

  router.push('/login');
}
</script>