function Menu() {
    return (
        <div className="menu">
            <div className="menu-category">
                <h2>Hot Drinks</h2>
                <div className="menu-items-container">
                    <div className="menu-item">
                        <h3>Coffee</h3>
                        <p>Fresh brewed premium coffee</p>
                        <p className="price">$3.50</p>
                    </div>
                    <div className="menu-item">
                        <h3>Espresso</h3>
                        <p>Strong Italian espresso</p>
                        <p className="price">$2.50</p>
                    </div>
                    <div className="menu-item">
                        <h3>Hot Chocolate</h3>
                        <p>Rich and creamy hot chocolate</p>
                        <p className="price">$4.00</p>
                    </div>
                    <div className="menu-item">
                        <h3>Tea</h3>
                        <p>Selection of premium teas</p>
                        <p className="price">$3.00</p>
                    </div>
                </div>
            </div>

            <div className="menu-category">
                <h2>Cold Drinks</h2>
                <div className="menu-items-container">
                    <div className="menu-item">
                        <h3>Iced Coffee</h3>
                        <p>Chilled coffee over ice</p>
                        <p className="price">$4.00</p>
                    </div>
                    <div className="menu-item">
                        <h3>Iced Tea</h3>
                        <p>Refreshing cold tea</p>
                        <p className="price">$3.50</p>
                    </div>
                    <div className="menu-item">
                        <h3>Frappuccino</h3>
                        <p>Blended coffee drink</p>
                        <p className="price">$5.00</p>
                    </div>
                    <div className="menu-item">
                        <h3>Lemonade</h3>
                        <p>Fresh squeezed lemonade</p>
                        <p className="price">$3.50</p>
                    </div>
                </div>
            </div>

            <div className="menu-category">
                <h2>Pastries</h2>
                <div className="menu-items-container">
                    <div className="menu-item">
                        <h3>Croissant</h3>
                        <p>Buttery French pastry</p>
                        <p className="price">$3.50</p>
                    </div>
                    <div className="menu-item">
                        <h3>Muffin</h3>
                        <p>Freshly baked muffins</p>
                        <p className="price">$3.00</p>
                    </div>
                    <div className="menu-item">
                        <h3>Danish</h3>
                        <p>Sweet pastry with fruit</p>
                        <p className="price">$4.00</p>
                    </div>
                    <div className="menu-item">
                        <h3>Scone</h3>
                        <p>Traditional British scone</p>
                        <p className="price">$3.50</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;