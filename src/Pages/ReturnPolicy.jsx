// components/ReturnPolicy.jsx
import React from "react";

export default function ReturnPolicy() {
  return (
    <section className="bg-[#FAFAF0] text-[#1C1C1C] py-16 px-6 md:px-20 mt-1">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-red-700 border-b-2 border-red-600 pb-2">
          Return Policy
        </h1>

        <p className="text-gray-700 text-sm">
          At <strong>Drishti Boutique Collection</strong>, we strive to ensure a seamless and satisfactory shopping
          experience. If you're not entirely satisfied with your purchase, our return and exchange policy is outlined below.
        </p>

        <ul className="list-decimal list-inside space-y-2 text-sm text-gray-800">
          <li>
            We offer <strong className="text-red-600">returns or exchanges within 7 days</strong> from the date of your
            purchase. After this period, we unfortunately cannot offer a return, exchange, or refund.
          </li>
          <li>
            To be eligible for a return or exchange:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>The item must be unused and in the same condition as when you received it.</li>
              <li>It must be returned in its original packaging.</li>
              <li>Items purchased during a sale may not be eligible for return or exchange.</li>
            </ul>
          </li>
          <li>
            Items will only be replaced if they are found to be <strong>defective or damaged</strong> at the time of delivery.
          </li>
          <li>
            Certain products or categories may be <strong>non-returnable or non-refundable</strong>. These will be clearly
            mentioned at the time of purchase.
          </li>
          <li>
            Once your returned product is received and inspected, we will notify you via email regarding the approval or
            rejection of your return request based on our quality checks.
          </li>
        </ul>

      
      </div>
    </section>
  );
}
