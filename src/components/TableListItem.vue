<template>
    <div class="table-item" :class="active ? 'table-item--active' : ''">
        <font-awesome-icon :icon="['fas', 'table']" />
        <h4 class="table-item__name" v-text="name"></h4>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        selector: String,
        active: Boolean
    },
    data() {
        return {

        };
    }
}
</script>

<style lang="scss">
.table-item {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;

    cursor: pointer;
    transition: border 0.5s, color 0.5s;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &:hover {
        color: #04aa6d;
        background-color: #f9f9f9;
    }

    &__name {
        margin: 0;
        font-weight: 300;
    }
}

.table-item--active {
    color: #04aa6dd2 !important;
}
</style>