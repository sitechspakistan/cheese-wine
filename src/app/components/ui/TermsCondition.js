import React from "react";

const policies = [
  "In case of missing items or damages in your room/apartment or common areas, the repair - or replacement - costs will be charged to the credit card details provided upon reservation, as well as any eventual extra consumption that has not been settled after check-out.",
  "Lisbon Cheese & Wine (Home Delight, Lda) is not responsible for the loss, damage, or theft of jewelry, money, or any other valuable items left in the rooms/apartment. ",
  "Forgotten personal belongings will be kept for 30 days after your check-out date. Shipping costs are the responsibility of the guest.",
  "Our rooms are all non-smoking. A fine of up to 750 euros may be applied to guests who violate this policy, in accordance with the legislation (Law no. 109/2015, of August 26th) and extra cleaning of 150 euro will be charged immediately.",
  "Guests that fail to leave before 11:30 am will be charged an additional full day’s accommodation fee. If the guest refuses to leave, Cheese & Wine reserves the right to enter the accommodation, remove their belongings, change the locks, and also to take further action as may be necessary. (The guest will be charged for the costs of any such action).",
  "During your stay at Cheese & Wine, we want you to feel at home. However, in case you come across anything wrong or not functioning/working, we kindly ask you to report it to us immediately, so we can solve the problem as soon as possible.",
  "In case you forgot to leave your keys at check-out, we kindly ask you to send them directly to our headquarters (Rua Maestro António Taborda 14, 1200-737 Lisboa) within 48 hours. In case we do not receive them within 72 hours, a cost of 45€ will be charged to you on the credit card details provided on the reservation process.",
];
const dataCollection = [
  "Home Delight, Unipessoal Lda, operating under the Cheese & Wine brand, has collected the following data from you: Name | Address | Email | Telephone | Credit card details | Passport - ID info. This data has been collected because you are our client and you made a reservation with us. This data is crucial to handle your reservation and processing the payment of your stay and possible refunds or disputes. We also use your email to send you tourist information and information about our company, services, and promotional campaigns. You can always at any time correct, remove, or block incorrect data about yourself, by sending us an email to: lisbon@cheese-wine.com.",
];

const TermsCondition = () => {
  return (
    <div className="py-8 ">
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Terms And Conditions
      </h2>

      {/* Free Cancellation Policy */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 mb-2 uppercase">Policies</h3>
        <ul className="text-sm text-gray-700 leading-5">
          {policies.map((item, i) => (
            <li key={i} className="flex gap-2 justify-start items-baseline">
              <span className=" text-gray-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Non-Refundable Rate Policy */}
      <div>
        <h3 className="font-bold text-gray-900 mb-2 uppercase">
          COLLECTION AND PROCESSING OF PERSONAL DATA
        </h3>
        <ul className="text-sm text-gray-700 leading-5 ">
          {dataCollection.map((item, i) => (
            <li key={i} className="flex gap-2 justify-start items-baseline">
              <span className="mt-1 text-gray-400 ">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TermsCondition;
