const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: String,
  address: {
    street: String,
    number: String,
    floor: String,
    door: String,
    city: String,
    postal_code: String,
    country: String,
  },
  phone: String,
  fax: String,
  nif: String,
});

const glassesSchema = new Schema({
  brand: String,
  prescription: {
    lens_graduation_left: Double,
    lens_graduation_right: Double,
  },
  lens_color: {
    left: String,
    right: String,
  },
  frame_type: String,
  price: Double,
  supplier: { type: Schema.Types.ObjectId, ref: "Supplier" },
});

const customersSchema = new Schema({
  name: String,
  postal_address: String,
  phone: String,
  email: String,
  register_date: Date,
  referred_by: { type: Schema.Types.ObjectId, ref: "Customer" },
});

const salesSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  glasses: { type: Schema.Types.ObjectId, ref: "Glasses" },
  employee: String,
  dateSale: { type: Date, default: Date.now },
});

const Supplier = mongoose.model("Supplier", supplierSchema);
const Glasses = mongoose.model("Glasses", glassesSchema);
const Client = mongoose.model("Customer", customersSchema);
const Sale = mongoose.model("Sales", salesSchema);
