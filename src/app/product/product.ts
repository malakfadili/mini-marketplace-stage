export class Product{

    constructor( public prd_id: number,
        public title: string,
        public description: string,
        public price: number,
        public company: string,
        public img: string,
        public quantity : number,
        public likes: number){
            this.prd_id = prd_id
            this.description = description
            this.title = title
            this.company = company
            this.img = img
            this.likes = likes

        }

        
}