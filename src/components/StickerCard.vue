<template>
  <ion-card>

    <ion-card-header>
      <ion-card-title>
        {{ figurinha.nome }}
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>

      <p>Seleção: {{ figurinha.selecao }}</p>

      <ion-button
        expand="block"
        @click="$emit('toggle')"
      >
        {{ figurinha.coletada
          ? 'Remover da coleção'
          : 'Coletar figurinha'
        }}
      </ion-button>

    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/vue';

defineProps<{
  figurinha: {
    id: number;
    nome: string;
    selecao: string;
    coletada: boolean;
  }
}>();

defineEmits(['toggle']);
</script>