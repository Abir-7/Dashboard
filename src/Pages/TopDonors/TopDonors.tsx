
const TopDonors = () => {
    const data = [
        { name: 'Rafiq', email: 'kjsd@gmail.com', amount: 100 },
        { name: 'JUnayed', email: 'fgh@gmail.com', amount: 150 },
        { name: 'Rabin', email: 'abc@gmail.com', amount: 200 },
        // Add more data as needed
      ]
  return (
<>
<div className="title">Top Donors</div>
    <div className="supliesContainer" style={{marginTop:'10px'}}>
      <div style={{overflowX:'auto',width:'100%'}}>
      <table style={{width:'100%'}} >
        <thead>
          <tr>
            <th style={{minWidth:'170px'}}>Name</th>
            <th style={{minWidth:'170px'}}>Email</th>
            <th style={{minWidth:'170px'}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
</>
  )
}

export default TopDonors