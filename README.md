# Rebill SDK

Rebill SDK provides a seamless and secure integration of Rebill's payment solutions directly into your website. Our SDK ensures a consistent and branded payment experience for your customers while complying with PCI DSS standards to protect customer data.

## Features

- Easy Integration: Incorporate Rebill's payment solutions effortlessly with a simple script tag.
- Comprehensive Payment Methods: Access over 100 payment methods through Rebill Elements.
- Customization: Fully customizable checkout and card tokenization forms to match your website's design.
- Multi-Language Support: Automatically detects and adjusts to the user's browser language, supporting English, Spanish, and Portuguese.
- Security: Adheres to PCI DSS standards to ensure the security of payment information.
- Efficient Management: Tokenize (save) customer cards for future transactions securely and efficiently.


## Quickstart

## Quickstart

Learn how to integrate our JavaScript SDK into your web application and start processing payments across Latin America in **5 simple steps**.

**Step 1: Insert the SDK Script**

To make the JavaScript toolkit available in your app, you must add the following script tag to your HTML.

```jsx
<script src="https://sdk.rebill.to/v3/rebill.js"></script>
```

**Step 2: Initialize the SDK**

Initialize the SDK with your Public Key. This will create a new instance of the SDK tied to your organization.

```html
  <script>
  
	  const rebill = new Rebill(
      "pk_test_eee4f877-6b08-4b35-8cc1-b283f97f6578"
	   );
	   
  </script>
```

**Step 3: Create an instance of the checkout**

Create an instance of the checkout with your *product* or *plan id*. This initializes all the necessary values for the transaction.

```html
<script>

	const rebill = new Rebill(
	  "pk_test_eee4f877-6b08-4b35-8cc1-b283f97f6578"
	);
	
	const checkoutForm = rebill.checkout.create({
	  id: "YOUR_PRODUCT_OR_PLAN_ID",
	});

</script>
```

**Step 4: Insert Rebill Elements**

In order to use our UI solution approach, simply place the following HTML tag where you want the payment form to appear in your site: 

```html
<div id="rebill">
    <!-- Here wil be inserted the iframe -->
</div>
```

This **`div`** serves as the container where the iframe will be injected, and where the checkout form, payment methods will be rendered.

**Step 5: Mount the iframe**

Finally, you need to specify within the SDK which element ID should be targeted to render the iframe containing the payment methods on your webpage. You can achieve this by connecting it to your initialized SDK using `mount`  method:

```html
<script>

	const rebill = new Rebill(
	  "pk_test_eee4f877-6b08-4b35-8cc1-b283f97f6578"
	);
	
	const checkoutForm = rebill.checkout.create({
	  id: "YOUR_PRODUCT_OR_PLAN_ID",
	});
	
	checkoutForm.mount("rebill");

</script>
```

> Note: the id is not necesary to be rebill. You can set your custom id and then past it through the mount method
> 

At this point, if everything is correct, an iframe containing the form and available payment methods for the given price will be displayed on your page.

## Deploys
 
- [Demo transaction](https://sdk-demo.rebill.dev/transaction/index.html)
- [Demo add card](https://sdk-demo.rebill.dev/add-card/index.html)


