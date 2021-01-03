<template>
 <div class="container my-2" v-if="hasItem">
  <b-container class="bv-example-row">
    <b-row style=" font-family: sans-serif;">
   <b-col cols="8">
   <b-card   class="text-center">
        <p class="text-left">Alışveriş Sepeti</p>
        <hr style="width:100%;text-align:left;margin-left:0">
        <b-card-text></b-card-text>
        <b-form-group>
        
   <b-img left :src="basketItem.image" style="height:100px"></b-img>

  <p class="text-left"> <b>  {{ basketItem.title }}</b></p>
   <p class="text-left" style="color:red"> <b>{{ basketItem.price  }}<b-img src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg" style="height:10px" ></b-img> </b> </p>
 <p class="text-right"  style="position:relative;
left:-20px;
top:-40px;"> <b>{{ basketItem.price*itemCount }} <b-img src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg" style="height:10px" ></b-img>  </b> <b-icon icon="trash-fill"></b-icon></p> 
 <div style="position:relative;
left:80px;
top:-80px;">
   
 <div style="position:relative;left:200px ;top:-20px">
             <div class="col-4">
            <b-input-group>
              <b-input-group-prepend>
                <b-btn variant="outline-info" @click="itemCount--">-</b-btn>
              </b-input-group-prepend>
              <b-form-input type="number" min="0" v-model="itemCount" class="text-center"></b-form-input>
              <b-input-group-append>
                <b-btn variant="outline-secondary" @click="itemCount++">+</b-btn>
              </b-input-group-append>
            </b-input-group>
          </div>
              </div>

 </div>
 
        </b-form-group>
      </b-card>
      <div style="position:relative;
left:0px;
top:50px;">
        <b-button  variant="danger"><b>ALIŞVERİŞE DEVAM ET </b></b-button>
       
      </div>
   </b-col>
      <b-col cols="4"> 
               <b-card>
                           <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="5"
        label-cols-lg="5"
     
        label-for="input-horizontal"
      >    <p style="position :relative ;left:-100px ;top:40px"> {{itemCount}} öge </p>
       <p class="text-right">
         {{ basketItem.price*itemCount }} <b-img src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg" style="height:10px" ></b-img></p>
      </b-form-group>
                    
            <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="5"
        label-cols-lg="5"
        label="Kargolama"
      
        label-for="input-horizontal"
      >   <p class="text-right">8,00 <b-img src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg" style="height:10px" ></b-img></p>
      </b-form-group>
                </b-card>
                <b-card>
                                  <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="6"
        label-cols-lg="6"
        label="Toplam(Vergiler Hariç)"
      
        label-for="input-horizontal"
      >   <p class="text-right">{{(basketItem.price*itemCount) +8 }}  <b-img src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg" style="height:10px" ></b-img></p>
      </b-form-group>
                    
            <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="5"
        label-cols-lg="5"
        label="Vergiler"
      
        label-for="input-horizontal"
      >   <p class="text-right">0,00 <b-img src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg" style="height:10px" ></b-img></p>
      </b-form-group>
                </b-card>
                <b-card>
                      <b-button variant="danger"> Ödeme adımına geçin </b-button>
                </b-card>
            
      </b-col>
    </b-row>
  </b-container>
 </div>
</template>

<script>
export default {
     data () {
    return {
      hasItem: false,
      itemCount: 0,
      basketItem: null
    }
  },
  mounted () {
    if (localStorage.getItem('itemCount')) {
      this.hasItem = true
      this.itemCount = localStorage.getItem('itemCount')
      this.basketItem = JSON.parse(localStorage.getItem('item'))
    }
  }
}

</script>

