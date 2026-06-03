import { ref } from 'vue';

const usuarios = ref([
  {
    nome: 'Admin',
    email: 'admin@email.com',
    senha: '123456'
  }
]);

export function useAuth() {

  function cadastrar(
    nome: string,
    email: string,
    senha: string
  ) {
    usuarios.value.push({
      nome,
      email,
      senha
    });
  }

  function login(
    email: string,
    senha: string
  ) {
    return usuarios.value.find(
      usuario =>
        usuario.email === email &&
        usuario.senha === senha
    );
  }

  return {
    cadastrar,
    login
  };
}