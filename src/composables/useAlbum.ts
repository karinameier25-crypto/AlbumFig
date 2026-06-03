import { ref } from "vue";
import { stickers } from "@/data/stickers";

const lista = ref(stickers);

export function useAlbum() {

  const alternarFigurinha = (id: number) => {

    const figurinha = lista.value.find(
      item => item.id === id
    );

    if (figurinha) {
      figurinha.coletada = !figurinha.coletada;
    }
  };

  return {
    lista,
    alternarFigurinha
  };
}