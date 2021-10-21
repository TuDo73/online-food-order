<template>
  <div class="login" v-if="!isLogin">
    <div>
      <span>LOGIN</span>
      <div>
        <input type="password" @keyup.enter="login" v-model="password" />
      </div>
      <button @click="login">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  data() {
    return {
      isLogin: false,
      password: "",
    };
  },

  computed: {},

  components: {},

  methods: {
    login() {
      if (this.password == "123qwe") {
        this.isLogin = true;
      }
    },
  },

  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  background: white;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  text-align: center;
  font-weight: bold;
  color: black;

  span {
    margin-bottom: 5px;
    display: block;
  }

  & > div {
    margin-top: 200px;
    font-size: 25px;
  }

  button {
    margin-top: 20px;
    font-size: 20px;
  }
}
</style>
