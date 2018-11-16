// get a reference to the textbox where the bill type is to be entered
let textBill = new Vue ({
    el: '.textInputBill',
    data:{
        callTotal: 0,
        smsTotal: 0,
        billType: '',
        'warning': false,
        'danger': false

    },

    methods:{
        add: function(){
            if(this.billType === 'call'){
                this.callTotal +=  2.75;
                this.billType = '';
            }
            if(this.billType === 'sms'){
                this.smsTotal += 0.75;
                this.billType = '';
            }
        }  
    },
    computed:{
        grandTotal: function(){
            return this.callTotal + this.smsTotal;  
        },
        colourAdd:function(){
            return{
                'warning': this.grandTotal >= 20 && this.grandTotal < 30,
                'danger': this.grandTotal >= 30
            }
        }
    }

})

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
