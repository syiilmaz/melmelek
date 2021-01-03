<template>
<b-container>
    <b-col></b-col>
    <p style="    font-family:Work Sans, sans-serif;
    font-weight: 300;
    line-height: normal;
    font-size: 20px;
    line-height: 1.5;
    color: #999999" >Hesabınızda oturum açın</p>
    <b-col cols="8">
  <div>
    <div>
      <b-card style=" box-shadow: 10px 10px 5px whitesmoke;  font-family: sans-serif; color :#999999" >

        <div class="col-md-4 offset-4 card card-primary p-3 border"
                 :class="{'border-primary' : isUser, 'border-success' : !isUser }">
                <h3
                        :class="{'text-primary' : isUser, 'text-success' : !isUser }"
                        class="text-center mb-3 mt-3">Vue.js | Auth</h3>
                <hr>
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label>E-posta Adresiniz</label>
                        <input v-model="user.email" type="email" class="form-control"
                               placeholder="E-posta adresinizi giriniz">
                    </div>
                    <div class="form-group">
                        <label>Şifre</label>
                        <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
                    </div>
                    <div class="button-container d-flex  flex-column align-items-center">
                     <button type="submit" :class="{'btn-primary' : isUser, 'btn-success' : !isUser }"
                                class="btn btn-block mb-2">
                            {{ isUser ? 'Giriş Yap' : 'Kayıt Ol' }}
                        </button> 
                        <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
                            {{ isUser ? 'Üye değilim' : 'Üyeliğim var'}}
                        </a>
                    </div>
                </form>
            </div>
 <!--      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="E-posta"
        v-model="user.email"
        label-for="input-horizontal"
      >
        <b-form-input @submit.prevent="onSubmit" style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" id="input-horizontal"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Parola"
        v-model="user.password"
        label-for="input-horizontal"
      >
        <b-input-group>
          <b-form-input style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" type="password"  id="myInput" min="0.00"></b-form-input>

    <b-input-group-append>
       <b-button variant="secondary">Göster</b-button>
    </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <div>
        <b-link style=" font-family: sans-serif;position:relative;left:300px; font-size: 15px;
    color: #878787;" href="#foo">Parolanızı mı unuttunuz? </b-link>
      </div>
        <b-button  style="position:relative;left:340px; border-radius: 2px;border-color: #ff3333;background-color: #ff3333;">OTURUM AÇ</b-button>
       
      <hr style="width:100%;text-align:left;margin-left:0" />
      <div>
        <NuxtLink style="  font-family: sans-serif;position:relative;left:220px; font-size: 16px;
    color: #878787;"  to="/acc">Hesabınız yok mu?Bir tane oluşturun </NuxtLink>
      </div> -->
      </b-card>
    </div>
  </div>
    </b-col>
    <b-col></b-col>
</b-container>
       
</template>
<script>
 export default {
        data() {
            return {
                user: {
                    email: null,
                    password: null
                },
                isUser: false
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch("login", { ...this.user, isUser : this.isUser  })
                    .then(response => {
                       this.$router.push("/")
                    })
            }
        }
    }
</script>
