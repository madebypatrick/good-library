import Sequelize  from 'sequelize';
import db from "../config/database.js";


const Book=db.define('book',{
    author:{
        type:Sequelize.STRING
    },
    title:{
        type:Sequelize.STRING
    },
    genre:{
        type:Sequelize.STRING
    },
    owner:{
        type:Sequelize.STRING
    }
})

export default Book;