<template>
  <div id="orderType">
    <div v-if="orderTypeDataArray.length>0" />
    <div
      v-else
      class="noDataPlaceHold"
    >
      <img
        src="/common/no-data.jpeg"
        alt=""
      >
      <span class="desc">{{ $t('mine.feedbackTip') }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  components: {
  },
  props: {
    orderTypeDataArray: Array
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#orderType {
  margin-top: 5rem;
  height: 20rem;
  background: #f6f6f6;
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .desc {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .noData {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
