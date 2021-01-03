<template>
 <b-container class="bv-example-row">
    <b-row>
      <b-col>
          <div class="container">
   
     <div class="item"><img :src="post.image" class="img-thumbnail"></div>
    <div class="row">
	    <div class="col-sm-4">
	        <div class="item"><img :src="post.image" class="img-thumbnail"></div>
		    
	    </div>
	    <div class="col-sm-4">
		    <div class="item"><img :src="post.image" class="img-thumbnail"></div>
	    </div>
	    <div class="col-sm-4">
		    <div class="item"><img :src="post.image" class="img-thumbnail"></div>
	    </div>
    </div>
          </div>

      </b-col>
      <b-col
        ><h2 class='text-left'>
         {{post.title}}
        </h2>
        <p class="text-left" style="font-family:sans-serif; color: #999999;"> Paylaş</p> 
         <p class="text-left" style="color:#8abf44;font-size: 33px;     font-family: sans-serif;"> <b>{{post.price}} <b-img  height="20px" src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg"></b-img> </b>
    
       
         </p>
             <p class="text-left" style="font-family:sans-serif; color: #999999;"> Vergi hariç</p> 
              <p class="text-left" style="font-family:sans-serif; color: #333333;    font-weight: 300;"> {{post.definition}}</p> 
                 <hr style="width:100%;text-align:left;margin-left:0">
              <p class="text-left" style="font-family:sans-serif; color: #999999;"> Adet</p> 
              <div style="position:relative;left:80px ;top:-50px">
             <div class="col-4">
            <b-input-group>
              <div class="count-container d-flex flex-row justify-content-end mr-3">
      <button @click="num--" class="btn btn-sm btn-outline-danger rounded-0">-</button>
      <input disabled type="text"
             class="form-control form-control-sm w-25  text-center rounded-0 border-left-0 border-right-0"
             v-model="num">
      <button @click="num++" class="btn btn-sm btn-outline-success rounded-0">+</button>
    </div>
            </b-input-group>
          </div>
              </div>
              <div>
     <b-button id="show-btn" @click="addProduct()" >Sepete Ekle</b-button> 
    
      </div>
     
 <div style="font-size: 3rem;position:relative;left:200px;top:-50px"
>
    <b-icon icon="suit-heart-fill" class="border rounded p-2"></b-icon>
    <b-icon icon="arrow-repeat" class="border rounded p-2"></b-icon>
    <b-icon icon="slash-circle" variant="warning"></b-icon>
 </div>   
 
        <div style=" box-shadow: 10px 10px 5px whitesmoke;">
          <b-card >
                       <p class="text-left">   <b-icon icon="shield-fill-check"></b-icon> 256 Bit Güvenli Alışveriş</p>
                </b-card>
                <b-card>
                     <p class="text-left">   <b-icon icon="minecart-loaded"></b-icon>Hızlı Teslimat</p>
                </b-card>
                <b-card>
                     <p class="text-left">   <b-icon icon="arrow-left-right"></b-icon>Değişim ve İade Seçeneği</p>
                </b-card>
        </div>
              
        </b-col
      >
    </b-row>
  </b-container>


</template>
<script>
export default {
   props: {
            post: {
                type: Object,
                required: true
            }
        },
        data () {
    return {
    
      num: 1
    }
  },
  methods: {
    addProduct () {
      localStorage.itemCount = this.num
      localStorage.item = JSON.stringify(this.post)
      this.itemCount = localStorage.itemCount
      location.reload()
    }
  }

}
</script>
