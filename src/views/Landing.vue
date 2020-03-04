<template>
  <div class="">

        <!-- The navigational Bar -->

    <nav class="flex justify-between bg-white px-2 py-4 shadow-sm sticky top-0">
      <div class="px-4">
        <img src=" ./img/logo.svg" class="h-8 w-64">
        
      </div>

      <div class="px-4">
        
        <router-link to = "/login"class="px-2 py-1 inline-block bg-green-100 text-white rounded-lg text-sm font-semibold shadow-sm uppercase font-mono"> Get Started</router-link>
      </div>
      

    </nav>

         <!--  End of the navigational Bar -->

         <!-- The Hero section -->

         <div class="flex h-full">

          <div class="w-1/2 bg-gray-100">

            <div class="mx-auto py-3">
              
              <p class="font-sans font-black text-4xl text-center text-indigo-700"> Relive the Environment</p>
            </div>
            
          </div>
           
          <div class="w-1/2">
            
            <img src="/img/Wecyclerone.jpg" class="inset-0 h-full w-full object-cover object-center">

          </div>

         </div>

      
            <!--   End of the Hero Section -->

            <section class="bg-gray-300 px-12 h-64">

              <div class="px-4">  <p class="font-black">  Our Vision </p></div>

              <div class="flex">

                <div class="w-1/2">
                  
                    <img src="/img/Wecyclerone.jpg" class="inset-0 h-8 w-full object-cover object-center">
                </div>


                <div class="w-1/2">
                  
                      <div class="">
                        

                      </div>

                </div>
                

              </div>
              

            </section>


  
  </div>
</template>

<script>


export default {
  name: 'Landing',
 
}
</script>
