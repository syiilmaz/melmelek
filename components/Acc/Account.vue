<template>
  <b-container class="bv-example-row">
    <b-row style=" font-family: sans-serif; color :#999999">
      <b-col cols="8">
        <b-card-group deck>
        <b-card style=" box-shadow: 10px 10px 5px whitesmoke;">
        <p class="text-left"><b>1 KİŞİSEL BİLGİLER</b></p>

        <div>
          <b-link  style=" font-family: sans-serif; color :#999999" href="#foo">Misafir olarak sipariş ver |</b-link>
          <b-link   style=" font-family: sans-serif; color :#999999" href="#foo">Oturum Aç</b-link>
        </div>

        <div>
          <p  style="position:relative;top:20px" class="text-left">Sosyal Unvan</p>
        <div style="position:relative;left:200px;top:-20px"> 
          <b-form-radio-group
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </div>
        </div>
        <div>
          <div>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Ad"
              label-for="input-horizontal"
            >
              <b-form-input   style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" id="input-horizontal"></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Soyad"
              label-for="input-horizontal"
            >
              <b-form-input  style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" id="input-horizontal"></b-form-input>
            </b-form-group>

            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              label="E posta"
              label-for="input-horizontal"
            >
              <b-form-input  style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" id="input-horizontal"></b-form-input>
            </b-form-group>
            <p class="text-left"><b>Hesap Oluştur</b>(isteğe bağlı)</p>
            <p class="text-left">Ve sonraki siparişinizde zaman kazanın!</p>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Parola"
              label-for="input-horizontal"
            >
                 <b-input-group>
          <b-form-input  style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" type="password" min="0.00"></b-form-input>

    <b-input-group-append>
       <b-button variant="secondary">Göster</b-button>
    </b-input-group-append>
        </b-input-group>
            </b-form-group>
            <b-form-group
            id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Doğum Tarihi"
              label-for="input-horizontal"
            >
              <div>
                <b-form-datepicker
                  id="example-datepicker"
                  placeholder="YYYY-MM-DD" 
                  v-model="value"
                  class="mb-2"
               style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" ></b-form-datepicker>
              </div>
            </b-form-group>
             <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     Ortaklarımızdan teklif alın
    </b-form-checkbox>
      <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >
     Haber bültenimize üye olun
    </b-form-checkbox>
             </div>

            <b-button v-b-popover.hover.leftbottom="'Popover!'"  style="position:relative;
left:500px;border-radius: 2px;border-color: #ff3333;background-color: #ff3333;"><b>DEVAM ET </b></b-button>
            <hr style="width:100%;text-align:left;margin-left:0" />
          </div>
        </div>
        </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="4">
                <b-card>  
                    <p class="text-left"  > <b>Alışveriş sepetim</b></p>
                     <p class="text-left" >1 öğe</p>

            <b-button style="position:relative;
left:-5px; border-radius: 2px;border-color: #ff3333;background-color: #ff3333;" ><b>DETAYLARI GÖSTER</b></b-button>
                   
            <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="5"
        label-cols-lg="5"
        label="Alt Toplam"
      
        label-for="input-horizontal"
      >   <p class="text-right">24,90 TL</p>
      </b-form-group>
                    
            <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="5"
        label-cols-lg="5"
        label="Kargolama"
      
        label-for="input-horizontal"
      >   <p class="text-right">8,00 TL</p>
      </b-form-group>
            
          
                </b-card>
                <b-card> 
                       <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="6"
        label-cols-lg="6"
        label="Toplam(Vergiler Hariç)"
      
        label-for="input-horizontal"
      >   <p class="text-right">32,90 TL</p>
      </b-form-group>
                    
            <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="5"
        label-cols-lg="5"
        label="Vergiler"
      
        label-for="input-horizontal"
      >   <p class="text-right">0,00 TL</p>
      </b-form-group>

                </b-card>
                <b-card>
                       <p class="text-left"> <b-icon icon="shield-fill-check"></b-icon> 256 Bit Güvenli Alışveriş</p>
                </b-card>
                <b-card>
                     <p class="text-left">  <b-icon icon="minecart-loaded"></b-icon>Hızlı Teslimat</p>
                </b-card>
                <b-card>
                     <p class="text-left"> <b-icon icon="arrow-left-right"></b-icon>Değişim ve İade Seçeneği</p>
                </b-card>



      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { item: "A", name: "Bay" },
        { item: "B", name: "Bayan" }
      ]
    };
  }
};
</script>

<style>
</style>