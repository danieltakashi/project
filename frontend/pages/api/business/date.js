import { data } from '../../../data'

const epochDate = (date) => Math.floor(new Date(date).getTime() / 1000)

export default function handler(req, res) {
  const response = [];
  data.forEach(business => {
    let entry = response.find(item => item.businessName == business.businessName)
    if (!entry) {
      let item = {
        businessName: business.businessName,
        id: business.id,
        startDate: business.startDate
      };
      response.push(item)
    } 
    else if( epochDate(entry.startDate) > epochDate(business.startDate)) {
      entry.startDate = business.startDate;
    }
  })
  res.status(200).json(response)
}
