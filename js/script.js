function store(){

    return {
        powerConsumption:'',
        hoursPerDay:'',
        kWhCost:'', 
        daily:'',
        monthly:'',

        calculate(){
            const day = ((this.powerConsumption/1000) * this.hoursPerDay) * (this.kWhCost)
            this.daily = day.toFixed(2)
            const month = (this.daily * 30)
            this.monthly =  month.toFixed(2)
        },
        reset(){
            this.powerConsumption = ''
            this.hoursPerDay=''
            this.kWhCost=''
            this.daily=''
            this.monthly=''
        }
    }
   
}

