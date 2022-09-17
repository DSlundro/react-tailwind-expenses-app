import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {

    return (
        <section>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <Card className="expense-item__price">$ {props.amount}</Card>
                </div>
            </Card>
        </section>
        
    );
}

export default ExpenseItem;