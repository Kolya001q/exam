import { Observer } from "./Observer";
import { ConcreteSubject } from "./ConcreteSubject";

export class ConcreteObserverA implements Observer {
    public update(subject: ConcreteSubject): void {
        if (subject.state < 5) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

export class ConcreteObserverB implements Observer {
    public update(subject: ConcreteSubject): void {
        if (subject.state === 0 || subject.state >= 3) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}