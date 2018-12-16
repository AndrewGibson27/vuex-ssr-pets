<template>
  <select
    :name="name"
    @change="onChange"
  >
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.value"
      :selected="option.value === value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectInput',

  props: {
    name: {
      type: String,
      required: true
    },

    options: {
      type: Array,
      required: true
    },

    value: {
      type: String,
      required: true
    }
  },

  methods: {
    onChange ({ target: { value } }) {
      this.$emit('callback', this.name, value)
    }
  }
}
</script>
