<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>
    <div class="row">
      
      <div class="col-lg-8">
      
        

        <div class="row">
        
          <div class="row">




          <div class="row">
        <div class="col-lg-8 ">
          <div class="row mt-4 mb-2">
            <div class="col-xl-6 mega-mom">
              <div class="row">
                    <div class="col-md-6">
                      <default-info-card
                        icon="text-white fas fa-wallet" 
                        title="Пополнения"
                        description="Вся история пополнений"
                        value="25 000.00 ₽  "
                      />
                    </div>
                    <div class="col-md-6">
                      <default-info-card
                        icon="text-white fas fa-credit-card"
                        title="Выводы"
                        description="Вся история выводов"
                        value="85 670.00 ₽"
                      />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-md-11 mt-1">
                <ranking-list-card
                  :horizontal-break="false"
                  :card="{}"
                >
                </ranking-list-card>
              </div>


    </div>
        

        </div>
      </div>

      
        

    </div>

  </div>
</template>


<script>
import setTooltip from "@/assets/js/tooltip.js";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";

import RankingListCard from "@/examples/Cards/RankingListCard.vue";

export default {
  name: "Транзакции",
  components: {
    DefaultInfoCard,
    RankingListCard,
  },
  mounted() {
    setTooltip();
  },
};
</script>
