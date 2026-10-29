import { Component } from "react";

const categories = [
  { value: "food", label: "Food", icon: "🍔" },
  { value: "transport", label: "Transport", icon: "🚗" },
  { value: "shopping", label: "Shopping", icon: "🛍️" },
  { value: "entertainment", label: "Entertainment", icon: "🎮" },
  { value: "health", label: "Health", icon: "💊" },
  { value: "other", label: "Other", icon: "📦" },
];

class CategorySelect extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState((prev) => ({
      isOpen: !prev.isOpen,
    }));
  };

  handleSelect = (value) => {
    this.props.onChange({
      target: {
        name: "category",
        value,
      },
    });

    this.setState({
      isOpen: false,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Escape") {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { isOpen } = this.state;
    const { category } = this.props;

    const selectedCategory = categories.find(
      (item) => item.value === category
    );

    return (
      <div
        className="relative w-full"
        onKeyDown={this.handleKeyDown}
      >
        <button
          type="button"
          onClick={this.handleToggle}
          aria-expanded={isOpen}
          aria-controls="expense-categories"
          className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white transition-colors hover:border-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-400"
        >
          <span className="flex items-center gap-3">
            <span>{selectedCategory?.icon}</span>
            <span>{selectedCategory?.label || "Select Category"}</span>
          </span>

          <span className="text-slate-400">
            {isOpen ? "▴" : "▾"}
          </span>
        </button>

        {isOpen && (
          <div
            id="expense-categories"
            className="absolute top-full left-0 z-20 mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 p-2 shadow-2xl shadow-black/40"
          >
            {categories.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => this.handleSelect(item.value)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-left transition-colors hover:bg-slate-700 ${
                  category === item.value
                    ? "bg-indigo-600/20 text-indigo-300"
                    : "text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </span>

                {category === item.value && (
                  <span className="text-indigo-400">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CategorySelect;