<template>
<b-card
    :title="name"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 h-100"
>
    <!-- <b-card-text v-html="description">
        {{ description }}
    </b-card-text> -->
    <component :is="description" />

    <!--  -->
    <template v-slot:footer>
        <!-- <h5>
            <h6>Made with</h6>
            <b-badge v-for="badge in badges" v-bind:key="badge" :style="{ backgroundColor: badge.color }">
                {{ badge.name }}
            </b-badge>
        </h5>
        <hr>-->
        <a :href="`https://github.com/${github.owner}/${github.repo}`" target="_blank">
            <b-button variant="primary">
                Open on Github
            </b-button>
        </a>
        <a :href="`https://github.com/${github.owner}/${github.repo}`" target="_blank">
            <b-button variant="warning">
                <b-spinner small v-if="fetching"></b-spinner>
                <template v-if="!fetching">{{ stars }}</template>
                <font-awesome-icon icon="star" />
            </b-button>
        </a>
    </template>
</b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface GithubData {
    owner: string;
    repo: string;
}

@Component
export default class HelloWorld extends Vue {
    @Prop() private name!: string;
    @Prop() private img!: string;
    @Prop() private description!: object;
    @Prop() private badges!: object;
    @Prop() private github!: GithubData;
    public fetching = true;
    public stars = 0;

    mounted () {
        setTimeout(() => {
            this.$http
                .get(`${this.github.owner}/${this.github.repo}`)
                .then((response) => {
                    this.stars = response.data.stargazers_count
                    this.fetching = false
                })
        }, (2000))
    }
}
</script>

<style>
svg {
    margin-left: 10px;
}

h6 {
    color: white;
}

.card {
    background-color: #23272A;
}

.card-title {
    color: white;
}

.card-img-top {
    height: 170px;
}

.desc {
    color: #99AAB5;
}

.vue {
    background-color: #41B883;
}

.blockly {
    background-color: #4285f4;
}

.node {
    background-color: #3C873A;
}

.discord {
    background-color: #7289DA;
}

.mongo {
    background-color: #3FA037;
}

.btn {
    margin-right: 7px;
}
</style>
