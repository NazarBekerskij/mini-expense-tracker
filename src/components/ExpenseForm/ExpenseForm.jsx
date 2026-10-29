import { Component } from "react";

class ExpenseForm extends Component {
  render() {
    const {
      title,
      amount,
      category,
      onChange,
      onSubmit,
    } = this.props;

    const inputStyles =
      "w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

    const labelStyles =
      "text-sm font-medium text-slate-200";

    return (
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10"
      >
        <h2 className="mb-6 text-xl font-semibold text-white">
          Add New Expense
        </h2>

        <div className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label htmlFor="title" className={labelStyles}>
              Expense Name
            </label>

            <input
              id="title"
              type="text"
              name="title"
              placeholder="e.g. Groceries"
              value={title}
              onChange={onChange}
              className={inputStyles}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="amount" className={labelStyles}>
              Expense Amount
            </label>

            <input
              id="amount"
              type="number"
              name="amount"
              min="0.01"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={onChange}
              className={inputStyles}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className={labelStyles}>
              Expense Category
            </label>

            <select
              id="category"
              name="category"
              value={category}
              onChange={onChange}
              className={inputStyles}
            >
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="shopping">Shopping</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-1 w-full cursor-pointer rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md shadow-indigo-950/30 transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            + Add Expense
          </button>

        </div>
      </form>
    );
  }
}

export default ExpenseForm;