<template>

 <div class="card mr-4 mb-4 " >
        <div class="card-body">
           <div 
           > <img :src ="post.image" class="img-fluid" /> </div>
            <h5 class="card-title"> {{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted"> {{ post.price }}</h6>
                   <b-button-toolbar >
      <b-button-group >
       <b-button    id="show-btn" @click="$bvModal.show('bv-modal-example')" variant="secondary" style="border-color:black;" >
        <b-icon icon="minecart-loaded" aria-hidden="true"></b-icon>
         
        </b-button>
         <b-modal id="bv-modal-example" hide-footer>
   
    <div class="d-block text-center" style="background-color: #8abf44;" >
      <h4 style="color:white;font-family:sans-serif;"> 
    {{post.title}} sepete eklendi.</h4>
    </div>
    
  </b-modal>
      
        
        <b-button  @click.prevent="$router.push('/posts/' + post.id)" variant="light" style="border-color:black;">
          <b-icon  style="color:black" icon="filter-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button  variant="light" style="border-color:black;">
          <b-icon icon="heart" aria-hidden="true"></b-icon>
        </b-button>
        <b-button variant="light" style="border-color:black;">
         <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
       
        </b-button>
      </b-button-group>
        </b-button-toolbar>
    
           
        </div>
    </div>

 

</template>
<script>


export default {
  props: {
            post: {
                required: true,
                type : Object
            }
        },
  
 
};
</script>

<style>

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
 
}
.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>