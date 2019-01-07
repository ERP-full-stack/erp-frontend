<template>
    <div>
      <full-calendar :events="fcEvents" locale="en"></full-calendar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fcEvents: [
        {
          title: 'Sunny Out of Office',
          start: '2016-08-25',
          end: '2017-07-27',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
