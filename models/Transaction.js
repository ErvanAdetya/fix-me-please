var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Book = require('../models/Book')

var transactionSchema = Schema({
  memberid: String,
  days: String,
  date: { type: Date, default: Date.now() },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})
// .pre('save', function(next) {
//   if(this.booklist) {
//     try {
//       this.booklist.map((bookId) => {
//         console.log(bookId)
//         Book
//           .findById(bookId)
//           .then((bookData) => {
//             if(bookData) {
//               if(bookData.stock < 1) {
//                 next(new Error(`${bookData.title} is out of stock!`))
//               } else {
//                 bookData.stock--
//                 bookData.save()
//                 next()
//               }
//             } else {
//               next(new Error(`Book is not exist!`))
//             }
//           })
//           .catch((err) => {
//             next(new Error(`Book is not exist!`))
//           })
//       })
//     } catch(err) {
//       next(new Error(`Book is not exist!`))
//     }
//   } else {
//     return next(new Error('Booklist cannot be empty'))
//     // return next('Booklist cannot be empty')
//   }
// });

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
