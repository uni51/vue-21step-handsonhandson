<template>
  <div>
    <v-text-field v-model="computedFooValue" v-bind="$attrs" />
    <v-btn @click="click">click!</v-btn>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
} from '@vue/composition-api';
import MixinExample from '@/mixins/mixin-example';

export default defineComponent({
  mixins: [MixinExample],
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    console.log('子コンポーネント: created');
    const state = reactive({
      computedFooValue: computed({
        get: () => {
          return props.value.foo;
        },
        set: value => {
          context.emit('input', {
            foo: value,
            bar: props.value.bar,
          });
        },
      }),
    });
    const click = () => {
      context.emit('custom-event', 100);
    };

    return {
      ...toRefs(state),
      click,
    };
  },
});
</script>
