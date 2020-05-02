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
        <b-button href="#" variant="primary">Open on Github</b-button>
        <b-button href="#" variant="warning" disabled>80 stars</b-button>
    </template>
</b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
    @Prop() private name!: string;
    @Prop() private img!: string;
    @Prop() private description!: object;
    @Prop() private badges!: object;
}
</script>

<style>
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
