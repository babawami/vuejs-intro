// get a reference to the sms or call radio buttons
let radioBill = new Vue({
    el: '.radioSelectBill',
    data:{
        callTotalTwo: 0,
        smsTotalTwo:0,
        picked:''
    },
    methods:{
    radioAdd:function(){
     if(this.picked === 'call'){
        this.callTotalTwo += 2.75;
        picked = '';
     }
     if(this.picked === 'sms'){
         this.smsTotalTwo += 0.75;
         picked = '';
     }
    }
    },
    computed:{
        totalTwo: function(){
            return this.callTotalTwo + this.smsTotalTwo;
        },
        colourAdd:function(){
            return{
                'warning': this.totalTwo >= 20 && this.totalTwo < 30,
                'danger': this.totalTwo >= 30
            }
        }
    }
})

//get a reference to the add button 

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
