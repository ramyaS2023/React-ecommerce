import React from "react"
import { useNavigate } from "react-router-dom"

const Order = ({ order }) => {
  const navigate = useNavigate()

  const handleTrackOrder = () => {
    alert(" Your order has been successfully placed! You will be notified once it's out for delivery.")
  }

  if (!order || !order.products || !order.shippingInformation) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Order not found or missing data.</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Thank You for Your Order!
      </h2>
      <p className="text-base md:text-lg">
        Your Order has been successfully placed. You will receive an email confirmation shortly.
      </p>

      <div className="mt-6 p-4 border rounded-lg bg-gray-300">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <p className="text-base">Order Number: {order.orderNumber}</p>

        <div className="mt-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Shipping Information</h2>
          <p>{order.shippingInformation.name}</p>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Items Ordered</h3>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2 text-base md:text-lg">
              <p>{product.name} (x {product.quantity})</p>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between text-lg md:text-xl font-semibold">
          <span>Total Price:</span>
          <span>${order.totalPrice?.toFixed(2)}</span>
        </div>

        <div className="mt-6 space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <button
            onClick={handleTrackOrder}
            className="w-full md:w-auto text-xl bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Track Order
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full md:w-auto text-xl bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
