const { chromium  } = require('playwright');
const { expect } = require('playwright/test');

// Create API tests using Playwright's request API
test('Get request returns status 200',async () => {
  try {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const request = context.request;
    // Sending a GET request to fetch posts
    const response = await request.get('https://fakestoreapi.com/products/1');
    expect(response.status()).toBe(200);
    
    // Log status and response body
    console.log('GET Response Status:', response.status());
    const body = await response.json();
      } catch (error) {
        console.error('Error:', error);
      }
    });
test('Post request returns status 201',async () => {
   try {
   const browser = await chromium.launch();
   const context = await browser.newContext();
   const request = context.request;
       
     const postResponse = await request.post('https://reqres.in/api/users', {
        data: {
           name: 'James',
           job: 'leader'
           }
        });
    
        console.log('POST Response Status:', postResponse.status());
        expect(postResponse.status()).toBe(201); 
        const postResponseBody = await postResponse.json();
        console.log('POST Response Body:', postResponseBody);
    
  } catch (error) {
    console.error('Error:', error);
  }
});
test('Put request returns status 200',async () => {
  try {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const request = context.request;
      
    const putResponse = await request.put('https://reqres.in/api/users/2', {
       data: {
          name: 'Jill',
          job: 'Software Engineer'
          }
       });
   
       console.log('PUT Response Status:', putResponse.status());
       expect(putResponse.status()).toBe(200); 
       const putResponseBody = await putResponse.json();
       console.log('PUT Response Body:', putResponseBody);
   
 } catch (error) {
   console.error('Error:', error);
 }
});
test('Delete request returns status 204',async () => {
  try {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const request = context.request;   
    const deleteResponse = await request.delete('https://reqres.in/api/users/2');
      console.log('Delete Response Status:', deleteResponse.status());
      expect(deleteResponse.status()).toBe(204); 
 } catch (error) {
   console.error('Error:', error);
 }
});


