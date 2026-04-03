import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class ConcreteSubject implements Subject {
    public state: number = 0;
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        this.state = Math.floor(Math.random() * 10);
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}