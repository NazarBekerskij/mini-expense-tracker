import { Component } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

class App extends Component {
  state = {
    expenses: [],
    title: "",
    amount: "",
    category: "food",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, amount, category } = this.state;

    if (
      title.trim() === "" ||
      !Number.isFinite(Number(amount)) ||
      Number(amount) <= 0
    ) {
      return;
    }

    const newExpense = {
      id: nanoid(),
      title: title.trim(),
      amount: Number(amount),
      category,
      createdAt: new Date().toISOString(),
    };

    this.setState((prev) => ({
      expenses: [...prev.expenses, newExpense],
      title: "",
      amount: "",
      category: "food",
    }));
  };

  render() {
    const { title, amount, category } = this.state;

    return (
      <div className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:py-10">
        <main className="mx-auto max-w-6xl">

          <Header />

          <Statistics />

          <section className="mt-6 grid grid-cols-1 items-start gap-5 lg:grid-cols-5">

            <div className="min-w-0 lg:col-span-2">
              <ExpenseForm
                title={title}
                amount={amount}
                category={category}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </div>

            <div className="min-w-0 lg:col-span-3">
              {/* Тут пізніше буде ExpenseList */}
            </div>

          </section>

        </main>
      </div>
    );
  }
}

export default App;