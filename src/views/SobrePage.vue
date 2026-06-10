<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Sobre</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h2>Álbum de Figurinhas da Copa</h2>

      <p>
        Aplicativo desenvolvido para a disciplina de Desenvolvimento Mobile.
      </p>

      <h3>Versão</h3>

      <p>1.0.0</p>

      <h3>Desenvolvido por:</h3>

      <p>Karina Meier</p>

      <h3>Termos de Uso</h3>

      <a href="/termos" target="_blank">
        Termos de Uso
    </a>

    <h3>Política de privacidade</h3>
        <a href="/privacidade" target="_blank">
      Política de Privacidade
     </a>

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
} from '@ionic/vue';
</script>