<template>
<div>
    <b-navbar type="light" variant="light">

        <b-nav-brand >Nuxt</b-nav-brand>

        <b-navbar-nav>
            <b-nav-item href="/profile">Profile</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
            <n-nav-text>{{this.$store.state.users.user ? this.$store.state.users.user.email : "please Login"}}</n-nav-text>
        </b-navbar-nav>
        <b-button :style="{marginLeft:'10px'}" @click="logOut" variant="light">Log out</b-button>
        
    </b-navbar>
</div>
</template>

<script>
import {auth} from "@/services/firebase";
import Cookie from "js-cookie";

export default {
  methods: {
    async logOut() {
      await auth.signOut();
      await Cookie.remove("access_token")
      this.$router.push("/login/singin")
    }
  }
}
</script>