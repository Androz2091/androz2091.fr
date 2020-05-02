<template>
<div class="container">
    <b-jumbotron class="text-white text-responsive">
        <div class="userinfo">
            <img src="https://cdn.discordapp.com/icons/558328638911545423/a_a7e5bf196af7a6ab8830533d6dc4677b.gif" class="avatar">
            <h1 class="name">Androz2091 <span class="badge badge-blurple">USER</span>
                <p class="bio">{{ bio }}</p>
            </h1>
        </div>
        <div class="social">
            <button class="btn btn-github" @click="open('github')"><i class="fab fa-github"></i> GitHub</button>
            <button class="btn btn-twitter" @click="open('twitter')"><i class="fab fa-node-js"></i> Twitter</button>
            <button class="btn btn-discord" @click="open('discord')"><i class="fab fa-discord"></i> Discord</button>
        </div>
    </b-jumbotron>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

type Network = 'github' | 'twitter' | 'discord';

@Component
export default class HelloWorld extends Vue {
    bio = "Hello! I'm Androz2091, from France. Coding addicted, I love Node.js, TypeScript and in general programming around Discord."

    public open (network: Network) {
        if (network === 'github') {
            window.open('https://github.com/Androz2091')
        } else if (network === 'twitter') {
            window.open('https://twitter.com/@2091_androz')
        } else if (network === 'discord') {
            window.open('https://discord.gg/hw87VUQ')
        }
    }
}
</script>

<style scoped lang="scss">
.avatar {
    border-radius: 50%;
    width: 250px;
    cursor: pointer;
    box-shadow: 7px 7px 9px #5f5f5f80;
    border: 2px solid #5f5f5f80;
}

.jumbotron {
    box-shadow: 7px 7px 9px #23272A;
    background-color: #23272A;
}

button {
    box-shadow: 7px 7px 9px #2C2F33;
    transition: 1s;
}

button:hover {
    transform: translate(0px, -2px);
    transition: 1s;
}

.jumbotron {
    box-shadow: 7px 7px 9px #23272A;
}

.userinfo {
    display: flex;
}

.name {
    margin-left: 100px;
    margin-top: 30px;
}

.bio {
    margin-top: 10px;
    margin-right: 100px;
    font-size: 18px;
}

.social {
    display: grid;
    margin-left: 300px;
    grid-gap: 10px;
    grid-template-columns: auto auto auto auto;
}

.btn-github {
    background-color: #737373;
    color: #FFFFFF;
}

.btn-github:hover {
    background-color: #595959;
    color: #FFFFFF;
}

.btn-twitter {
    background-color: #49A1F3;
    color: #FFFFFF;
}

.btn-twitter:hover {
    background-color: #0e76d7;
    color: #FFFFFF;
}

.btn-discord {
    background-color: #7289DA;
    color: #FFFFFF;
}

.btn-discord:hover {
    background-color: #4b62b4;
    color: #FFFFFF;
}

.badge-blurple {
    background-color: #7289DA;
    color: #FFFFFF;
    font-size: 18px;
    letter-spacing: 0.1em;
}
</style>
