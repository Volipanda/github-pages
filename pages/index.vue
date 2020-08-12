<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-main class="text-center">   
        <v-container fluid>
          <v-row dense>
            <v-col>              
                <v-img 
                  class="mx-auto"
                  :src="require('static/image/LOGO-20-ANOSnew.png')"
                  width="500px"
                  >
                </v-img>
                <br/>
                <br/>
                <br/>
                <span>{{ textInfo.welcome }}</span>
                <v-spacer/>
                {{ textInfo.weAreTopenglish }}
                <v-spacer/>
                {{ textInfo.schoolDescription }}
            </v-col>
          </v-row>
          <br/>
          <v-row dense>
            <v-col>                                                      
                <v-icon
                    
                    x-large
                >help_outline</v-icon>
                <span> SOBRE O CURSO</span>              
                <v-spacer></v-spacer>              
                <b> {{ textInfo.courseDescription }} </b>                          
            </v-col>
            <v-col>
              
                  <v-icon
                    x-large 
                    >menu_book</v-icon>
                    <span>METODOLOGIA</span>
                <v-spacer></v-spacer>                
                    <b> {{ textInfo.metodology }} </b>
            </v-col>
            <v-col>
              
                  <v-icon
                    x-large
                    >repeat</v-icon>
                    <span>FLEXIBILIDADE</span>
                <v-spacer></v-spacer>                
                    <b> {{ textInfo.flexibility }} </b>
            </v-col>
          </v-row>
          <v-divider/>
          <v-row>
            <v-col>              
              DIFERENCIAIS                
                <v-row>
                  <v-col>
                        <v-icon
                          x-large>done_outline</v-icon>
                          <span>GARANTIA</span>
                          <v-spacer/>
                        <b> {{ textInfo.diferential }} </b>
                  </v-col>
                  <v-col>
                        <v-icon
                          x-large>airplanemode_active</v-icon>
                          <span>INTERCÂMBIO</span>
                          <v-spacer/>
                        <b>
                        1- {{ textInfo.obsIntercourse }} <br/>
                        2- {{ textInfo.obsStudent }}
                        </b>
                  </v-col>
                </v-row>
              </v-card>                           
            </v-col>
          </v-row>
          <v-row>
            <v-col>            
              <v-card
                class="mx-auto"
                max-width="350px">
                
                <v-card-title>
                  <v-icon>attach_money</v-icon>
                  <span>MENSALIDADE</span> 
                </v-card-title>
                <v-card-subtitle>
                  <b>PROMOÇÃO IMPERDÍVEL</b> <br/>
                  <b>APENAS R$ 600,00 EM 24 X </b>
                </v-card-subtitle>              
              </v-card>
            </v-col>
            <v-col>
              <v-card
                class="mx-auto"
                max-width="350px"
                >
                <v-card-subtitle>
                  PARA MAIORES INFORMAÇÕES:
                </v-card-subtitle>
                <v-main style="padding: 10px">
                  <v-form>
                    <v-text-field
                      label="Nome"
                      required
                      ></v-text-field>
                    <v-text-field
                      label="E-mail"
                      required
                      ></v-text-field>
                    <v-text-field
                      label="Whatsapp"
                      required
                      ></v-text-field>
                      <v-checkbox
                        value="0"
                        label="Eu concordo"
                        type="checkbox"
                        required
                        ></v-checkbox>

                    <v-btn class="mr-4" >Enviar</v-btn>
                  </v-form>
                </v-main>
              </v-card>
            </v-col>
          </v-row>
        </v-container>                  
      </v-main>      
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      show: false,
      textInfo: {        
        welcome: 'We are Top English!',
        weAreTopenglish: '',
        schoolDescription: 'Uma empresa com mais de 20 anos de experiência no mercado. Cuidamos de você em qualquer lugar do mundo',
        courseDescription: 'Oferecemos curso completo de 2 anos, focado 100% em conversação que vai garantir a sua fluência e o seu aprendizado.',
        metodology: 'Graças à nossa metodologia própria, a conversação ocorre desde a primeira aula, onde nossos alunos aprendem a construir frases logo de início.',
        flexibility: 'Na Top English também é o aluno que define os dias e horários de aulas. podendo assim escolher o que melhor se ajustar à sua agenda. Além disso, com flexibilidade para poder desmarcar e reagendar aulas que porventura precisem ser desmarcadas.',
        diferential: 'Os diferenciais do nosso curso são a garantia da sua fluência em inglês.',
        obsIntercourse: 'O intercâmbio não será cobrado pelas aulas.',
        obsStudent: 'O aluno pagará somente a passagem, hospedagem e refeições.',
        obsPrice: 'R$ 600,00 em 24 x'        
      }  
    };
  },
  components: {

  },
  mounted() {

  }
}
</script>