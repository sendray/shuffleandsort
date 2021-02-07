(function() {

    // Global scope of variable
    let _this = this;
    // constant for grid item colors
    const gridColors = [
        {color: 'bg-color-1'},
        {color: 'bg-color-2'},
        {color: 'bg-color-3'},
        {color: 'bg-color-2'},
        {color: 'bg-color-3'},
        {color: 'bg-color-4'},
        {color: 'bg-color-4'},
        {color: 'bg-color-1'},
        {color: 'bg-color-3'},
    ];

    // Checking screenwidth to select the respective buttons
    _this.isMobile = screen.width > 567 ? false : true;

    // Dom selectors based on device
    const gridContainer = document.querySelector('.grid');
    if (_this.isMobile) {
        _this.shuffleBtn = document.querySelector('.button-container-mobile.shuffleBtn');
        _this.sortBtn = document.querySelector('.button-container-mobile.sortBtn');
    } else {
        _this.shuffleBtn = document.querySelector('.button-container').querySelector('.shuffleBtn');
        _this.sortBtn = document.querySelector('.button-container').querySelector('.sortBtn');
    }

    /**
     * @FuntionDescription 
     * Function to initialize click event listeners for both shuffle and sort buttons
     * Call method createGridItems to genrate grid with 1 - 9
     */
    const init = () => {
        if (_this.shuffleBtn) {
            _this.shuffleBtn.addEventListener('click', () => {
                shuffle();
            });
        }
        if (_this.sortBtn) {
           _this. sortBtn.addEventListener('click', () => {
                sort();
            });
        }
        createGridItems();
    }

    /**
     * @FuntionDescription 
     * Function to create grid items from 1 - 9
     * Create div element and add the className from the array gridColors to each elements for adding bg color
     * Add item as another className for styling
     * Append the grid items to grid container
     */
    const createGridItems = () => {
        const gridItemLength = gridColors.length;
        for (let i = 0; i < gridItemLength; i++) {
            const grid = document.createElement('div');
            grid.className = `item ${gridColors[i].color}`;
            grid.innerHTML = i + 1;
            gridContainer.appendChild(grid);
            _this.gridItems = gridContainer.querySelectorAll('.item');
        }
    }

    /**
     * @FuntionDescription 
     * Function to shuffle tht grid items
     * Iterate grid items with the available length (1 - 9)
     * Use Math.random() javascript method, randomizing the dom elements
     * Again append to the gridContainer
     */
    const shuffle = () => {
        for (let i = _this.gridItems.length; i >= 0 ; i-- ) {
            gridContainer.appendChild(gridContainer.children[Math.random() * i | 0])
        } 
    }

    /**
     * @FuntionDescription 
     * Function to sort the grid items
     * Get the grid items from the global scope '_this.gridItems'
     * Iterate and append the entire nodeList to gridContainer
     * Append the grid items to grid container
     */
    const sort = () => {
        for (let i = 0; i < _this.gridItems.length ; i++ ) {
            gridContainer.append(..._this.gridItems)
        }
    }

    init();
})();