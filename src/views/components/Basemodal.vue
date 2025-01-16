<template>
    <div class="modal-overlay"
    tabindex="-1"
    @click.self="close"
    @keydown.esc="close"
    >
            <div class="modal">
                <h2>Форма пополнения</h2>
                <form>
            <label for="cardNumber">Номер карты:</label>
            <input type="text" id="cardNumber" placeholder="Введите номер карты" />
            <label for="amount">Сумма пополнения:</label>
            <input type="text" id="amount" placeholder="Введите сумму" />
            <button type="submit">Пополнить</button>
                </form>
          <button class="close-button" @click="close" >Закрыть</button>
            </div>


    </div>
</template>

<style>


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    z-index: 1000; /* Убедитесь, что окно имеет высокий z-index */
  }
  
  .modal form {
    display: flex;
    flex-direction: column;
  }
  
  .modal input {
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .modal button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .modal button:hover {
    background-color: #45a049;
  }
  
  .close-button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .close-button:hover {
    background-color: #e53935;
  }


</style>


<script>

export default{
    data(){

},


mounted (){
 this.$el.focus();
},


methods: {
    close(){
        this.$emit('close');
    },
},
};  
</script>