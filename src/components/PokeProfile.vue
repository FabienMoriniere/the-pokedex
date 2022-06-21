<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Pokemon,
  getPokemonId,
  getPokemonSpriteSrc,
  baseUrl,
} from "../pokeUtils";

const props = defineProps<{
  pokemon: Pokemon;
}>();

const pokeType = ref("");

onMounted(async () => {
  const id = getPokemonId(props.pokemon);
  const response = await fetch(`${baseUrl}/${id}/`);
  const json = await response.json();
  pokeType.value = json.types.map(({ type }) => type.name).join(", ");
});
</script>

<template>
  <div class="pokemon-card">
    <img :src="getPokemonSpriteSrc(pokemon)" :alt="`picture of ${pokemon.name} `" width="100" />
    <span>{{ pokemon.name }}</span>
    <span>{{ getPokemonId(pokemon) }}</span>
    <span>{{ pokeType }}</span>
  </div>
</template>
