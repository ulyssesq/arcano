function Arcano() {
    this.createUI();

    this.appentEvents();
}

Arcano.prototype = {
    // Elementos
    btnNext : undefined,
    btnPreviews: undefined,
    pageName : undefined,
    pageAppearance : undefined,
    pageClassification : undefined,
    pageCombativeSpell : undefined,
    pageMoves : undefined,
    pageEquipments : undefined,
    pageIntroducing : undefined,
    pageHistory : undefined,

    // // Variaveis de controle
    currentPage : undefined,

    createUI: function(){
        this.btnNext = document.getElementById('btn-next');
        this.btnPrevious = document.getElementById('btn-previous');

        this.pageName = document.getElementById('page-name');
        this.pageAppearance = document.getElementById('page-appearance');
        this.pageClassification = document.getElementById('page-classification');
        this.pageCombativeSpell = document.getElementById('page-combative-spell');
        this.pageMoves = document.getElementById('page-moves');
        this.pageEquipments = document.getElementById('page-equipments');

        this.currentPage = this.pageName;
    },

    appentEvents : function(){
        let self = this;

        this.btnNext.addEventListener('click', function(e){
            e.preventDefault();
            self.renderPage(self.getNextPage());
        });

        this.btnPrevious.addEventListener('click', function(e){
            e.preventDefault();
            self.renderPage(self.getPreviousPage());
        });
    },

    getNextPage : function(){
        if (this.currentPage === this.pageName)
            return this.pageAppearance;

        if (this.currentPage === this.pageAppearance)
            return this.pageClassification;

        if (this.currentPage === this.pageClassification)
            return this.pageCombativeSpell;
            
        if (this.currentPage === this.pageCombativeSpell)
            return this.pageMoves;

        if (this.currentPage === this.pageMoves)
            return this.pageEquipments;

        if (this.currentPage === this.pageEquipments)
            return this.pageIntroducing;
    },

    getPreviousPage : function() {
        if (this.currentPage === this.pageAppearance)
            return this.pageName;

        if (this.currentPage === this.pageClassification)
            return this.pageAppearance;

        if (this.currentPage === this.pageCombativeSpell)
            return this.pageClassification;
            
        if (this.currentPage === this.pageMoves)
            return this.pageCombativeSpell;

        if (this.currentPage === this.pageEquipments)
            return this.pageMoves;

        if (this.currentPage === this.pageIntroducing)
            return this.pageEquipments;    
    },

    renderPage : function(page) {
        this.hide(this.currentPage);
        this.currentPage = page;
        this.show(page);

        if (this.currentPage == this.pageName) {
            this.hide(this.btnPrevious);
        }
        else {
            this.show(this.btnPrevious);
        }

        if (this.currentPage == this.pageIntroducing) {
            this.hide(this.btnNext);
        }
        else {
            this.show(this.btnNext);
        }

        
    },

    hide : function(element){
        element.classList.add("d-none");
    },

    show: function(element){
        element.classList.remove("d-none");
    }
};

//new Arcano();



(function(){

    

    new Arcano();
})();