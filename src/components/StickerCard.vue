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

      <ion-chip
        :color="
          figurinha.raridade === 'Brilhante'
            ? 'warning'
            : figurinha.raridade === 'Rara'
            ? 'primary'
            : 'medium'
        "
      >
        <ion-label>
          {{ figurinha.raridade }}
        </ion-label>
      </ion-chip>

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
  IonButton,
  IonChip,
  IonLabel
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
    raridade: string;
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
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.3);
}

ion-card-title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff69b4;
}

p {
  margin: 6px 0;
}

ion-chip {
  margin-top: 8px;
  margin-bottom: 12px;
}
</style>