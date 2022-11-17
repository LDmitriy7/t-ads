<template>
  <header>
    <MenuIcon class="menu-icon"/>
    <span>Telegram Ads</span>
    <SearchIcon class="search-icon"/>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 1rem;
  background-color: #517da2;
  display: flex;
  align-items: center;
}

svg {
  height: 1.1rem;
  width: 1.1rem;
}

.menu-icon {
  margin-right: 2rem;
}

.search-icon {
  margin-left: auto;
}
</style>
