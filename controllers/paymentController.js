const Stripe = require("stripe");
const stripe = new Stripe(process.env.PASS_USER);

exports.createPay = async (req, res) => {
    // revisamos los errores
    //middleware
 /*    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    } */
    const {id, amount} = req.body

    try {
        const payment = await Stripe.paymentIntents?.create({
          amount,
          currency: "EUR",
          description: "Carrito de productos",
          payment_method: id,
          confirm: true, //confirm the payment at the same time
        });
    
        console.log(payment);
    
        return res.status(200).json({ message: "Successful Payment" });
      } catch (error) {
        console.log(error);
        return res.json({ message: error.raw.message });
      }
};