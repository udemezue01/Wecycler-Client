<template>
  <div class="bg-gray-300 ">
   

   			<!-- The navigational Bar Section -->

   	
   		

		<nav class="sticky top-0 flex justify-between bg-white px-6 py-4 ">
			
			<div class="flex">
				<img src="/img/logo.svg" class="h-8 w-24"> 

			</div>

			<div>
				<a href="">
  </a>
				<a href="">  </a>
				<a href="" class="sans-serif font-semibold"> Logout</a>
				
			</div>

		</nav>

				<!-- End of the navigational bar section -->

				<!-- The dashboard section -->

		<div class="flex min-h-screen">

						<!-- The first flex -->

			<div class="bg-gray-800 w-1/6 overflow-auto h-screen">
				
				<div class="mt-0 ">
				<a class = "block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-white w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>

						<span class="px-2 font-semibold text-gray-100"> Performance</span>

						</span>
						
					
					</a>

					<a class ="block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700" v-on:click.prevent = "component = 'material' "> 

						<span class="inline-flex">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-white w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>


						<span class="px-2 font-semibold text-gray-100"> Material</span>

						</span>
				
					
					
					</a>

					<a class = "block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class=" stroke-current text-white w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
						<span class="px-2 font-semibold text-gray-100"> Pickups</span>

						</span>
						<!-- <span class="font-semibold text-white inline-block">+ 3</span> -->
					
					
					</a>


					<a  class = "block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-white w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>

						<span class="px-2 font-semibold text-gray-100"> Users</span>

						</span>
						
					
					
					</a>


					<a class = "block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-white w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>

						<span class="px-2 font-semibold text-gray-100"> Households</span>

						</span>
					
					
					
					</a>


					<a class = "block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-white w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>

						<span class="px-2 font-semibold text-gray-100"> Locations</span>

						</span>
				
					
					
					</a>

					<a class = "block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 	
						<span class="inline-flex">

						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-white w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

						<span class="px-2 font-semibold text-gray-100"> Redemption</span>

						</span>
				
					
					
					</a>

					<a class = "block px-6 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 
					<span class="inline-flex">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="strok-current text-white w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>

						<span class="px-2 font-semibold text-gray-100 mx-auto" v-on:click.prevent= "logout"> Logout</span>

						</span>
				
					
					
					</a>

		


				</div>

			</div>
						<!-- End of the first Flex -->

						<!-- The second Flex -->

			<div class="w-5/6 overflow-auto h-screen">

				<keep-alive>
				
				<component v-bind:is="component"></component>

			</keep-alive>

			</div>
						<!-- End of the second flex -->

		</div>

			<!-- End of the dashboard section -->


  </div>



</template>



<script>

import Material from '../components/Material.vue'



export default{


components:{

	'material': Material,




},


data(){
	return{

		component:'material'

	}
},

methods:{

	logout(){

		localStorage.removeItem('token')

		this.$router.push('/')
	}
}

}


	

</script>