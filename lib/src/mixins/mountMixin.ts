import {ComponentOptions} from '@vue/runtime-core';

export const mountMixin: ComponentOptions = {
    mounted(): void {
        console.log('Component has been mounted')
    },
};
