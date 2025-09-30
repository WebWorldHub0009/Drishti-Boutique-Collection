// components/RefundAndShippingPolicy.jsx
import React from "react";

export default function RefundAndShippingPolicy() {
  return (
    <section className="bg-[#FAFAF0] text-[#1C1C1C] py-16 px-6 md:px-20 mt-1">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-red-700 border-b-2 border-red-600 pb-2">
          Refund & Cancellation Policy
        </h1>

        <p className="text-gray-700 text-sm">
          This policy outlines the procedure for cancelling an order or seeking a refund for a product or service purchased through the Platform. Please read the terms carefully:
        </p>

        <ul className="list-decimal list-inside space-y-2 text-sm text-gray-800">
          <li>
            Cancellations are only allowed if the request is made within <strong className="text-red-600">5 days</strong> of placing the order. However, if the order has already been dispatched or is out for delivery, cancellation requests may not be entertained. In such cases, you may refuse the delivery at your doorstep.
          </li>
          <li>
            Cancellation requests for perishable goods like flowers, food items, etc., will not be accepted. However, a refund or replacement may be initiated if the quality of the delivered product is proven to be unsatisfactory.
          </li>
          <li>
            For damaged or defective items, contact our customer service within <strong className="text-red-600">5 days</strong> of receipt. Your complaint will be considered after internal verification by the seller or merchant listed on the Platform.
          </li>
          <li>
            If the product received significantly differs from the image or description on the website, please notify our customer service within <strong className="text-red-600">5 days</strong>. The team will review the concern and take appropriate action.
          </li>
          <li>
            For products that include a manufacturer warranty, please direct your concern to the respective brand or manufacturer.
          </li>
          <li>
            If your refund request is approved, the amount will be processed to your original mode of payment.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-red-700 border-b border-red-500 pt-10 pb-2">
          Shipping Policy
        </h2>

        <p className="text-gray-700 text-sm">
          We are committed to delivering your orders in a timely and safe manner. Here's how shipping is handled:
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
          <li>
            All orders are shipped via registered domestic courier services or India Post (Speed Post).
          </li>
          <li>
            Products are dispatched within <strong className="text-red-600">5 days</strong> from the order or payment date, unless a specific delivery date is agreed upon at the time of order confirmation.
          </li>
          <li>
            Delivery timelines depend on the courier company or postal service. We are not liable for any delays caused by third-party logistics.
          </li>
          <li>
            Orders will be delivered to the address provided by the buyer during checkout.
          </li>
          <li>
            A confirmation of dispatch and delivery will be sent to your registered email address.
          </li>
          <li>
            If any shipping charges are applicable as per the seller or Platform Owner, those charges are non-refundable.
          </li>
        </ul>
      </div>
    </section>
  );
}
