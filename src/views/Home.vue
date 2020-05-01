<template>
    <div class="home">
        <br/><br/><br/><br/><br/>
        <UserCard/>
    </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'

export default {
    name: 'Home',
    components: {
        UserCard
    }
}
</script>
