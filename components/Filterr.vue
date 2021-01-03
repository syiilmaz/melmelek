<template>
   <b-container class="bv-example-row">
       <b-row>
           <b-col>
                <b-card style=" font-family: sans-serif; color :#999999">
                     <p class="text-left"><b>Modeller </b></p>
                     <div style="position:relative;
                  left:0px;top : 10px;">
                          <b-icon icon="three-dots"></b-icon>
                     </div>
                     <div>
              <b-link
                style=" font-family: sans-serif; color :#999999"
                href="#foo"
                >Melimelek Büyükler(4)</b-link
              >
               </div>
         <div>
              <b-link
                style=" font-family: sans-serif; color :#999999"
                href="#foo"
                >Melimelek Küçükler(16)</b-link
              >
         </div>
         <div>
              <b-link
                style=" font-family: sans-serif; color :#999999"
                href="#foo"
                >Melimelek Ajandalar(2)</b-link
              >
         </div>
         <div>
          
              <b-link
                style=" font-family: sans-serif; color :#999999"
                href="#foo"
                >2020 Yeni Modeller(8)</b-link
              >
         </div>
           <div>
              <b-link
                style=" font-family: sans-serif; color :#999999"
                href="#foo"
                >Melimelek Planner(6)
              </b-link>
           </div>
                </b-card>
                 <b-card style=" font-family: sans-serif; color :#999999">
            <p class="text-left"><b> Filtreleme ölçütü </b></p>
            <b-icon icon="three-dots"></b-icon>
            <p class="text-left"><b-icon icon="trash-fill"></b-icon>Hepsini sil</p>

            <p class="text-left"><b>Kategotiler </b></p>
            <div style="position:relative;
left:0px;top : 10px;" >
            
                <b-form-checkbox
                id="checkbox-5"
                v-model="status"
                name="checkbox-5"
                value="accepted"
                unchecked-value="not_accepted"
               
              >
               Melimelek Büyükler(4)
              </b-form-checkbox>

                <b-form-checkbox
                id="checkbox-5"
                v-model="status"
                name="checkbox-5"
                value="accepted"
                unchecked-value="not_accepted"
               
              >
               Melimelek Küçükler(6)
              </b-form-checkbox>

                <b-form-checkbox
                id="checkbox-5"
                v-model="status"
                name="checkbox-5"
                value="accepted"
                unchecked-value="not_accepted"
               
              >
               Melimelek Ajandalar(2)
              </b-form-checkbox>

                <b-form-checkbox
                id="checkbox-5"
                v-model="status"
                name="checkbox-5"
                value="accepted"
                unchecked-value="not_accepted"
               
              >
               2020 Yeni Modeller(8)
              </b-form-checkbox>

                <b-form-checkbox
                id="checkbox-5"
                v-model="status"
                name="checkbox-5"
                value="accepted"
                unchecked-value="not_accepted"
               
              >
               Melimelek Planner(6)
              </b-form-checkbox>
              
            </div>
              <p  style="position:relative; top:10px" class="text-left"><b>Stok durumu </b></p>
            <div style="position:relative;
left:0px;top :-10px;" >
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Stokta yok(16)
              </b-form-checkbox>
                <b-form-checkbox
                id="checkbox-2"
                v-model="status"
                name="checkbox-2"
                value="accepted"
                unchecked-value="not_accepted"
              >
               Stokta var(12)
              </b-form-checkbox>
            </div>
          
               <p  style="position:relative; top:10px" class="text-left"><b>Fiyat </b></p>
               <div style="position:relative;
left:0px;top :-10px;" > 
    <b-form-group >
      <b-form-radio v-model="selected" name="some-radios" value="A">9TL - 11TL (16)</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="B">14TL - 16 TL (4)</b-form-radio>
       <b-form-radio v-model="selected" name="some-radios" value="A">24TL - 25 TL (6)</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="B">34TL - 35TL (1) </b-form-radio>
         <b-form-radio v-model="selected" name="some-radios" value="B">39TL - 41TL (1)</b-form-radio>
    </b-form-group>
               </div>
          </b-card>
           </b-col>
           <b-col></b-col>
           <b-col></b-col>

       </b-row>
   </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>