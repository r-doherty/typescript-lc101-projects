import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: { massKg: number, material: string }[] = [];
    astronauts: { massKg: number, name: string }[] = [];

    constructor(name: string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let mass: number = 0;
        for(let i = 0; i < items.length; i++)
        {
            mass += items[i].massKg;
        }
        return mass;
    }

    currentMassKg(): number {
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    }

    canAdd(item: Payload): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    addCargo(cargo: Cargo) {
        if(this.canAdd(cargo))
        {
            this.cargoItems.push(cargo);
            return true;
        }
        else
        {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut) {
        if(this.canAdd(astronaut))
        {
            this.astronauts.push(astronaut);
            return true;
        }
        else
        {
            return false;
        }
    }

}