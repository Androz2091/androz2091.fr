<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link tag="b-navbar-brand" to="/" exact :style="{ cursor: 'pointer'}" class="nav-username">Androz2091</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">

.navbar-brand {
    margin-left: 140px;
}

.navbar-nav {
    margin-right: 120px;
}

.nav-username {
    margin-right: 30px;
    color: #FFFFFF !important;
    display: inline-block;
    position: relative;
    margin-left: 140px;
}

.nav-link {
    margin-right: 30px;
    color: #FFFFFF !important;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    font-weight: 600;
}

.nav-link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.10s ease 0s, left 0.10s ease 0s;
    width: 0;
}

.nav-link:hover:after {
  width: 100%;
  left: 0;
}

.navbar {
    background-color: #7289DA !important;
}

</style>
