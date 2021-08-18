import React, {Component} from 'react';

export default class Information extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventory: [], 
            newItemDescription: '',
            newItemQuantity: '',
            currentPage: 1 ,
            paginationCount: 5,
        }
    }

    render() {
               return (
            <div className="container">
                <h3>Information</h3>
                <p>This application is fro Restuarant called Breeze. 
                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla 
                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla 
                    <br/><b>Note*</b>

                    <br/><br/><b>Inventory:</b> Shows the name of items in inventory and their current quantity.
                    <br/><b>Restock/Use:</b> Change quantity of items in inventory by entering the amount and pressing the restock/use buttons.
                    <br/><b>Create Items:</b> Fill in the respective item information and press the create button to add new items to the inventory list.
                    <br/><b>Remove Items:</b> Remove items in the inventory list by selecting the delete button next to the item in the table.

                </p>
                <h3>About Me</h3>
                <p>Hahahahahahahahahah Hahahahahahahahahah Hahahahahahahahahah Hahahahahahahahahah Hahahahahahahahahah Hahahahahahahahahah HahahahahahahahahahHahahahahahahahahahHahahahahahahahahah
                    HahahahahahahahahahHahahahahahahahahahHahahahahahahahahahahahahahahahahahahahahahahah  
                    <a target = "_blank" rel="noopener noreferrer" href="https://www.facebook.com/BreezeCCOnline/"> here</a> on breeze facebook page.

                </p>
                <footer style={{marginTop:"70px"}}>
                </footer>
            </div>
            
        )}
}