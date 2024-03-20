
import { PieChart } from '../../Component/Dashboard/OverviewPageComponent/PieChart'

const OverView = () => {
  return (
    <div>
    <div className="title">Overview</div>

    <div style={{ margin: "10px" }} className="all-content">
      <div className="content-1">
        <div className="content-box">
          <h1>Name</h1>
          <h2>5000</h2>
        </div>
        <div className="content-box">
          <h1>Name</h1>
          <h2>5000</h2>
        </div>
        <div className="content-box">
          <h1>Name</h1>
          <h2>5000</h2>
        </div>
      </div>
      <div className="pie-chart">
        <PieChart></PieChart>
      </div>
    </div>
  </div>
  )
}

export default OverView