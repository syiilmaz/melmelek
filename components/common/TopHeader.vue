<template>

<div class="right" style="font-family: sans-serif"> 
  
  <b-navbar style="font-family:sans-serif; color: #999999;" >
   
       <b-nav-form>
        <b-form-input placeholder="Katalogda arama yapın">
        </b-form-input>
            <b-input-group-prepend is-text >
             <b-icon icon="search"></b-icon>
       </b-input-group-prepend >
       </b-nav-form>



   
          <b-navbar-nav class="ml-auto">
              <b-input-group-prepend >
             <b-icon   style="position:relative;
top:11px;" icon="person-fill"></b-icon>
       </b-input-group-prepend >
     <div v-b-hover="handleHover" >

       <b-nav-item-dropdown  class="isHovered" text="HESABIM" right style="color: #acaaa6;
    line-height: normal;
    background: #fff;
    font-weight: 300;
     font-size: 13px;webkit-tap-highlight-color: transparent;">
     
         <b-dropdown-item >  <NuxtLink style="color:black;" to="/login">Oturum Aç</NuxtLink>  </b-dropdown-item>
          <b-dropdown-item href="#">Hesabım </b-dropdown-item>
          <b-dropdown-item href="#">Ödeme </b-dropdown-item>
          <b-dropdown-item href="#">Takip Listesi</b-dropdown-item>
        </b-nav-item-dropdown>
     </div>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot-->
         <template v-slot:button-content>
          
         <b-icon icon="gear"></b-icon>
          
      
            <em style="color: #acaaa6;
    line-height: normal;
    background: #fff;
    font-weight: 300;
     font-size: 13px;webkit-tap-highlight-color: transparent;">AYARLAR</em>
          </template>
          <b-dropdown-item href="#">Dil</b-dropdown-item>
          <b-dropdown-item href="#">Para Birimi</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav>
          
                 <b-input-group-prepend >
             <b-icon style="position:relative;
top:11px;" icon="cart-fill"></b-icon>
       </b-input-group-prepend >
        <b-nav-item style="color: #acaaa6;
    line-height: normal;
    background: #fff;
    font-weight: 300;
     font-size: 13px;webkit-tap-highlight-color: transparent;" ><NuxtLink to="/cart"  style="color: #acaaa6;"> SEPETİM</NuxtLink> </b-nav-item>
         <b-input-group-prepend >
          <b-icon style="position:relative;
top:11px;" icon="square" > </b-icon>
<p  style="position:relative;
top:8px;left:-11px">{{itemCount}} </p>
           </b-input-group-prepend >
        </b-navbar-nav>
</b-navbar-nav>  
  </b-navbar>
</div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default {
 data () {
    return {
      post: {
       
      },
      itemCount: 0
    }
  },
  mounted () {
    if(!localStorage.getItem('itemCount')) {
      this.itemCount = 0
      localStorage.itemCount = 0
    } else {
      this.itemCount = localStorage.itemCount
    }
  }

 
}
</script>

<style>

</style>