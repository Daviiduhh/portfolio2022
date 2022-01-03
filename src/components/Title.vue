<template>
    <div class="title">
        <h1 class="title__h1" v-text="title"></h1>
        <h4 class="title__h4" v-text="subtitle"></h4>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String
    },
    data() {
        return {

        };
    }
}
</script>

<style lang="scss">
    .title {
        text-align: left;
        margin: 20px;
        
        &__h1,
        &__h4 {
            margin: 0;
        }

        &__h1 {
            margin-bottom: 10px;
        }

        &__h4 {
            font-weight: 300;
            color: #646464;
        }
    }
</style>