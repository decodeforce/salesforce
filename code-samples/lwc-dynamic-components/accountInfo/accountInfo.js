import { LightningElement,api } from 'lwc';

export default class AccountInfo extends LightningElement {

    @api recordId;

    dynamicInstance;

    showDetails = false;

    get btnLabel(){
        return this.showDetails?'View account compact page':'View account full page';
    }

    connectedCallback(){

        import("c/accountCompactDetails")
                .then(({ default: ctor }) => (this.dynamicInstance = ctor))
                .catch((err) => console.log("Error importing component"));
    }

    handleViewDetails(){

        if(this.showDetails){

            import("c/accountCompactDetails")
                .then(({ default: ctor }) => (this.dynamicInstance = ctor))
                .catch((err) => console.log("Error importing component"));
                
            this.showDetails = false;
        }
        else{

            import("c/accountDetails")
                .then(({ default: ctor }) => (this.dynamicInstance = ctor))
                .catch((err) => console.log("Error importing component"));
            this.showDetails = true;
        }
        
        
    }
}