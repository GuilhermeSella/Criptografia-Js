

export const ValidatorCustomer = (customerInfo) => {

    const loans = [];
    if(customerInfo.income <= 3000){
        loans.push(
        {
            type: "PERSONAL",
            interest_rate: 4
        },
        {
            type: "GUARANTEED",
            interest_rate: 3
        }
     )
    }
    else if (customerInfo.income <= 5000 && customerInfo.income >= 3000 && customerInfo.age < 30 && customerInfo.location == "SP" ){
        loans.push(
            {
                type: "PERSONAL",
                interest_rate: 4
            },
            {
                type: "GUARANTEED",
                interest_rate: 3
            }
         )
    }

    // EMPRÉSTIMO CONSIGNADO

    if(customerInfo.income >= 5000){
        loans.push(
            {
                type: "CONSIGNMENT",
                interest_rate: 2
            }
        )
    }

    return loans;

}