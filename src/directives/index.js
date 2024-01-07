import { useIntersectionObserver } from "@vueuse/core";

// 定義懶加載插件
export const lazyLoadPlugin = {
  install(app) {
    // 定義全局自定義指令
    app.directive("img-lazy", {
      mounted(element, binding) {
        // console.log(element, binding);
        const { stop } = useIntersectionObserver(
          element,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting);
            if (isIntersecting) {
              element.src = binding.value;
              stop();
            }
          }
        );
      },
    });
  },
};
