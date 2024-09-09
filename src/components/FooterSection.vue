<script setup lang="ts">
</script>

<template>
  <section>
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Karte_AT_Kaernten.svg/320px-Karte_AT_Kaernten.svg.png"
      />
      <p class="subtitle">Kärnter Veranstaltungen</p>
    </div>

    <div class="fakeLinks">
      <p>Impressum</p>
      <p>Kontakt</p>
      <p>Spenden</p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

p {
  color: white;
  font-weight: bold;
  font-size: large;
}

.subtitle {
  text-align: center;
  font-size: xx-large;
}

.fakeLinks {
  display: flex;
  gap: 15vw;
}
</style>
