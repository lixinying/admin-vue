<template><div id='login'>
  <div>
    <label>User Name</label>
    <b-form-input v-model="name"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
  </div>
  <div>
    <label>Password</label>
    <b-form-input v-model="password"
                  type="password"
                  placeholder="Enter your password"></b-form-input>
  </div>
  <b-button variant="success" v-on:click="login" >Login</b-button>
</div>
</template>
<script>

export default {
  methods: {
    login: function () {
      this.$ajax({
        method: 'post',
        url: 'BackendLogin/login_validation',
        data: {
          name: this.name,
          password: this.password
        },
      })

        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style>

  #login{
    width:60%;
    margin:0 auto;
  }
</style>
