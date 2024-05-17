const navigation = {
    htmlButton: document.getElementById('button-HTML'),
    cssButton: document.getElementById('button-CSS'),
    jsButton: document.getElementById('button-JS'),

    alertNav (name) {
        alert(`You got to the ${name}-section`)
    },

    addEventListeners: function() {
        this.htmlButton.addEventListener('click', () => this.alertNav('HTML'));
        this.cssButton.addEventListener('click', () => this.alertNav('CSS'));
        this.jsButton.addEventListener('click', () => this.alertNav('JS'));

    },

    init () {
        this.addEventListeners();
    }
};

navigation.init();