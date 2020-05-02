<template>
    <div class="home">
        <br/><br/><br/><br/><br/>
        <UserCard/>
        <br/><br/><br/><br/><br/>
        <h1 class="title">🔥 Current projects</h1>
        <br/>
        <h5>My best projects which I'm still working on!</h5>
        <br/><br/>
        <b-container class="bv-example-row">
            <b-row>
                <b-col v-for="(project, i) in projects" v-bind:key="`${i}-${project.name}`">
                    <ProjectCard :name="project.name" :img="project.img" :badges="project.badges" :description="project.description" :github="project.github" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import UserCard from '@/components/UserCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'

import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
        UserCard,
        ProjectCard
    }
})

export default class Home extends Vue {
    public projects: object[] = [
        {
            name: 'Scratch For Discord',
            img: require('@/assets/scratch4discord.png'),
            description: {
                template: '<div class="desc">Website that allows you to make your own Discord bot with... blocks! You can create a simple bot in less than 5 minutes, with no coding knowledge. You can even run the bot and test it on the website. Made with <b-badge class="vue">Vue.js</b-badge> and <b-badge class="blockly">Blockly</b-badge> !</div>'
            },
            github: {
                owner: 'Androz2091',
                repo: 'scratch-for-discord'
            }
        },
        {
            name: 'AtlantaBot',
            img: require('@/assets/atlantabot.png'),
            description: {
                template: '<div class="desc">Complete Discord bot with moderation, music, fun (and more) commands! It has a web dashboard made using EJS. It uses <b-badge class="mongo">Mongo</b-badge> to store server settings. Made with <b-badge class="node">Node.js</b-badge> and <b-badge class="discord">Discord.js</b-badge> !</div>'
            },
            github: {
                owner: 'Androz2091',
                repo: 'AtlantaBot'
            }
        },
        {
            name: 'PronoteBot',
            img: require('@/assets/pronotebot.png'),
            description: {
                template: '<div class="desc">PronoteBot is a chatbot that notifies students on Instagram when a new homework is added on Pronote! A small project at the beginning that quickly became a big one, with more than 50 students connected! Made with <b-badge class="node">Node.js</b-badge> !</div>'
            },
            github: {
                owner: 'Androz2091',
                repo: 'pronote-bot'
            }
        }
    ]
}
</script>

<style scoped>
h3 {
    text-align: center;
    color: white;
}

.title {
    text-align: center;
    color: white;
}
</style>
