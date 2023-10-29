import ExpenseDate form "./ExpenseDate";
import "./ExpenseItem.css"

function ExpenseItem(props) {
    return (
        <div classname="expense-item"><ExpenseDate date = {props.date}
        <div classname="expense-item__description ">
        <h1>{props.title}</h1>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
    );

}

export default ExpenseItem;