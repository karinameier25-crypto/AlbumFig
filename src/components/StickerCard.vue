<template>
  <ion-card>

    <img
      :src="figurinha.foto"
      alt="Jogador"
      class="foto-jogador"
    />

    <ion-card-header>
      <ion-card-title>
        {{ figurinha.nome }}
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>

      <p>🏆 Seleção: {{ figurinha.selecao }}</p>

      <p>👕 Número: {{ figurinha.numero }}</p>

      <p>⚽ Posição: {{ figurinha.posicao }}</p>

      <p>📌 Grupo: {{ figurinha.grupo }}</p>

      <ion-button
        expand="block"
        @click="$emit('toggle')"
      >
        {{
          figurinha.coletada
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
    numero: number;
    posicao: string;
    grupo: string;
    coletada: boolean;
    foto: string;
  }
}>();

defineEmits(['toggle']);
</script>

<style scoped>
.foto-jogador {
  width: 100%;
  height: 220px;
  object-fit: contain;
}

ion-card {
  max-width: 350px;
  margin: 16px auto;
  border-radius: 16px;
}

ion-card-title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}

p {
  margin: 6px 0;
}
</style>