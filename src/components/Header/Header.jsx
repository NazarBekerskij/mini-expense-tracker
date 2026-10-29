import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between bg-slate-900 p-6 rounded-2xl border border-slate-800">

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">
            Mini Expense Tracker
          </h1>

          <p className="text-sm text-slate-400">
            Track your expenses and manage your budget
          </p>
        </div>

      </header>
    );
  }
}

export default Header;