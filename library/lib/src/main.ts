import {Plugin} from 'vue';
import HelloWorld from "@/components/HelloWorld.vue";
import {mountMixin} from "@/mixins/mountMixin";

export const VueBugPlugin: Plugin = {
    install(vue) {
        console.log('Installing VueBugPlugin');

        vue.component('HelloWorld', HelloWorld);

        vue.mixin(mountMixin);
    },
};
