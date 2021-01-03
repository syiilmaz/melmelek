<template>
 <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators 
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
       
        img-src="https://melimelek.com.tr/themes/leo_cool_stuff/assets/img/modules/leoslideshow/2020.jpg"
      >
      <p class="text-left" style="font-size: 42px;
    color: grey;  font-family: sans-serif;  opacity: 1;"> <small>#Yeni Modeller</small></p>
         <p class="text-left" style="font-size: 42px;
    color: rgb(0, 0, 0);  font-family: sans-serif;  opacity: 1;">2020 Ajanda Modeli</p>
          <p class="text-left" style="font-size: 24px;
    color: rgb(0, 0, 0)"><b>34,90 TL HEMEN AL!</b></p>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://melimelek.com.tr/themes/leo_cool_stuff/assets/img/modules/leoslideshow/2020.jpg">
       <p class="text-left" style="font-size: 42px;
    color: grey;  font-family: sans-serif;  opacity: 1;"> <small>#Yeni Modeller</small></p>
      <p class="text-left" style="font-size: 42px;
    color: rgb(0, 0, 0) ;opacity: 1;">2020 Ajanda Modeli</p>
          <p class="text-left" style="font-size: 24px;
    color: rgb(0, 0, 0)"><b>34,90 TL HEMEN AL!</b></p>
      </b-carousel-slide>

      
      
    </b-carousel>


</template>

<script>
export default {


}
</script>


<style>

</style>