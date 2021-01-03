<template>
<div class="nav justify-content-center" style="font-family: sans-serif" >
  <b-navbar >
  <b-navbar-nav >
     
        <b-nav-item   style="font-size: 14px;
    text-transform: uppercase;
    color: #222;"> <b> <NuxtLink style="color:black"  to="/"> Anasayfa</NuxtLink> </b></b-nav-item > 
     
 
        <b-nav-item-dropdown   text="MODELLER" style="font-size: 14px;
    
    color:#17202A;font-weight:bold;" >
        <b-dropdown-item  href="#">  <NuxtLink style="color:black"  to="/Filter"> Melimelek Büyükler</NuxtLink> </b-dropdown-item>
          <b-dropdown-item   href="#">Melimelek Küçükler </b-dropdown-item>
          <b-dropdown-item  href="#">Melimelek Ajandalar </b-dropdown-item>
          <b-dropdown-item   href="#">Melimelek Planner</b-dropdown-item>
        </b-nav-item-dropdown>
 
          </b-navbar-nav>
          <b-navbar-nav> 
               <b-nav-item href="#" style="font-size: 14px;
    text-transform: uppercase;
    color: #222;"><b><NuxtLink style="color:black"  to="/"> KAMPANYADAKİLER</NuxtLink></b></b-nav-item>
         <b-nav-item href="#" style="font-size: 14px;
    text-transform: uppercase;
    color: #222;"><b> <NuxtLink style="color:black"  to="/"> HAKKIMIZDA</NuxtLink></b></b-nav-item>
          </b-navbar-nav>
            <b-navbar-nav >
                  <b-nav-item-dropdown style="font-size: 14px;

    color: #222;font-weight:bold;" text="E-TİCARET" >
          <b-dropdown-item href="#">Mesafeli Satış Sözleşmesi</b-dropdown-item>
          <b-dropdown-item href="#">İptal ve İade Koşulları </b-dropdown-item>
          <b-dropdown-item href="#">Gizlilik Koşulları </b-dropdown-item>
          <b-dropdown-item href="#">Banka Hesap Numaraları</b-dropdown-item>
        </b-nav-item-dropdown>

                
                 </b-navbar-nav>

        
        <b-navbar-nav>
        <b-nav-item href="#" style="font-size: 14px;
    text-transform: uppercase;
    color: #222;"><b><NuxtLink style="color:black"  to="/"> İLETİŞİM</NuxtLink></b></b-nav-item>
          </b-navbar-nav>
      
          

</b-navbar>
</div>
</template>

<script>

</script>

<style>

</style>