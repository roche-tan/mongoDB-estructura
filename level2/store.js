const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  surname: String,
  address: String,
  postal_code: String,
  city: String,
  province: String,
  phone: String
});

const categoryProductSchema = new Schema({
  name: String
});

const productSchema = new Schema({
  name: String,
  descriptin: String,
  image: String,
  price: Number,
  categoryProduct: { type: Schema.Types.ObjectId, ref: 'Category' }  // Reference to Categotry
});

const employeeSchema = new Schema({
  name: String,
  surname: String,
  nif: String,
  phone: String,
  employee_type: { type: String, enum: ['cocinero', 'repartidor'] },
  store: { type: Schema.Types.ObjectId, ref: 'Store' }  // Reference to store
});

const storeSchema = new Schema({
  address: String,
  postal_code: String,
  city: String,
  province: String,
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }] // Reference to employee
});

const orderSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  date_order: Date,
  delivery_type: { type: String, enum: ['domicilio', 'recoger'] },
  products: [
    {
      producto: { type: Schema.Types.ObjectId, ref: 'Product' }, 
      quantity: Number
    }
  ],
  price: Number,
  notes: String,
  employee: { type: Schema.Types.ObjectId, ref: 'Employee' }, 
  dateTimeDelivery: { type: Date, default: Date.now },
  store: { type: Schema.Types.ObjectId, ref: 'Store' } // Reference to store
});

const Customer = mongoose.model('Customer', clienteSchema);
const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);
const Employee = mongoose.model('Employee', employeeSchema);
const Store = mongoose.model('Store', storeSchema);
const Order = mongoose.model('Order', orderSchema);