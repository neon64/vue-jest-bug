<template>
    <div>
        <div
            v-for="[id,value] of items.entries()"
            :key="id"
        >
            {{value}}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BuggyComponent",
    data() {
        return {
            items: new Map()
        };
    }
});
</script>
