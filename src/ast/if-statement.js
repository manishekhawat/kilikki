// Dependencies:
import { Statement } from './statement';

export class IfStatement extends Statement {
    constructor (test, consequent, loc, alternate) {
        super('IfStatement');
        this.test = test;
        this.consequent = consequent;
        this.loc = loc;
        this.alternate = alternate;
    }
}
