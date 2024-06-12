import { defineAsyncComponent, onMounted, onUnmounted, shallowRef } from 'vue';

export function useLayout() {
  const layout = shallowRef();

  const updateLayout = () => {
    const width = window.innerWidth;
    if (width < 750) {
      layout.value = defineAsyncComponent(() =>
        import('../layouts/LayoutSmall.vue'),
      );
    } else {
      layout.value = defineAsyncComponent(() =>
        import('../layouts/LayoutLarge.vue'),
      );
    }
  };

  onMounted(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout);
  });

  return { layout };
}