//get a reference to the calculate button
let calculateBill = new Vue({
    el: '.calculateBill',
    data : {
      // billTotal : 0.00,      
      // add this
      'warning':false,
      'danger': false,
      billString: ''
    },
    // methods : {
      computed: {
        billTotal : function () {
          let billParts = this.billString.split(',');
          let totalBill = 0;
          // calculate the totalBill
        for(bill of billParts){
            let cost = bill.trim();
            if(cost === 'sms'){
              totalBill += 0.75
            }
            if(cost === 'call'){
                totalBill += 2.75
            }
        }
        
        
          // return the total bill on the screen by setting the total value to billTotal
          return totalBill;
        },
        addColor: function () {
          return{
            'warning':   this.billTotal >= 20 && this.billTotal < 30,
            'danger': this.billTotal >= 30
          }
          
        }

      }
      // calculate : function() {
      //   let billParts = this.billString.split(',');
      //   let totalBill = 0;
      //   // calculate the totalBill
      //   for(bill of billParts){
      //       let cost = bill.trim();
      //       if(cost === 'sms'){
      //         totalBill += 0.75
      //       }
      //       if(cost === 'call'){
      //           totalBill += 2.75
      //       }
      //   }
        
      //   // display the total bill on the screen by setting the total value to billTotal
      //   this.billTotal = totalBill;
      // },

      
    // }
  });


//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
