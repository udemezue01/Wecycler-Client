<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-12 w-auto" src="/img/logo.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-700">
       Administration
      </h2>
     
    </div>
    <form class="mt-8" action="">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-md">
        <div>
          <input aria-label="Email address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" v-model="login.email"/>
        </div>
        <div class="-mt-px">
          <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" v-model = "login.password" />
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm leading-5">
          <a href="#" class="font-bold text-gray-700-100 hover:text-gray-700 focus:outline-none focus:underline transition ease-in-out duration-150">
            Forgot your password?
          </a>
        </div>
      </div>

      <div class="mt-6">
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-100 font-bold hover:bg-green-100 focus:outline-none focus:border-green-100 focus:shadow-outline-indigo active:bg-green-100 transition duration-150 ease-in-out" v-on:click.prevent = "userLogin">
          <span class="absolute left-0 inset-y pl-3">
            <svg class="h-5 w-5 text-white group-hover:text-green-100 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>

import { USER_LOGIN } from '../constant/mutation.js'


export default {
  name: 'Login',
  data(){
    return{

      login:{

        email:"",
        password:""
      }


    }
  },



  methods:{
    userLogin(){

      this.$apollo.mutate({

        mutation: USER_LOGIN,
        
        variables:{
          email:this.login.email,
          password:this.login.password
        }
      }).then(resp => {

        const token  = resp.data.tokenAuth.token

        localStorage.setItem('token', token)

        this.$router.push('/dashboard')



      }).catch(err => {
        localStorage.removeItem('token')
      })
    }


  },

 
}
</script>
