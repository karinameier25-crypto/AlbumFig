<template>
  <ion-page>

    <ion-tabs>

      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" href="/tabs/home">
  <ion-icon :icon="albums"></ion-icon>
  <ion-label>Álbum</ion-label>
</ion-tab-button>

<ion-tab-button tab="coletados" href="/tabs/coletados">
  <ion-icon :icon="star"></ion-icon>
  <ion-label>Coletadas</ion-label>
</ion-tab-button>

<ion-tab-button tab="perfil" href="/tabs/perfil">
  <ion-icon :icon="person"></ion-icon>
  <ion-label>Perfil</ion-label>
</ion-tab-button>

      </ion-tab-bar>

    </ion-tabs>

  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon
} from '@ionic/vue';

import {
  albums,
  star,
  person
} from 'ionicons/icons';
</script>