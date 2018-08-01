const apiKey = '6WS2EkXk9P7eSEx1T50Kcx8LrL6U0sAP5OeDxoofPpvOvFMbWuuRVSmlvR3MKIauQdJJ-tgpipENR_e0Q7rU2fct93eZGCOfnLGeTGq2Xor4vQjdWcvjUdxQrpZgW3Yx';

const Yelp  = {
  search(term, location, sortBy){
   return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business =>({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount:business.review_count
      }));
      }
    });
  }
};

export default Yelp;
