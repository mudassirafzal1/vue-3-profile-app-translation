<template>
  <q-layout view="hHh LpR lFf">
    <div>
      <header class="q-py-md">
        <div class="container">
          <LocaleSwitcher />
        </div>
      </header>
      <router-view />
    </div>
  </q-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@font-face {
  font-family: "Poppins-rg";
  src: url("./assets/fonts/Poppins-Regular.ttf");
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  font-family: "Poppins-rg" !important;
}

.container {
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
}
</style>
