import { data } from '../../../data'

export default function handler(req, res) {
  const response = [];
  data.forEach(business => {
    let entry = response.find(item => item.businessName == business.businessName)
    if (!entry) {
      let item = {
        locations: 1,
        id: business.id,
        businessName: business.businessName
      };
      response.push(item)
    } 
    else {
      entry.locations += 1;
    }
  });
  res.status(200).json(response)
}