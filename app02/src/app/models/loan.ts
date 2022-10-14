import { Installment } from "./installment";

export interface Loan {
    loanAmount:number;
    term:number;
    roi:number;
    emis:Installment[];
}
