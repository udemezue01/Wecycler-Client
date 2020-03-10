<template>
  <div class="bg-gray-300 ">
   

   			<!-- The navigational Bar Section -->

   	
   		

		<nav class="sticky top-0 flex justify-between bg-white px-12 py-4 shadow-md ">
			
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

			<div class="bg-gray-800 w-1/6">
				
				<div class="mt-0 ">
				<a href="" class = "block px-12 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg class="h-5 w-5 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 3.05493C6.50005 3.55238 3 7.36745 3 12C3 16.9706 7.02944 21 12 21C16.6326 21 20.4476 17.5 20.9451 13H11V3.05493Z" stroke="#f7fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M20.4878 9H15V3.5123C17.5572 4.41613 19.5839 6.44285 20.4878 9Z" stroke="#f7fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

						<span class="px-2 font-semibold text-gray-100"> Performance</span>

						</span>
						
					
					</a>
					<a href="" class = "block px-12 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg class = "h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#f7fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>  
						</svg>

						<span class="px-2 font-semibold text-gray-100"> Material</span>

						</span>
				
					
					
					</a>

					<a href="" class = "block px-12 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4" stroke="#f7fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						<span class="px-2 font-semibold text-gray-100"> Pickups</span>

						</span>
						<span class="font-semibold text-white inline-block">+ 3</span>
					
					
					</a>
					<a href="" class = "block px-12 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="#f7fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

						<span class="px-2 font-semibold text-gray-100"> Profile</span>

						</span>
						<span class="font-semibold text-white inline-block">+ 3</span>
					
					
					</a>
					<a href="" class = "block px-12 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
						<svg class = "h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#f7fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>  
						</svg>

						<span class="px-2 font-semibold text-gray-100"> Households</span>

						</span>
					
					
					
					</a>
					<a href="" class = "block px-12 py-2 rounded-lg flex items-center justify-between hover:bg-gray-700"> 

						<span class="inline-flex">
					<svg class = "h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#f7fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

						<span class="px-2 font-semibold text-gray-100"> Locations</span>

						</span>
				
					
					
					</a>
					<a href="" class="block text-gray-100 px-12 py-2 font-semibold rounded-lg hover:bg-gray-700">  Recycle</a>
					<a href="" class="block text-gray-100 px-12 py-2 font-semibold rounded-lg hover:bg-gray-700">  Users</a>
					<a href="" class="block text-gray-100 px-12 py-2 font-semibold rounded-lg hover:bg-gray-700">  Logout</a>


				</div>

			</div>
						<!-- End of the first Flex -->

						<!-- The second Flex -->

			<div class="w-5/6">
				

			</div>
						<!-- End of the second flex -->

		</div>

			<!-- End of the dashboard section -->


  </div>



</template>



<script >
	

</script>