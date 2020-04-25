/*
async function callAwsLambdaFunction() 
{
	fetch( 'https://ymrj2kq5ue.execute-api.us-east-1.amazonaws.com/TuTprod', 
	{
		method: 'GET'
	})
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		document.getElementById("myDiv").innerHTML = response.body;
	});
}
*/

async function submitSubscriptionForm()
{
	var formData = {
		email: document.getElementById('email').value,
		discord_uname: document.getElementById("disc_usr").value
	}
	console.log(formData);
	fetch( 'https://cn63ilq03b.execute-api.us-east-1.amazonaws.com/RFcommMailProd',
	{
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => response.json())
	.then(response => console.log(response));
}

async function requestUnsubscribe()
{
	var formData = {
		email: document.getElementById("email").value,
		discord_uname: document.getElementById("disc_usr").value
	}
	console.log(formData);
	fetch( 'https://cn63ilq03b.execute-api.us-east-1.amazonaws.com/RFcommMailProd',
	{
		method: 'DELETE',
		body: JSON.stringify(formData),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => response.json())
	.then(response => console.log(response));
}

