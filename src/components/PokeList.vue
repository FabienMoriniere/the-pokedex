<script setup lang="ts">
import { onBeforeMount, ref, computed } from "vue";
import { Pokemon, getPokemonId, baseUrl } from "../pokeUtils";
import PokeProfile from "./PokeProfile.vue";

const pokelist = ref<Pokemon[]>([]);

onBeforeMount(async () => {
  const response = await fetch(`${baseUrl}?limit=2000`);
  const json = await response.json();
  pokelist.value = json.results;
});

const searchName = ref("");

const filteredList = computed<Pokemon[]>(() => {
  if (!searchName.value) {
    return pokelist.value;
  }
  return pokelist.value.filter(
    (pokemon) =>
      pokemon.name.replace(/\d+/g, "").includes(searchName.value) ||
      `${getPokemonId(pokemon)}` === searchName.value
  );
});
</script>

<template>
  <input type="text" v-model="searchName" name="search" />
  <PokeProfile
    v-for="pokemon of filteredList"
    class="pokemon-card"
    :key="pokemon.name"
    :pokemon="pokemon"
  />
</template>

<style>
.pokemon-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
