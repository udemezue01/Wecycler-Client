import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueApollo from 'vue-apollo'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false




// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graph/'
})


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
     
    },
    
  }
});


Vue.use(VueApollo)


// Cache implementation
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})



new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
