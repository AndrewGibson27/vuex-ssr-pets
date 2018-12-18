<template>
  <h1>Page Not Found</h1>
</template>

<script>
const WAIT_INTERVAL = 3000

export default {
  name: 'NotFound',

  mounted () {
    setTimeout(() => {
      // redirect to actual 404 page
      // with proper status code
    }, WAIT_INTERVAL)
  }
}
</script>
