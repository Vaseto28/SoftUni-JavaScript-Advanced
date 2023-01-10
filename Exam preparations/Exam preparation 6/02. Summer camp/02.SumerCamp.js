class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if(!Object.keys(this.priceForTheCamp).includes(condition)){
            throw new Error("Unsuccessful registration at the camp.");
        }

        if(this.listOfParticipants.find(x => x.name === name)){
            return `The ${name} is already registered at the camp.`;
        }

        if(this.priceForTheCamp[condition] > money){
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        let person = this.listOfParticipants.find(x => x.name === name);
        if(!person){
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(this.listOfParticipants.indexOf(person), 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2){
        if(typeOfGame === "WaterBalloonFights"){
            let firstPlayer = this.listOfParticipants.find(x => x.name === participant1);
            let secondPlayer = this.listOfParticipants.find(x => x.name === participant2);

            if(!firstPlayer || !secondPlayer){
                throw new Error(`Invalid entered name/s.`);
            }

            if(firstPlayer.condition !== secondPlayer.condition){
                throw new Error(`Choose players with equal condition.`);
            }
            
            if(firstPlayer.power === secondPlayer.power){
                return `There is no winner.`;
            }
            else{
                if(firstPlayer.power - secondPlayer.power > 0){
                    firstPlayer.wins++;
                    return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`;
                }
                else{
                    secondPlayer.wins++;
                    return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`;
                }
            }
        }
        else if(typeOfGame === "Battleship"){
            let firstPlayer = this.listOfParticipants.find(x => x.name === participant1);

            if(!firstPlayer){
                throw new Error(`Invalid entered name/s.`);
            }

            firstPlayer.power += 20;
            return `The ${firstPlayer.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString (){
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        result += this.listOfParticipants.sort((a, b) => b.wins - a.wins).map(x => `${x.name} - ${x.condition} - ${x.power} - ${x.wins}`).join('\n');

        return result;
    } 
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
