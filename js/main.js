function Arcano() {
    this.createUI();

    this.appentEvents();
}

Arcano.prototype = {
    // Elementos
    btnNext : undefined,
    // pageName : undefined,
    // pageAppearance : undefined,
    // pageClassification : undefined,
    // pageCombativeSpell : undefined,

    // // Variaveis de controle
    // currentPage : undefined,

    createUI: function(){
        this.btnNext = document.getElementById('btn-next');
        this.pageName = document.getElementById('page-name');
        this.pageAppearance = document.getElementById('page-appearance');
        this.pageClassification = document.getElementById('page-classification');
        this.pageCombativeSpell = document.getElementById('page-combative-spell');

        this.currentPage = this.pageName;
    },

    appentEvents : function(){
        let self = this;

        this.btnNext.addEventListener('click', function(e){
            e.preventDefault();
            self.renderPage(self.getNextPage());
        });
    },

    getNextPage : function(){
        if (this.currentPage === this.pageName)
            return this.pageAppearance;

        if (this.currentPage === this.pageAppearance)
            return this.pageClassification;
    },

    getPreviewsPage : function() {
        if (this.currentPage === this.pageAppearance)
            return this.pageName;

        if (this.currentPage === this.pageClassification)
            return this.pageAppearance;
    },

    renderPage : function(page) {
        this.hide(this.currentPage);
        this.show(page);
    },

    hide : function(element){
        element.classList.add("d-none");
    },

    show: function(element){
        element.classList.remove("d-none");
    }
};

new Arcano();
/*
    teste: function(){
        console.log('ok');
    },
    // Funções
    createUI : function() {
        console.log("create");
        this.btnNext = document.getElementById('btn-next');
        //this.pageName = document.getElementById('page-name');
        // this.pageAppearance = document.getElementById('page-appearance');
        // this.pageClassification = document.getElementById('page-classification');
        // this.pageCombativeSpell = document.getElementById('page-combative-spell');

        // this.currentPage = this.pageName;    
    },

    appentEvents : function(){
        let self = this;

        this.btnNext.addEventListener('click', function(){
            self.renderPage(self.getNextPage());
        });
    },

    getNextPage : function(){
        if (this.currentPage === this.pageName)
            return this.pageAppearance;

        if (this.currentPage === this.pageAppearance)
            return this.pageClassification;
    },

    getPreviewsPage : function() {
        if (this.currentPage === this.pageAppearance)
            return this.pageName;

        if (this.currentPage === this.pageClassification)
            return this.pageAppearance;
    },

    renderPage : function(page) {
        this.hide(this.currentPage);
        this.show(page);
    },

    hide : function(page){
        page.className = "page d-none";
    },

    show: function(){
        page.className = "page";
    }
};


(function(){

    

    Arcano();
})();*/