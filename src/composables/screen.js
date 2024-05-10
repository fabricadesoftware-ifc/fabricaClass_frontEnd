import {
    defineAsyncComponent,
    ref,
    onMounted,
    onUnmounted,
    shallowRef,
} from 'vue';

export function useScreen() {
    const breakpoint = ref('sm');
    const menu = shallowRef(defineAsyncComponent(() => import ('../components/templates/large/LargeHeaderComp.vue')));

    const updateBreakpoint = () => {
        const width = window.innerWidth;
        if (width < 750) {
            breakpoint.value = 'xs';
            menu.value = defineAsyncComponent(() => import ('../components/templates/small/SmallHeaderComp.vue'));
        } else {
            breakpoint.value = 'sm';
            menu.value = defineAsyncComponent(() => import ('../components/templates/large/LargeHeaderComp.vue'));
        }
     }
    
     onMounted(() => {
        updateBreakpoint();
        window.addEventListener('resize', updateBreakpoint);
     });

     onUnmounted(() => {
        window.removeEventListener('resize', updateBreakpoint);
     });

     return {
        breakpoint,
        menu,
     };
}