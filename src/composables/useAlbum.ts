import { ref } from "vue";
import { onMounted } from "vue";

import {
  listFigurinhas,
  updateFigurinha
} from "@/service/database";

const lista = ref<any[]>([]);

async function carregarFigurinhas() {
  lista.value = await listFigurinhas();
}

export function useAlbum() {

  onMounted(() => {
    carregarFigurinhas();
  });

  const alternarFigurinha = async (id: number) => {

    const figurinha = lista.value.find(
      item => item.id === id
    );

    if (!figurinha) return;

    figurinha.coletada = figurinha.coletada ? 0 : 1;

    await updateFigurinha(
      figurinha.id,
      figurinha.coletada
    );

    await carregarFigurinhas();
  };

  return {
    lista,
    alternarFigurinha
  };
}