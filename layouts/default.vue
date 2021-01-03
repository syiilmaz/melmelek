<template>
 <b-container>
   <b-col></b-col>
   <b-col cols="12">
  <div>
    <TopHeader />
     <b-img center src="https://melimelek.com.tr/img/melimelek-logo-1576920469.jpg"  fluid alt="Responsive image"></b-img> 
     <hr>
    <Navbar />
      <hr>
    <nuxt/>
  </div>

   </b-col>
 </b-container>
</template>
<script>
  import TopHeader from "@/components/common/TopHeader"
  import Navbar from "@/components/common/Navbar"

  export default {
    components : {
      TopHeader,
      Navbar,
    
    }
  }
</script>

