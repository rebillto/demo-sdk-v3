/* eslint-disable no-unused-vars */

function checkValidity(form, checkout) {
  const raw_data = Array.from(form.elements).reduce(
    (prev, curr) => ({
      ...prev,
      [curr.name]: curr.value,
    }),
    {}
  );

  const payload = {
    firstName: raw_data.firstName,
    lastName: raw_data.lastName,
    email: raw_data.email,
    birthday: raw_data.birthday,
    phone: {
      countryCode: raw_data.countryCode,
      areaCode: raw_data.areaCode,
      phoneNumber: raw_data.phoneNumber,
    },
    personalId: {
      type: raw_data.type,
      value: raw_data.value,
    },
    taxId: {
      type: raw_data.tax_type,
      value: raw_data.tax_value,
    },
    address: {
      street: raw_data.street,
      number: raw_data.street_number,
      floor: raw_data.floor || undefined,
      apt: raw_data.apt || undefined,
      zipCode: raw_data.zipCode,
      city: raw_data.city,
      country: raw_data.country,
      state: raw_data.state,
      description: `${raw_data.apt}/${raw_data.floor}`,
    },
  };

  try {
    checkout.setCustomer(payload);
  } catch (e) {
    console.error("Incomplete form", e);
  }
}

async function updateStatesDropdown() {
  try {
    Rebill.getStatesBy("AR").then(response => {
      const selectElement = document.querySelector('select[name="state"]');

      const states = response.states;

      selectElement.length = 1;

      states.forEach(state => {
        const option = new Option(state, state);
        selectElement.add(option);
      });
    });
  } catch (error) {
    console.error("Error updating states dropdown:", error);
  }
}
