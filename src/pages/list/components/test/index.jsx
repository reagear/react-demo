import './index.less';
import React from 'react';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '', inStockOnly: false };
        this.filterTextChange = this.filterTextChange.bind(this);
        this.isStockOnlyChange = this.isStockOnlyChange.bind(this);
    }

    filterTextChange(filterText) {
        this.setState({
            filterText
        });
    }

    isStockOnlyChange(inStockOnly) {
        this.setState({
            inStockOnly
        });
    }

    getProductsForShow() {
        let value = PRODUCTS;
        let { filterText, inStockOnly } = this.state;
        if (filterText) {
            value = value.filter((i) => i.name.includes(filterText));
        }

        if (inStockOnly) {
            value = value.filter((i) => i.stocked);
        }

        return value;
    }

    render() {
        const products = this.getProductsForShow();

        return (
            <div className="filterable-produce-table">
                <SearchBar
                    onFilterTextChange={this.filterTextChange}
                    onIsStockOnlyChange={this.isStockOnlyChange}
                />
                <ProductTable products={products} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
    }

    inputChange(e) {
        const filterText = e.target.value.trim();
        const { onFilterTextChange } = this.props;
        onFilterTextChange(filterText);
    }

    checkboxChange(e) {
        const inStockOnly = e.target.checked;
        const { onIsStockOnlyChange } = this.props;
        onIsStockOnlyChange(inStockOnly);
    }

    render() {
        return (
            <div className="search-bar">
                <label>
                    搜索&emsp;
                    <input type="text" onInput={this.inputChange} />
                </label>
                <label>
                    <input type="checkbox" onChange={this.checkboxChange} />
                    显示库存&emsp;
                </label>
            </div>
        );
    }
}

function ProductTable(props) {
    const products = props.products;
    let categories = {};
    products.forEach((product) => {
        const categoryName = product.category;
        if (categories[categoryName]) {
            categories[categoryName].push(product);
        } else {
            categories[categoryName] = [product];
        }
    });

    let categoryNames = Object.keys(categories);

    return (
        <div>
            <div className="product-table">
                {categoryNames.map((categoryName) => (
                    <ProductCategoryRow
                        key={categoryName}
                        categoryName={categoryName}
                        products={categories[categoryName]}
                    />
                ))}
            </div>
        </div>
    );
}

function ProductCategoryRow(props) {
    const { categoryName, products } = props;

    return (
        <div className="category-row">
            <div className="category-name">{categoryName}</div>
            {products.map((product) => (
                <ProductRow key={product.name} products={product} />
            ))}
        </div>
    );
}

function ProductRow(props) {
    const { name, price } = props.products;

    return (
        <div className="item">
            <p className="item-name">{name}</p>
            <p className="itemPrice">{price}</p>
        </div>
    );
}

export default FilterableProductTable;
