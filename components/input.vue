<template>
<label class="gl-input-label">
  <div :class="wrapperClasses">
    <span class="gl-input-text">
      {{currentText}}
      <slot v-if="!currentText"></slot>
    </span>
    <div :class="boxClasses">
      <input class="gl-input" :placeholder="placeholder" :type="type" v-model="currentValue" maxlength="max"/>
    </div>
  </div>
  <div class="gl-input-notice px-3 pt-2" v-if="msg && warning">
    {{msg}}
  </div>
</label>
</template>

<script>
export default {
  name: 'gl-input',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    check: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      defualt: ''
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 9999999
    },
    placeholder: {
      type: String,
      default: ''
    },
    showError: {
      type: [String, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      currentText: this.text,
      warning: false,
      msg: this.errorMsg
    }
  },
  computed: {
    wrapperClasses() {
      let hasText = !(this.$slots.default || this.currentText)
      return {
        'gl-input-wrapper': true,
        'gl-input-withText': hasText
      }
    },
    boxClasses() {
      return {
        'gl-input-box': true,
        'gl-input-warning': this.warning
      }
    }
  },
  methods: {
    checkType(value) {
      let methodStr = this.check ? 'check' + this.check.charAt(0).toUpperCase() + this.check.substr(1) : 'checkText'
      if (this.value.length < this.min * 1) {
        this.warning = true
        this.msg = '请不要小于' + this.min + '个字符'
        return false
      }
      this.warning = false
      this.msg = this.errorMsg
      this[methodStr] && this[methodStr](value)
    },
    checkEmail(text) {
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      this.warning = !reg.test(text)
    }
  },
  watch: {
    showError() {
      this.warning = this.showError === 'false' ? false : !!this.showError
    },
    value() {
      this.currentValue = this.value
    },
    currentValue() {
      this.$emit('input', this.currentValue)
      this.checkType(this.currentValue)
    }
  }
}
</script>

<style scoped>
.gl-input-label{
  position: relative;
  height: auto;
}

.gl-input-wrapper{
  position: relative;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}

.gl-input-text{
  position: relative;
  height: auto;
  box-sizing: border-box;
  padding: 0px 18px 0px 0px;
  font-size: 14px;
}

.gl-input-box{
  position: relative;
  height: auto;
  border: 1px solid #7f828b;
  box-sizing: border-box;
  flex: 1;
  border-radius: 3px;
}

.gl-input-warning{
  border-color: #ff253a;
}

.gl-input{
  position: relative;
  height: auto;
  display: block;
  width: 100%;
  outline: none;
  padding: 4px 0px;
  border-radius: 3px;
  text-indent: 14px;
  font-size: 14px;
}

.gl-input-notice{
  position: relative;
  height: auto;
  text-align: right;
  color: #ff253a;
  font-weight: 700;
  font-size: 14px;
}
</style>
