
interface Data{
    title:string,
    category:string,
    amount:number
}

const AllSupplies = () => {
    const data:Data[] = [
        { title: 'Supply Post 1', category: 'Category A', amount: 100 },
        { title: 'Supply Post 2', category: 'Category B', amount: 150 },
        { title: 'Supply Post 3', category: 'Category C', amount: 200 },
        // Add more data as needed
      ]


const updateSupplies=()=>{
    console.log('update')
}

const deleteSupplies=()=>{
    console.log('delete')
}
  return (
<>
<div className="title">Supplies</div>
    <div className="supliesContainer" style={{marginTop:'10px'}}>
      <div style={{overflowX:'auto',width:'100%'}}>
      <table style={{width:'100%'}} >
        <thead>
          <tr>
            <th style={{minWidth:'170px'}}>Title</th>
            <th style={{minWidth:'170px'}}>Category</th>
            <th style={{minWidth:'170px'}}>Amount</th>
            <th style={{minWidth:'170px'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td style={{display:'flex',gap:'5px'}} ><button onClick={deleteSupplies}>Delete</button> <button onClick={updateSupplies}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
</>
  )
}

export default AllSupplies