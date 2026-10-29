import { Component } from "react";

class Statistics extends Component {
  render() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">
            Total Expenses
          </p>
          <h2 className="text-3xl font-bold text-white mt-3">
            ₴0
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">
            This Month
          </p>
          <h2 className="text-3xl font-bold text-white mt-3">
            ₴0
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">
            Transactions
          </p>
          <h2 className="text-3xl font-bold text-white mt-3">
            0
          </h2>
        </div>

      </section>
    );
  }
}

export default Statistics;