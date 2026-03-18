// calculator function with using closures
function createCalculator(userNumber)
{
    return {
        add: function(value)
        {
            userNumber += value;
            return this;
        },

        subtract: function(value)
        {
            userNumber -= value;
            return this;
        },

        multiply: function(value)
        {
            userNumber *= value;
            return this;
        },

        divide: function(value)
        {
            userNumber /= value;
            return this;
        },

        getResult: function(value)
        {
            return userNumber;
        }
    };
} 

// main function for start the program
function main()
{
    let calc = createCalculator(10);
    console.log(calc.add(5).multiply(2).subtract(3).getResult());
}

main();