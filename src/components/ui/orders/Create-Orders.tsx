import { useState } from "react";

export const OrderRegistration = () => {
  const [formData, setFormData] = useState({
    userBasicDetails: {
      receiverName: "",
      phone: "",
      address: "",
    },
    pickupAddressDetails: {
      city: "",
      location: "",
      googleMapLocation: "",
      area: "",
    },
    packageDetails: {
      packageWeight: 0,
      packageDetails: "",
    },
    paymentDetails: {
      totalPrice: "",
      method: "",
    },
  });

  const handleInputChange = (
    section: keyof typeof formData,
    field: string,
    value: string | number
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const renderInput = (
    section: keyof typeof formData,
    field: string,
    label: string,
    type: string = "text"
  ) => (
    <div>
      <label htmlFor={field} className="block text-sm text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={field}
        id={field}
        required
        className="block w-full bg-input-bg rounded-lg py-2 px-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#2FFFD1] focus:border-transparent"
        value={
          formData[section][field as keyof (typeof formData)[typeof section]]
        }
        onChange={(e) => handleInputChange(section, field, e.target.value)}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section with Gradient Background */}
          <div className="rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-second-brand opacity-90"></div>
            <div className="relative">
              <h1 className="text-3xl font-bold mb-2 text-other-white-200">
                New Order
              </h1>
              <p className="text-other-white-100">
                Create a new delivery order
              </p>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* User Basic Details */}
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  User Basic Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput(
                    "userBasicDetails",
                    "receiverName",
                    "Receiver Name"
                  )}
                  {renderInput("userBasicDetails", "phone", "Phone Number")}
                  {renderInput("userBasicDetails", "address", "Address")}
                </div>
              </section>

              {/* Pickup Address Details */}
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Pickup Address Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput("pickupAddressDetails", "city", "City")}
                  {renderInput("pickupAddressDetails", "location", "Location")}
                  {renderInput(
                    "pickupAddressDetails",
                    "googleMapLocation",
                    "Google Map Location"
                  )}
                  {renderInput("pickupAddressDetails", "area", "Area")}
                </div>
              </section>

              {/* Package Details */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Package Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput(
                    "packageDetails",
                    "packageWeight",
                    "Package Weight (kg)",
                    "number"
                  )}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="packageDetails"
                      className="block text-sm text-gray-600 mb-1"
                    >
                      Package Details
                    </label>
                    <textarea
                      name="packageDetails"
                      id="packageDetails"
                      rows={3}
                      required
                      className="block w-full bg-input-bg rounded-lg py-2 px-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#2FFFD1] focus:border-transparent"
                      value={formData.packageDetails.packageDetails}
                      onChange={(e) =>
                        handleInputChange(
                          "packageDetails",
                          "packageDetails",
                          e.target.value
                        )
                      }
                    ></textarea>
                  </div>
                </div>
              </section>

              {/* Payment Details */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput("paymentDetails", "totalPrice", "Total Price")}
                  {renderInput("paymentDetails", "method", "Payment Method")}
                </div>
              </section>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-second-brand text-other-white-200 py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2FFFD1] focus:ring-offset-2 focus:ring-offset-white transition-colors"
                >
                  Create Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
