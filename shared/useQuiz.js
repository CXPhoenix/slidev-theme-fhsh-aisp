import { useSlots, ref, computed } from "vue";

export function useQuiz() {
  const slots = useSlots();
  const question_page = ref([]);

  /**
   *
   * @param {Array | String} children
   * @param {import('@vueuse/core').Fn} filter Same as Array.filter
   * @returns {import('vue').Ref}
   */
  const getChildren = (children, filter = (child) => true) => {
    if (!(children instanceof Array)) {
      return children;
    }
    return children.map(child => getChildren(child.children))
  };

  /**
   *
   * @param {import("@vueuse/core").Fn} filter  Same as Array.filter
   * @returns {import("vue").Ref}
   */
  const getData = () => {
    const data = getChildren(slots.default?.()[0].children);
    return data;
  };

  return {
    getData
  }
}
